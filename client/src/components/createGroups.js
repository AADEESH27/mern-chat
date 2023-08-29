import { IconButton } from "@mui/material";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const createGroups = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.4" }}
        className="createGroups-container"
      >
        <input placeholder="Enter Group Name" className="search-box" />
        <IconButton>
          <DoneOutlineOutlinedIcon />
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default createGroups;
