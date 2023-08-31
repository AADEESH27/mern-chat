import React from "react";
import "../styles/myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
// import ChatArea from "./ChatArea";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div className="sb-Header-Account">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="sb-Header-Rest">
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAltIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("creategroup");
            }}
          >
            <AddCircleIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="sb-conversations">
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
        <ConversationItem props={12} />
      </div>
    </div>
  );
};

export default SideBar;
