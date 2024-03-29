import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton, useMediaQuery, Button } from "@mui/material";

import { shades } from "../../theme";

import {
  PersonOutlined,
  ShoppingBagOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
import { setIsCartOpen } from "../../state/slices/cartSlice";
import { setUser } from "../../state/slices/userSlice";

// login
import LogInForm from "../../components/LogInForm";

// log out
import * as userService from "../../utilities/users-service";
import { useEffect } from "react";

function Navbar() {
  // test
  // console.log(localStorage.data);

  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonSmall = useMediaQuery("(min-width:1000px)");
  // redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  // get total count of the cart
  function getTotalItemCount(cart) {
    let totalCount = 0;

    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        totalCount += cart[i].count;
      }
    }

    return totalCount;
  }

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

  const [modal1Open, setModal1Open] = React.useState(false);
  const handleModal1Open = (value) => {
    setModal1Open(true);
    handleClose();
  };
  const handleModalClose = () => {
    setModal1Open(false);
    setModal2Open(false);
  };

  const [modal2Open, setModal2Open] = React.useState(false);
  const handleModal2Open = (value) => {
    setModal2Open(true);
    handleClose();
  };

  // account dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = (e) => {
    handleClose();
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    dispatch(setUser([]));
    setInvisible(true);
    navigate("/");
  };

  // set Invisible

  const [invisible, setInvisible] = React.useState(true);

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
        {["women", "men", "about"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text.charAt(0).toUpperCase() + text.slice(1)}
                onClick={() => {
                  navigate(`/${text}`);
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["What's New", "Sales", "Help Center"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // useEffect set user

  useEffect(() => {
    // console.log("use effect");
    dispatch(setUser(localStorage.data));
    // console.log(user);
  }, []);

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
                  <Badge color="secondary" variant="dot" invisible={invisible}>
                    <PersonOutlined className="navIcon" />
                  </Badge>
                </IconButton>
                {!localStorage.data ? (
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock={true}
                  >
                    <MenuItem onClick={handleModal1Open}>Log In</MenuItem>
                    <MenuItem onClick={handleModal2Open}>Sign Up</MenuItem>
                    <MenuItem onClick={handleClose}>Help Center</MenuItem>
                  </Menu>
                ) : undefined}
                {localStorage.data ? (
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock={true}
                  >
                    <MenuItem onClick={handleClose}>Account</MenuItem>
                    <MenuItem onClick={handleClose}>Order & Return</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Redeem a Gift Card
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Invite</MenuItem>
                    <MenuItem onClick={handleClose}>Help Center</MenuItem>
                    <MenuItem
                      onClick={() => {
                        return handleLogOut();
                      }}
                    >
                      Log Out
                    </MenuItem>
                  </Menu>
                ) : undefined}
                {/* MODAL1 */}
                <Modal
                  open={modal1Open}
                  onClose={handleModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  disableScrollLock={true}
                >
                  <Box sx={style} display="flex" overflow="hidden">
                    <LogInForm
                      value={"logIn"}
                      handleModalClose={handleModalClose}
                      setInvisible={setInvisible}
                    />

                    <Box width="50%" overflow="hidden" position="relative">
                      <IconButton
                        onClick={() => {
                          handleModalClose();
                        }}
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          color: "white",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                      <img
                        src="https://media.everlane.com/image/upload/c_fill,w_384,ar_380:655,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/Modal_Desktop-05102022_pyajh1"
                        alt=""
                      />
                    </Box>
                  </Box>
                </Modal>
                {/* MODAL2 */}
                <Modal
                  open={modal2Open}
                  onClose={handleModalClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  disableScrollLock={true}
                >
                  <Box sx={style} display="flex" overflow="hidden">
                    <LogInForm
                      value={"signUp"}
                      handleModalClose={handleModalClose}
                      setInvisible={setInvisible}
                    />
                    <Box width="50%" overflow="hidden" position="relative">
                      <IconButton
                        onClick={() => {
                          handleModalClose();
                        }}
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          color: "white",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
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
              badgeContent={getTotalItemCount(cart)}
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
