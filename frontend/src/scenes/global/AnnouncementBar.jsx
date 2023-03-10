import React from "react";
import {
  Badge,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function AnnouncementBar() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Box
        height="40px"
        backgroundColor="black"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="anouncementBar"
      >
        <Typography className="anouncementBarItem">
          Everlane Editions: Dressed up daywear has arrived.
        </Typography>
        <Typography
          className="anouncementBarItem"
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Shop Now
        </Typography>
        {isNonMobile ? <ArrowForwardIcon className="anouncementBarItem" /> : ""}
      </Box>
    </div>
  );
}

export default AnnouncementBar;
