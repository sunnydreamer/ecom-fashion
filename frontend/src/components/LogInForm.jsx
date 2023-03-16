// IMPORT REACT
import React, { useEffect, useState } from "react";

// ADDITIONAL IMPORTS
import { Link, useNavigate } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../src/state/slices/userSlice";

// text
import TextField from "@mui/material/TextField";

// Sign Up
import { signUp, login } from "../utilities/users-service";
import Alert from "@mui/material/Alert";

import {
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";

function LogInForm({ value, handleModalClose }) {
  const navigate = useNavigate();
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  // setting type
  const [type, setType] = useState(value);

  // redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // sign up submission

  const handleSignUpSubmission = async (e) => {
    e.preventDefault();
    setError(null);

    // Retrieve state
    const state = { email, password, confirm, error };
    try {
      // Make a copy of our data
      const formData = { ...state };

      delete formData["confirm"];
      delete formData["error"];

      // Send the data to our backend
      const userData = await signUp(formData);

      // Log the data to the console
      dispatch(setUser(userData.data));
      // console.log("currentUserIs");

      console.log("signup form set user");
      console.log(user);

      // console.log(user);
      handleModalClose();
      navigate("/");
    } catch (error) {
      setError("Sign Up Failed - Try Again");
    }
  };

  // Create a function to handle form submission
  const handleLogInSubmission = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Retrieve the logged in user
      const userData = await login({ email, password });

      // Add the user to state
      dispatch(setUser(userData.data));

      handleModalClose();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setConfirm("");
    setError("");
  }, [type]);

  return type === "logIn" ? (
    // ===============================LOGIN FORM======================================
    <Box
      width="50%"
      padding="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Good to see you again
      </Typography>
      <Typography id="modal-modal-title" variant="h8">
        Please log in to your account.
      </Typography>
      {error ? (
        <Alert severity="error" sx={{ width: "90%", mt: "10px" }}>
          {error}
        </Alert>
      ) : undefined}
      <Box width="100%" textAlign="center" p="20px 0">
        <Box
          component="form"
          autoComplete="off"
          // onSubmit={(e) => {
          //   return handleFormSubmission(e);
          // }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="20px"
          mb="10px"
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            required
            sx={{ width: "90%" }}
            onChange={(e) => {
              return handleInputChange(e);
            }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            required
            sx={{ width: "90%" }}
            onChange={(e) => {
              return handleInputChange(e);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ width: "90%", backgroundColor: "gray", padding: "13px" }}
            onClick={(e) => {
              return handleLogInSubmission(e);
            }}
          >
            LOG IN
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box display="flex" gap="5px">
            <Typography>Dont have a account?</Typography>
            <Typography
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                setType("signUp");
              }}
            >
              Sign up
            </Typography>
          </Box>

          <Typography
            sx={{ textDecoration: "underline", cursor: "pointer", mt: "3px" }}
          >
            Reset password
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : (
    // ===============================SIGNUP FORM======================================
    <Box
      width="50%"
      padding="20px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Create a password
      </Typography>
      <Typography id="modal-modal-title" variant="h8" width="50%" mt="10px">
        Complete your sign up to receive your discount.*
      </Typography>
      {error ? (
        <Alert severity="error" sx={{ width: "90%", mt: "10px" }}>
          {error}
        </Alert>
      ) : undefined}
      <Box width="100%" textAlign="center" p="20px 0">
        <Box
          component="form"
          autoComplete="off"
          onSubmit={(e) => {
            return handleSignUpSubmission(e);
          }}
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap="20px"
          mb="10px"
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            required
            sx={{ width: "90%" }}
            onChange={(e) => {
              return handleInputChange(e);
            }}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            value={password}
            required
            sx={{ width: "90%" }}
            onChange={(e) => {
              return handleInputChange(e);
            }}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ width: "90%", backgroundColor: "gray", padding: "13px" }}
          >
            Sign Up
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box display="flex" gap="5px">
            <Typography>Already have an account?</Typography>
            <Typography
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => {
                setType("logIn");
              }}
            >
              Log In
            </Typography>
          </Box>

          <Typography
            sx={{
              width: "82%",
              mt: "25px",
              fontSize: "0.75rem",
              color: "gray",
            }}
          >
            New user discount applies only to full price items. By providing
            your email address, you agree to our Privacy Policy and Terms of
            Service.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LogInForm;
