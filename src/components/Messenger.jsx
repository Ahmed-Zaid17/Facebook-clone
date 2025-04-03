import React, { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import ProfileSidebar from "./ProfileSidebar";
import "../styles/styles.css";

const Messenger = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="messenger-layout">
      <ChatSidebar setSelectedChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} />
      <ProfileSidebar selectedChat={selectedChat} />
    </div>
  );
};

export default Messenger;
