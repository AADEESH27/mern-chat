import React from "react";
import { TextField, Button } from "@mui/material";
import logo from "../Logo/messenger.png";
import { Link } from "react-router-dom";
import welcome from "./welcome";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login To Your Account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          style={{ fontWeight: "bolder" }}
        />
        <TextField id="standard-basic" label="Password" type="password" />
        <Button variant="outlined" className="login-button">
          <Link to="/" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Login;
