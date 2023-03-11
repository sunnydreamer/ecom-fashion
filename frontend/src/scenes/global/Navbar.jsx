import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, useMediaQuery, Button } from "@mui/material";

import {
  PersonOutlined,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";

// modal
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// drawer menu

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// account dropdown

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// redux
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonSmall = useMediaQuery("(min-width:1000px)");
  // redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  // modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 760,
    height: 600,
    bgcolor: "background.paper",
    boxShadow: 12,
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
    handleClose();
  };
  const handleModalClose = () => setModalOpen(false);

  // account dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // =================== drawer menu===============
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Best Sellers", "Everyworld Stories"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["What's New", "Apparel", "Denim", "Shoe & Accessories"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box position="fixed" width="100%" top="0" zIndex="1">
      {/* Announcement bar */}
      <AnnouncementBar />
      {/* Navigation */}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="60px"
        backgroundColor="white"
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
              <Button
                variant="text"
                className="navbarItemBtn"
                onClick={() => {
                  navigate("/women");
                }}
              >
                Women
              </Button>
              <Button
                variant="text"
                className="navbarItemBtn"
                onClick={() => {
                  navigate("/men");
                }}
              >
                Men
              </Button>
              <Button
                variant="text"
                className="navbarItemBtn"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </Button>
            </Box>
          ) : (
            // swipable menu
            <React.Fragment key="left">
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                gap="10px"
                className="navbarItem"
              >
                <IconButton onClick={toggleDrawer("left", true)}>
                  <MenuIcon className="navIcon" />
                </IconButton>
              </Box>

              <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
              >
                {list("left")}
              </SwipeableDrawer>
            </React.Fragment>
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
              cursor="pointer"
              onClick={() => {
                navigate("/");
              }}
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
              <div>
                <IconButton
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <PersonOutlined className="navIcon" />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  disableScrollLock={true}
                >
                  <MenuItem onClick={handleModalOpen}>Log In</MenuItem>
                  <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                  <MenuItem onClick={handleClose}>Help Center</MenuItem>
                </Menu>
                <Modal
                  open={modalOpen}
                  onClose={handleModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  disableScrollLock={true}
                >
                  <Box sx={style} display="flex">
                    <Box width="50%">
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                    <Box width="50%" overflow="hidden">
                      <img
                        src="https://media.everlane.com/image/upload/c_fill,w_384,ar_380:655,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/Modal_Desktop-05102022_pyajh1"
                        alt=""
                      />
                    </Box>
                  </Box>
                </Modal>
              </div>
            ) : undefined}
            <Badge
              badgeContent={cart.length}
              color="secondary"
              invisible={cart.length === 0}
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
              <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                <ShoppingBagOutlined className="navIcon" />
              </IconButton>
            </Badge>
          </Box>
        </Box>
      </Box>

      {/* Sub-nav */}
      {/* <Box
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
      </Box> */}
      {isNonMobile ? <Divider /> : undefined}
    </Box>
  );
}

export default Navbar;
