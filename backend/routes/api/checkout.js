// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const checkOutController = require("../../controllers/api/checkOutController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method

router.route("/").post(checkOutController.checkOut);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
