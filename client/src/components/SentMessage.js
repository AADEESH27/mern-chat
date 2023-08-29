import React from "react";

const SentMessage = () => {
  var props1 = {
    name: "Random User",
    message: "Lorem ipsum",
  };
  return (
    <div className="self-message-container">
      <div className="self-text-content">
        <p
          className="con-lastMessage"
          style={{
            color: "#283618",
            fontFamily: "'Arial', sans-serif",
            fontWeight: "500",
          }}
        >
          {props1.message}
        </p>
        <p className="self-timestamp" style={{ color: "#283618" }}>
          13:00
        </p>
      </div>
    </div>
  );
};

export default SentMessage;
