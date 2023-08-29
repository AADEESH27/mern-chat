import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const ChatArea = ({ props }) => {
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">T</p>
        <div className="header-text">
          <p className="con-title">Aadeesh</p>
          <p className="con-timestamp">Today</p>
        </div>
        <div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <div className="message-container">
        <ReceivedMessage />
        <SentMessage />
        <ReceivedMessage />
        <SentMessage />
        <SentMessage />
        <SentMessage />
        <SentMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a message" className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
