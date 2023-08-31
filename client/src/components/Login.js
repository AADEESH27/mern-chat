import React, { useState } from "react";
import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  Alert,
} from "@mui/material";
import logo from "../Logo/messenger.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/user/login",
        data,
        config
      );
      console.log("Login: ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid User name or password",
        key: Math.random(),
      });
    }
    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/user/register",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setSignInStatus({
          msg: "User with this email ID already exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setSignInStatus({
          msg: "User with this name already exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 500) {
        setSignInStatus({
          msg: "Please fill all feilds",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo" />
        </div>
        {showLogin && (
          <div className="login-box">
            <p className="login-text">Login To Your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              style={{ fontWeight: "bolder" }}
              name="name"
            />
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
            />
            <Button
              variant="outlined"
              className="login-button"
              onClick={loginHandler}
              isLoading
            >
              Login
            </Button>
            <p style={{ fontWeight: "bolder", fontSize: "large" }}>
              New user ?
              <Button
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Register
              </Button>
            </p>
            {logInStatus ? (
              <Alert severity="error" style={{ backgroundColor: "#a2d2ff" }}>
                {logInStatus.msg}
              </Alert>
            ) : null}
          </div>
        )}
        {!showLogin && (
          <div className="login-box">
            <p className="login-text">Register Your Account</p>
            <TextField
              id="standard-basic"
              label="Enter User Name"
              style={{ fontWeight: "bolder" }}
              name="name"
              onChange={changeHandler}
            />
            <TextField
              id="standard-basic"
              label="Enter Email"
              style={{ fontWeight: "bolder" }}
              name="email"
              onChange={changeHandler}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              onChange={changeHandler}
            />
            <Button
              variant="outlined"
              className="login-button"
              onClick={signUpHandler}
            >
              Register
            </Button>
            <p style={{ fontWeight: "bolder", fontSize: "large" }}>
              Already a user ?
              <Button
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Login
              </Button>
            </p>
            {signInStatus ? (
              <Alert severity="error" style={{ backgroundColor: "#a2d2ff" }}>
                {signInStatus.msg}
              </Alert>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
