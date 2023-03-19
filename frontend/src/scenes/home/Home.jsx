import React from "react";
import AnnouncementBar from "../global/AnnouncementBar";
import Item from "./../../components/Item";
import MainCarousel from "./MainCarousel";
import mainCarousel from "./MainCarousel";
import CategoryPage from "./../../scenes/category/CategoryPage";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  useMediaQuery,
  Divider,
  Button,
} from "@mui/material";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Box display="flex" mt="100px">
        <Box flex="2">
          <img
            src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1600/v1/i/287f132e_b893.jpg"
            alt=""
            style={{ width: "100%" }}
          />
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          padding="50px"
        >
          <Typography variant="h1" fontWeight="bold">
            Design
          </Typography>
          <Typography variant="h1" fontWeight="bold">
            For Spring
          </Typography>
          <Typography fontSize="25px" mt="20px">
            New style to welcome the season.
          </Typography>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: 0,
              width: "300px",
              padding: "20px 40px",
              m: "50px 0",
              borderRadius: "10px",
              textTransform: "capitalize",
              fontSize: "15px",
              fontWeight: "bold",
            }}
            onClick={() => {
              navigate("/women");
            }}
          >
            Show New Arrivals
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
