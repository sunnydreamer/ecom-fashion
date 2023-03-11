// IMPORT EXPRESS IN ORDER TO CREATE ROUTERS
const express = require("express");

// IMPORT USER CONTROLLER
const itemController = require("../../controllers/api/itemController");

// Use express to create a router
const router = express.Router();

// Use the router to redirect to different controller depending on the method
router.route("/seed").post(itemController.seedItem);
router.route("/").get(itemController.getAllItems);
router.route("/").post(itemController.createOneItem);
// router.route("/:id").delete(itemController.deleteitem);
router.route("/:category").get(itemController.getCategory);
// router.route("/:category/:id").get(itemController.getOneitem);
// router.route("/:category/:id").put(itemController.updateitem);

// EXPORT ROUTER TO BE USED IN OTHER PARTS OF OUR APPLICATION
module.exports = router;
