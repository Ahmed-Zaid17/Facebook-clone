
import { useState } from "react";
import "./Home.css";
// import { Link } from "react-router-dom";


function FacebookHome() {
  const [posts, setPosts] = useState(Array(100).fill({
    user: "Syed Ahmed Zaid",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. 🐱"
  }));

  return (
    <div>
      {/* Navbar */}
      <div className="fb-navbar">
        <div className="fb-logo">🔵</div>
        <input type="text" placeholder="Search Facebook" className="fb-search" />
        <div className="fb-icons">
          
          <span>🏠</span>
          <span>👥</span>
          <span>🎥</span>
          <span>🛒</span>
          <span>🔔</span>
          <span>⚙️</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="fb-container">
        {/* Left Sidebar */}
        <div className="fb-sidebar">
          <div className="profile-section">syed ahmed zaid</div>
          <ul>
            <li>👤 Chats</li>
            <li>📅 Memories</li>
            <li>🔖 Saved</li>
            <li>👥 Groups</li>
            <li>🎥 Video</li>
            <li>🛒 Marketplace</li>
            <li>📢 Feeds</li>
            <li>📆 Events</li>
            <li>⬇️ See more</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="fb-main-content">
          {/* Story Section */}
          <div className="fb-story-section">
            <div className="story">➕ Create Story</div>
            <div className="story">🧔 Shah Sahab</div>
            <div className="story">🧵 Sweet Stitches</div>
            <div className="story">🎭 Reacts with Hassan</div>
            <div className="story">🏏 Our Vadodara</div>
            <div className="story">🧔 Our Gujarat</div>
            <div className="story">🧔 Our Gujarat</div>
            
          </div>

          {/* Post Box */}
          <div className="fb-post-box">
            <input type="text" placeholder="What's on your mind, Syaidah?" />
            <div className="post-options">
              <button>📹 Live Video</button>
              <button>🖼️ Photo/Video</button>
              <button>😊 Feeling/Activity</button>
            </div>
          </div>

          {/* Posts Section */}
          <div className="fb-feed">
            {posts.map((post, index) => (
              <div key={index} className="fb-post">
                <h3>{post.user}</h3>
                <p>{post.content}</p>
                <div className="post-actions">
                  <button>👍 Like</button>
                  <button>💬 Comment</button>
                  <button>🔄 Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        {/* <div className="fb-right-sidebar"> */}
          {/* Sponsored Section */}
          {/* <div className="sponsored-section">
            <h4>Sponsored</h4>
            <div className="sponsored-ad">🌍 airindia.com</div>
            <div className="sponsored-ad">👓 Lenskart Air</div>
          </div> */}

          {/* Contacts Section */}
          {/* <div className="contacts-section">
            <h4>Contacts</h4>
            <ul>
              <li>🟢 Zainab Khalid</li>
              <li>🟢 Aiman Zia</li>
              <li>🟢 Ahmar Siddiqui</li>
              <li>🟢 Imtiyaz Ahmed</li>
              <li>🟢 Syed Usama</li>
            </ul>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default FacebookHome;
