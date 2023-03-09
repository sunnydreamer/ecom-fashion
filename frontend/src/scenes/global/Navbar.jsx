import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  IconButton,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import {
  PersonOutlined,
  ShoppingOutlined,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";

function Navbar() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonSmall = useMediaQuery("(min-width:1000px)");
  // const dispatch = useDispatch();
  return (
    <Box position="fixed" width="100%">
      {/* Announcement bar */}
      <AnnouncementBar />
      {/* Navigation */}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="60px"
      >
        <Box
          width="90%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          className="navbar"
        >
          {/* Menu */}

          {isNonSmall ? (
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              gap="10px"
              className="navbarItem"
            >
              <Box>Women</Box>
              <Box>Men</Box>
              <Box>About</Box>
              <Box>everworld stories</Box>
            </Box>
          ) : (
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              gap="10px"
              className="navbarItem"
            >
              <IconButton color="inherit" aria-label="open drawer">
                <MenuIcon className="navIcon" />
              </IconButton>
            </Box>
          )}

          {/* logo */}
          <Box
            className="navbarItem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <svg
              width="128"
              height="14px"
              viewBox="0 0 128 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M116.776 0V14H127.933V11.2198H119.6V8.38015H127.032V5.61985H119.6V2.78015H127.933V0H116.776ZM108.221 0V9.45982L101.311 0H98.5062V14H101.311V4.54018L108.222 14H111.066V0H108.222H108.221ZM86.0055 0L80.3766 14H83.3211L84.4828 11.1397H90.2922L91.4341 14H94.4191L88.7902 0H86.0055ZM87.3875 3.7201L89.2307 8.48018H85.5046L87.3875 3.7201ZM67.1754 0V14H77.3717V11.2198H69.9998V0H67.1754ZM52.4714 2.71982V5.70003H57.6201C58.4017 5.70003 59.0625 5.09986 59.0625 4.22024C59.0625 3.34063 58.4216 2.71982 57.6201 2.71982H52.4714ZM58.7619 14L55.396 8.38015H52.4714V14H49.647V0H57.6201C60.0238 0 61.867 1.74018 61.867 4.17976C61.867 6.35974 60.4651 7.9197 58.5019 8.28012L61.9672 14H58.7619ZM32.9201 0V14H44.0785V11.2198H35.7453V8.38015H43.1776V5.61985H35.7453V2.78015H44.0785V0H32.9201ZM26.1494 0L22.1227 10.1997L18.0753 0H15.0307L20.6596 14H23.484L29.1336 0H26.1486H26.1494ZM0.0865293 0L0.0666504 14H11.245V11.2198H2.91092V8.38015H10.3432V5.61985H2.91092V2.78015H11.2442V0H0.0865293Z"
                fill="black"
              ></path>
            </svg>
          </Box>
          {/* icons */}
          <Box
            display="flex"
            zIndex="2"
            justifyContent="flex-end"
            alignItems="center"
            gap="5px"
            className="navbarItem"
          >
            <IconButton>
              <SearchOutlined className="navIcon" />
            </IconButton>
            {isNonMobile ? (
              <IconButton>
                <PersonOutlined className="navIcon" />
              </IconButton>
            ) : undefined}
            <Badge
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  right: 5,
                  top: 5,
                  padding: "0 4px",
                  height: "14px",
                  minWidth: "13px",
                },
              }}
            >
              <IconButton>
                <ShoppingBagOutlined className="navIcon" />
              </IconButton>
            </Badge>
          </Box>
        </Box>
      </Box>

      {/* Sub-nav */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        backgroundColor="yellow"
        height="40px"
      >
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Navbar;
