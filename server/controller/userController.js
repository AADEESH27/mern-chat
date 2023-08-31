const express = require("express");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

const loginController = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name: name });
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(500).json({
      message: "Invalid username or password",
    });
  }
});

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check for all feilds
  if (!name || !email || !password) {
    res.status(500).json({
      message: "Please fill all feilds",
    });
  }

  //pre existing user
  const userExits = await User.findOne({ email: email });
  if (userExits) {
    res.status(405).json({
      message: "User already exists",
    });
  }

  //user name already taken
  const userNameExits = await User.findOne({ name: name });
  if (userNameExits) {
    res.status(406).json({
      message: "User name already exists",
    });
  }

  //creating user
  const user = await User.create({ name, email, password });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
      token: generateToken(user._id),
    });
  } else {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

module.exports = { loginController, registerController };
