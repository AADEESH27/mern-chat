import React from "react";
import logo from "../Logo/messenger.png";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AnimatePresence, motion } from "framer-motion";

const onlineGroups = () => {
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
            Online Groups
          </p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <input placeholder="Search" className="search-box" />
        </div>
        <div className="online-users-list">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="user-list"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test 1</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="user-list"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test 1</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default onlineGroups;
