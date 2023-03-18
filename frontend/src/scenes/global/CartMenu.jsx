import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import cartSlice, {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state/slices/cartSlice";
import { useNavigate } from "react-router-dom";

// inport checkout service
import * as checkOutService from "../../utilities/checkout-service";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const totalPrice =
    cart.length > 0
      ? cart.reduce((total, item) => {
          return total + item.count * item.item.price;
        }, 0)
      : 0;

  // console.log(JSON.stringify({ items: cart }));

  return (
    <Box //Overlay
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0,0,0,0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      {/* MODAL */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="450px"
        height="100%"
        backgroundColor="white"
      >
        {cart.length > 0 ? (
          <Box
            overflow="auto"
            height="100%"
            display="flex"
            flexDirection="column"
          >
            {/* HEADER */}
            <FlexBox mb="15px" height="50px" padding="35px">
              <Typography variant="h5" fontWeight="bold">
                Your Cart
              </Typography>
              <IconButton
                onClick={() => {
                  dispatch(setIsCartOpen({}));
                }}
              >
                <CloseIcon />
              </IconButton>
            </FlexBox>
            {/* CART LIST */}
            <Box padding="35px">
              {cart.map((item, i) => (
                <Box key={`${item.item.name}-${item.item._id}`}>
                  <FlexBox p="15px 0" gap="20px">
                    <Box flex="1 1 30%">
                      <img
                        alt={item?.item.name}
                        width="123px"
                        height="164px"
                        src={item?.item.categoryPic}
                      />
                    </Box>
                    <Box flex="1 1 70%">
                      {/* ITEM NAME */}
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">
                          {item.item.name}
                        </Typography>
                        <IconButton
                          onClick={() => {
                            dispatch(removeFromCart({ id: item.item._id }));
                          }}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </IconButton>
                      </FlexBox>
                      {/* <Typography>{item.description}</Typography> */}
                      {/* AMOUNT */}
                      <FlexBox m="15px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border={`1.5px solid gray`}
                          borderRadius="15px"
                        >
                          <IconButton
                            onClick={() =>
                              item.count === 1
                                ? dispatch(
                                    removeFromCart({ id: item.item._id })
                                  )
                                : dispatch(decreaseCount({ id: item.item._id }))
                            }
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.count}</Typography>
                          <IconButton
                            onClick={() =>
                              dispatch(increaseCount({ id: item.item._id }))
                            }
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                        {/* Price */}
                        <Typography fontWeight="bold">
                          ${item.item.price}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              ))}
            </Box>
            {/* ACTIONS */}
            <Box m="20px 0" padding="35px">
              <FlexBox m="20px 0">
                <Typography fontWeight={"bold"}>
                  Subtotal({cart.length} items)
                </Typography>
                <Typography fontWeight={"bold"}>${totalPrice}</Typography>
              </FlexBox>
              <Button
                sx={{
                  backgroundColor: shades.primary[400],
                  color: "white",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "20px 40px",
                  m: "20px 0",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  // navigate("/checkout");
                  checkOutService.checkOut(cart);
                  dispatch(setIsCartOpen({}));
                }}
              >
                Continue To Checkout
              </Button>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Psst, get it now before it sells out.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box
            overflow="auto"
            height="100%"
            display="flex"
            flexDirection="column"
          >
            {/* HEADER */}
            <FlexBox mb="15px" height="50px" padding="35px">
              <Typography variant="h5" fontWeight="bold">
                Your Cart
              </Typography>
              <IconButton
                onClick={() => {
                  dispatch(setIsCartOpen({}));
                }}
              >
                <CloseIcon />
              </IconButton>
            </FlexBox>

            {/* Text */}
            <Box
              flex="1"
              display="flex"
              flexDirection="column"
              padding="35px"
              justifyContent="center"
            >
              <Box padding="15px 0">
                <Typography sx={{ fontSize: "25px" }}>
                  Your cart is empty.
                </Typography>
                <Typography sx={{ fontSize: "25px" }}>
                  Not sure where to start?
                </Typography>
              </Box>
              <Box padding="15px 0">
                <Typography sx={{ fontSize: "25px" }}>
                  Shop Best Sellers
                </Typography>
              </Box>
            </Box>
            {/* Picture */}
            <Box backgroundColor="pink" flex="2" overflow="hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F74a827abf8e14106b04b0d87ed489fee?format=webp&width=1600"
                alt=""
                width="100%"
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CartMenu;
