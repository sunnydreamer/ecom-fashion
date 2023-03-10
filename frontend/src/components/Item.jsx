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

function Item() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box margin="25px" width="20%" minWidth="200px">
      {/* picture showcase */}
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          width="100%"
          src={`https://media.everlane.com/image/upload/c_fill,w_1080,ar_250:312,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/3b3169a0_7937`}
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
        <Typography sx={{ marginRight: "20px" }}>
          The Pima Micro-Rib Crew Tee
        </Typography>
        <Typography fontWeight="bold">$40</Typography>
      </Box>
    </Box>
  );
}

export default Item;
