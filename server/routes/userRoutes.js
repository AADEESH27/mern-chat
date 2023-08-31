const express = require("express");
const Router = express.Router();
const {
  loginController,
  registerController,
  fetchAllUsersController,
} = require("../controller/userController");
const { protect } = require("../middleware/authmiddleware");

Router.post("/login", loginController);
Router.post("/register", registerController);
Router.get("/fetchUsers", protect, fetchAllUsersController);

module.exports = Router;
