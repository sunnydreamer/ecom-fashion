import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Radio,
} from "@mui/material";
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

// RADIO
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const { category } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const getItem = async (e) => {
    const oneItem = await getOneItem(category, itemId);
    setItem(oneItem.data.item[0]);

    // console.log(item);
  };

  const getSizes = async (e) => {
    if (item) setSizes(item.size);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    // console.log("color is");
    // console.log(color);
    // console.log("size is");
    // console.log(size);

    console.log("item is");
    console.log(item);

    dispatch(addToCart({ item: { ...item, count } }));
  };

  // rating
  const [rating, setRating] = React.useState(0);

  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    getSizes();
  }, [item]);

  useEffect(() => {
    if (item) {
      setItem((prevState) => ({
        ...prevState,
        color: color,
      }));
    }
    console.log(item);
  }, [color]);

  useEffect(() => {
    if (item) {
      setItem((prevState) => ({
        ...prevState,
        size: size,
      }));
    }
    console.log(item);
  }, [size]);

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

          {/* COLOR AND SIZE */}
          {/* <Box mt="5px" display="flex" alignItems="center" gap="10px">
            <Typography sx={{ width: "40px", fontWeight: "bold" }}>
              Color:
            </Typography>
            <div>
              <Radio
                checked={size === "XS"}
                onChange={handleChange}
                value="xs"
                name="radio-buttons"
                inputProps={{ "aria-label": "XS" }}
              />
              <Radio
                checked={size === "S"}
                onChange={handleChange}
                value="s"
                name="radio-buttons"
                inputProps={{ "aria-label": "S" }}
              />
            </div>
          </Box>
          <Box mt="5px" display="flex" alignItems="center" gap="10px">
            <Typography sx={{ width: "40px", fontWeight: "bold" }}>
              Size:
            </Typography>
            {sizes.map((size, i) => (
              <Button variant="outlined" key={i}>
                {size}
              </Button>
            ))}
          </Box> */}

          <FormControl
            component="form"
            autoComplete="off"
            sx={{ width: "100%" }}
            onSubmit={handleSubmission}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">Color</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleColorChange}
              defaultValue="white"
            >
              <FormControlLabel
                value="white"
                control={<Radio />}
                label="White"
              />
              <FormControlLabel
                value="black"
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel value="blue" control={<Radio />} label="Blue" />
            </RadioGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSizeChange}
              defaultValue="Extra Small"
            >
              <FormControlLabel
                value="Extra Small"
                control={<Radio />}
                label="Extra Small"
              />
              <FormControlLabel
                value="Small"
                control={<Radio />}
                label="Small"
              />
              <FormControlLabel
                value="Medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel
                value="Large"
                control={<Radio />}
                label="Large"
              />
            </RadioGroup>

            {/* ADD TO CART BUTTOPN */}

            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                width: "100%",
                padding: "10px 40px",
                m: "50px auto",
                borderRadius: "10px",
              }}
              // onClick={
              //   () => handleSubmission()

              //   // dispatch(addToCart({ item: { ...item, count } }))
              // }
              type="submit"
            >
              ADD TO CART
            </Button>
          </FormControl>

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
