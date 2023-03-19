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
  const isNonMobile = useMediaQuery("(min-width:1200px)");

  return (
    <div>
      {isNonMobile ? (
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
            <Typography fontWeight="bold" fontSize="5vw">
              Design
            </Typography>
            <Typography fontSize="5vw" fontWeight="bold">
              For Spring
            </Typography>
            <Typography fontSize="2vw" mt="10px">
              New style to welcome the season.
            </Typography>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 0,
                width: "300px",
                padding: "20px 30px",
                m: "40px 0",
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
      ) : (
        <Box
          display="flex"
          mt="100px"
          flexDirection="column"
          justifyContent="center"
          alignContent="center"
        >
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
            width="100%"
            alignContent="center"
          >
            <Typography fontWeight="bold" fontSize="50px" textAlign="center">
              Design
            </Typography>
            <Typography fontSize="50px" fontWeight="bold" textAlign="center">
              For Spring
            </Typography>
            <Typography fontSize="25px" mt="10px" textAlign="center">
              New style to welcome the season.
            </Typography>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 0,
                width: "300px",
                padding: "20px 30px",
                m: "40px 0",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontSize: "15px",
                fontWeight: "bold",
                margin: " 30px auto",
              }}
              onClick={() => {
                navigate("/women");
              }}
            >
              Show New Arrivals
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Home;
