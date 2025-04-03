import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/styles.css";

const chats = [
  { id: 1, name: "Meta AI", message: "I've cleared our chat...", time: "16m", unread: false },
  { id: 2, name: "Asna Shahab", message: "Sent an attachment", time: "2h", unread: true },
  { id: 3, name: "Facebook User", message: "Message unavailable", time: "45w", unread: false },
  { id: 4, name: "WOW Quiz", message: "New challenge available!", time: "50w", unread: true },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search Messenger" />
      </div>
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id} className={`chat-item ${chat.unread ? "unread" : ""}`}>
            <div className="chat-avatar"></div>
            <div className="chat-info">
              <h4>{chat.name}</h4>
              <p>{chat.message}</p>
            </div>
            <span className="chat-time">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
