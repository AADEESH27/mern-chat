import React from "react";

const ReceivedMessage = () => {
  var props1 = {
    name: "Random User",
    message:
      "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  };
  return (
    <div className="other-message-container">
      <div className="other-text-content">
        <p
          className="con-title"
          style={{ color: "#283618", fontWeight: "bolder" }}
        >
          {props1.name}
        </p>
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
        <p className="con-timestamp" style={{ color: "#283618" }}>
          12:00
        </p>
      </div>
    </div>
  );
};

export default ReceivedMessage;
