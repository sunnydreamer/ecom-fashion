import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../state";

function Item({ element }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  // console.log(element);

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
          src={element.picture}
          onClick={() => navigate(`/item/id`)}
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
            justifyContent="space-between"
          >
            <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
              <RemoveIcon />
            </IconButton>
            <Typography>{count}</Typography>
            <IconButton onClick={() => setCount(count + 1)}>
              <AddIcon />
            </IconButton>
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
