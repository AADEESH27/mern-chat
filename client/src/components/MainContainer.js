import React from "react";
import "../styles/myStyles.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
