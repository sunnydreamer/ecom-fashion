import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state/slices/cartSlice";
import { useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import * as React from "react";
import { fontSize } from "@mui/system";
import { getOneItem } from "../../utilities/items-service";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const { category } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const getItem = async (e) => {
    const oneItem = await getOneItem(category, itemId);
    setItem(oneItem.data.item[0]);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // rating
  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    getItem();
  }, []);

  return item ? (
    <Box width="100%" m="80px auto" mt="120px" p="15px">
      {/* 1st Block : image in info */}
      <Box display="flex" gap="30px" flexWrap="wrap" justifyContent="center">
        <Box
          width="100%"
          maxWidth="800px"
          display="flex"
          flexWrap="wrap"
          gap="5px"
        >
          <img src={`${item.detailPics[0]}`} alt="" width="49%" />
          <img src={`${item.detailPics[1]}`} alt="" width="49%" />
          <img src={`${item.detailPics[2]}`} alt="" width="49%" />
          <img src={`${item.detailPics[3]}`} alt="" width="49%" />
        </Box>
        <Box width="30%" maxWidth="600px" minWidth="500px" padding="30px">
          <Typography sx={{ color: " gray" }}>Woman / Top</Typography>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h5">{`${item.name}`}</Typography>
            <Typography variant="h5">${`${item.price}`}</Typography>
          </Box>

          <Rating
            name="read-only"
            value={item.review}
            readOnly
            sx={{ mt: "5px" }}
          />

          <Typography sx={{ m: "20px auto" }}>
            {`${item.description}`}
          </Typography>
          <Typography sx={{ mt: "5px" }}>
            <b>Color</b>: White
          </Typography>
          <Typography sx={{ mt: "5px" }}>
            <b>Size</b>: XXS, XS
          </Typography>
          <Box display="flex" justifyContent="center" width="100%">
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                width: "100%",
                padding: "10px 40px",
                m: "50px auto",
                borderRadius: "10px",
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <Box>
            <Box
              display="flex"
              padding="20px 0"
              borderBottom="solid 1px lightgray"
            >
              <Typography sx={{ mt: "5px", color: "gray", width: "100px" }}>
                Model
              </Typography>
              <Typography sx={{ mt: "5px" }}>
                Model is 5'9″, wearing a size S
              </Typography>
            </Box>
            <Box
              display="flex"
              padding="20px 0"
              borderBottom="solid 1px lightgray"
            >
              <Typography sx={{ mt: "5px", color: "gray", width: "100px" }}>
                Materials
              </Typography>
              <Typography sx={{ mt: "5px" }}>100% Linen</Typography>
            </Box>
            <Box
              display="flex"
              padding="20px 0"
              borderBottom="solid 1px lightgray"
            >
              <Typography sx={{ mt: "5px", color: "gray", width: "100px" }}>
                Care
              </Typography>
              <Typography sx={{ mt: "5px" }}>
                Machine wash cold, wash inside out. Tumble dry low
              </Typography>
            </Box>
            <Box
              display="flex"
              padding="20px 0"
              borderBottom="solid 1px lightgray"
            >
              <Typography sx={{ mt: "5px", color: "gray", width: "100px" }}>
                Details
              </Typography>
              <Typography sx={{ mt: "5px" }}>
                Breathable linen Button-down front Front patch pockets
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* 2nd Block : recommand Products */}
      {/* <Box>recommand Products</Box> */}
      {/* 3rd Block : reviews */}
      {/* <Box>Reviews</Box> */}
    </Box>
  ) : undefined;
};

export default ItemDetails;
