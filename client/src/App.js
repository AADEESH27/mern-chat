import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import Welcome from "./components/welcome";
import ChatArea from "./components/ChatArea";
import CreateGroups from "./components/createGroups";
import OnlineUsers from "./components/onlineUsers";
import OnlineGroups from "./components/onlineGroups";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="users" element={<OnlineUsers />}></Route>
          <Route path="groups" element={<OnlineGroups />}></Route>
          <Route path="creategroup" element={<CreateGroups />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
