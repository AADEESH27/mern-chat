import React, { useEffect, useState } from "react";
import logo from "../Logo/messenger.png";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OnlineUsers = () => {
  const [refresh, setRefresh] = useState(true);
  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const navigate = useNavigate();
  if (!userData) {
    console.log("User not authenticated");
    navigate(-1);
  }

  useEffect(() => {
    console.log("User refreshed");
    const config = {
      headers: {
        Authorization: `Bearer ${userData.data.token}`,
      },
    };
    axios.get("http://localhost:5000/user/fetchUsers", config).then((data) => {
      console.log("User data from API ", data);
      setUsers(data.data);
    });
  }, [refresh]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.4" }}
        className="online-users-container"
      >
        <div className="online-users-header">
          <img src={logo} alt="Logo" style={{ height: "7vh" }} />
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "2rem",
              fontWeight: "bolder",
            }}
          >
            Available Users
          </p>
          <IconButton
            onClick={() => {
              setRefresh(!refresh);
            }}
          >
            <RefreshIcon style={{ fontSize: "larger" }} />
          </IconButton>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <input placeholder="Search" className="search-box" />
        </div>
        <div className="online-users-list">
          {users.map((user, index) => {
            let initial = user.name[0];
            return (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="user-list"
              >
                <p className="con-icon">{initial.toUpperCase()}</p>
                <p className="con-title">{user.name}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OnlineUsers;
