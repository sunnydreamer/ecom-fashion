import { Box, Typography, useMediaQuery } from "@mui/material";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Footer() {
  const isNonSmall = useMediaQuery("(min-width:1000px)");
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor="#f5f4f4">
      {isNonSmall ? (
        <Box
          width="85%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          rowGap="30px"
          columnGap="clamp(20px, 30px, 40px)"
        >
          <Box width="clamp(20%, 25%, 40%)">
            <Typography variant="h4" fontWeight="bold" mb="30px">
              EVERLANE
            </Typography>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </Box>
          <Box>
            <Typography variant="h6" fontWeight="bold" mb="30px">
              About Us
            </Typography>
            <Typography mb="15px">Careers</Typography>
            <Typography mb="15px">Our Stores</Typography>
            <Typography mb="15px">Terms & Conditions</Typography>
            <Typography mb="15px">Privacy Policy</Typography>
          </Box>

          <Box>
            <Typography variant="h6" fontWeight="bold" mb="30px">
              Customer Care
            </Typography>
            <Typography mb="15px">Help Center</Typography>
            <Typography mb="15px">Track Your Order</Typography>
            <Typography mb="15px">Corporate & Bulk Purchasing</Typography>
            <Typography mb="15px">Returns & Refunds</Typography>
          </Box>

          <Box width="clamp(15%, 22%, 30%)">
            <Typography variant="h6" fontWeight="bold" mb="30px">
              Contact Us
            </Typography>
            <Typography mb="15px">
              50 north Whatever Blvd, Washington, DC 10501
            </Typography>
            <Typography mb="15px" sx={{ wordWrap: "break-word" }}>
              Email: mredwardroh@gmail.com
            </Typography>
            <Typography mb="15px">(222)333-4444</Typography>
          </Box>
        </Box>
      ) : (
        <div>
          <Accordion sx={{ backgroundColor: "#f5f4f4" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "medium" }}>
                About Us
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography mb="15px">Careers</Typography>
              <Typography mb="15px">Our Stores</Typography>
              <Typography mb="15px">Terms & Conditions</Typography>
              <Typography mb="15px">Privacy Policy</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#f5f4f4" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "medium" }}>
                Customer Care
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography mb="15px">Help Center</Typography>
              <Typography mb="15px">Track Your Order</Typography>
              <Typography mb="15px">Corporate & Bulk Purchasing</Typography>
              <Typography mb="15px">Returns & Refunds</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#f5f4f4" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "medium" }}>
                Contact Us
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography mb="15px">
                50 north Whatever Blvd, Washington, DC 10501
              </Typography>
              <Typography mb="15px" sx={{ wordWrap: "break-word" }}>
                Email: mredwardroh@gmail.com
              </Typography>
              <Typography mb="15px">(222)333-4444</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </Box>
  );
}

export default Footer;
