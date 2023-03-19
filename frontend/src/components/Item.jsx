import { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  increaseCount,
  decreaseCount,
  removeFromCart,
} from "../state/slices/cartSlice";
import { getOneItem } from "../../src/utilities/items-service";
import { useParams } from "react-router-dom";

function Item({ element }) {
  // get cart info
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);

  // find index in the cart

  const existingItemIndex = cart.findIndex(
    (item) => item.item._id === element._id
  );
  // console.log(existingItemIndex);
  // console.log(cart[existingItemIndex] ? cart[existingItemIndex] : "none");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(
    cart[existingItemIndex] ? cart[existingItemIndex].count : 0
  );
  const [isHovered, setIsHovered] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // get item
  const [item, setItem] = useState(null);
  const { category } = useParams();
  const itemId = element._id;

  const getItem = async (e) => {
    const oneItem = await getOneItem(category, itemId);
    setItem(oneItem.data.item[0]);
  };

  // ================
  function increase(elementId, cart) {
    setCount(count + 1);
    // console.log(cart);

    const existingItemIndex = cart.findIndex(
      (item) => item.item._id === elementId
    );
    if (existingItemIndex >= 0) {
      dispatch(increaseCount({ id: cart[existingItemIndex].item._id }));
    } else {
      // get item here
      dispatch(addToCart({ item: { ...item, count } }));
    }
  }

  function decrease(elementId, cart) {
    // console.log(cart);

    const existingItemIndex = cart.findIndex(
      (item) => item.item._id === elementId
    );
    // console.log(existingItemIndex);

    if (existingItemIndex === -1) {
      return;
    } else {
      setCount(Math.max(count - 1, 0));
    }

    count === 1
      ? dispatch(removeFromCart({ id: cart[existingItemIndex].item._id }))
      : dispatch(decreaseCount({ id: cart[existingItemIndex].item._id }));
  }

  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    console.log("cahnge!!");
  }, [cart]);

  return (
    <Box>
      {/* picture showcase */}
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          width="100%"
          src={element.categoryPic}
          onClick={() => navigate(`/${element.category}/${element._id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 15%"
        >
          <Box
            display="flex"
            alignItems="center"
            backgroundColor="white"
            borderRadius="10px"
            // justifyContent="space-between"
            justifyContent="center"
            onClick={() => increase(element._id, cart)}
            overflow="hidden"
          >
            {/* <IconButton onClick={() => decrease(element._id, cart)}>
              <RemoveIcon />
            </IconButton>
            <Typography>{count}</Typography>
            <IconButton onClick={() => increase(element._id, cart)}>
              <AddIcon />
            </IconButton> */}
            <Button sx={{ width: "100%" }}>Quick Add</Button>
          </Box>
        </Box>
      </Box>
      {/* description  */}
      <Box
        mt="5px"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Typography sx={{ marginRight: "20px" }}>{element.name}</Typography>
        <Typography fontWeight="bold">$ {element.price}</Typography>
      </Box>
    </Box>
  );
}

export default Item;
