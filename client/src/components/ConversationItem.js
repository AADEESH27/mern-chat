import { LinearProgress } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ChatArea from "./ChatArea";

const ConversationItem = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon">T</p>
      <p className="con-title">Test 1</p>
      <p className="con-lastMessage">Hello</p>
      <p className="con-timestamp">Today</p>
    </div>
  );
};

export default ConversationItem;
