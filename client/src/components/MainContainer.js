import React from "react";
import "../styles/myStyles.css";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import Welcome from "./welcome";
import CreateGroups from "./createGroups";
import OnlineUsers from "./onlineUsers";
import { Outlet, Route, Routes } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="MainContainer">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
