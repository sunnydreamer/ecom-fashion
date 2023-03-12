import React from "react";
import {
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";

function AboutPage() {
  return (
    <Box mt="100px">
      <Box position="relative" textAlign="center">
        <img
          src="https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_1600/v1/i/89f45c02_bb65.jpg"
          style={{ objectFit: "cover", width: "100%" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontFamily: "sans-serif",
            width: "50%",
          }}
        >
          <Typography sx={{ fontSize: "4vw" }}>
            We believe we can all make a difference.
          </Typography>
          <Typography
            sx={{ fontSize: "clamp(1.5vw, 2vw, 20px)", marginTop: "10px" }}
          >
            Our way: Exceptional quality. Ethical factories. Radical
            Transparency.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
