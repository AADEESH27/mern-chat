import React from "react";
import logo from "../Logo/messenger.png";
const welcome = () => {
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
