// IMPORT REACT
import React, { useState } from "react";

// ADDITIONAL IMPORTS
// import { login } from "../utilities/users-service";
import { Link, useNavigate } from "react-router-dom";

// text
import TextField from "@mui/material/TextField";

import {
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  Button,
  Typography,
} from "@mui/material";

function LogInForm({ value }) {
  const navigate = useNavigate();
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState(value);
  console.log(type);

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      //   const user = await login({ email, password });

      //   // Add the user to state
      //   setUser(user.data);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return type === "logIn" ? (
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
      <Box width="100%" textAlign="center" p="30px 0">
        <Box
          component="form"
          autoComplete="off" // onSubmit={(e) => {
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

          <Typography sx={{ textDecoration: "underline", cursor: "pointer" }}>
            Reset password
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : (
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
      <Box width="100%" textAlign="center" p="30px 0">
        <Box
          component="form"
          autoComplete="off" // onSubmit={(e) => {
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
              Sign In
            </Typography>
          </Box>

          <Typography
            sx={{
              width: "82%",
              mt: "40px",
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
