import React from "react";
import logo from "../Logo/messenger.png";
import { useNavigate } from "react-router-dom";
const welcome = () => {
  const navigate = useNavigate;
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData) {
    console.log("User not authenticated");
    navigate("/");
  }
  return (
    <div className="welcome-container">
      <img src={logo} alt="Logo" className="welcome-logo" />
      <p
        style={{
          color: "#a2d2ff",
          fontWeight: "bolder",
          fontSize: "larger",
          fontFamily: "-moz-initial",
        }}
      >
        ROW HOUSE MESSENGER
      </p>
    </div>
  );
};

export default welcome;
