import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="image-gallery">
          {/* <img src="src/assets/images/facebook-logo.jpeg" alt="" className="gallery-item" style={h}/> */}
          <img src="src/assets/images/login-page-img.png" alt="" className="gallery-item" />
        </div>
        <h1 className="login-title">
          Explore <br></br> the <br></br>things<br></br> <span className="highlight">you love.</span>
        </h1>
      </div>
      <div className="right-section">
        <div className="login-box">
          <h2>Log in to Facebook</h2>
          <input type="text" placeholder="Email address or mobile number" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Log in</button>
          <a href="#" className="forgot-password">
            Forgotten password?
          </a>
          <hr />
          <button className="create-account">Create new account</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
