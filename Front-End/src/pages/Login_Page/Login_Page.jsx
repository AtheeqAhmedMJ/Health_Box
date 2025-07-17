import React from 'react';
import Background from '../../components/backgrounds/Background';
import './Login_Page.css';

const Login_Page = () => {
  return (
    <>
      <Background />
      <div className="login-container">
        <h1 className="login-title">LOGIN</h1>
        <div className="login-form">
          <label className="login">EMAIL</label>
          <input type="text" placeholder="Enter email" className="login-input" />

          <label className="login">PASSWORD</label>
          <input type="password" placeholder="Enter password" className="login-input" />

          <button className="login-button">SIGN IN</button>
          <p className="login-forgot">Forgot password?</p>
        </div>
      </div>
    </>
  );
};

export default Login_Page;
