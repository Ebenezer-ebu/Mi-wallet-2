import React from 'react';

const LoginUser = ({ show, handleSelectedPage }) => {
  return (
    <div id='LoginUser' className={`home_screen_login ${show ? 'show' : 'hide'}`}>
      <img src='./assets/theblockchaincoders.svg' alt='logo' className='home_screen_img' />
      <h1 className='home_title'>Mi Wallet</h1>
      <p>Welcome back! The decentralized web Dapp</p>
      <div className='form' id='login_form'>
        <div className='field'>
          <img src='./assets/SVG/@.svg' alt='at' />
          <input type='text' id='login_email' className='input-field' placeholder='email' />
        </div>
        <div className='field'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <input type='text' id='login_password' className='input-field' placeholder='password' />
        </div>
      </div>
      <button id='login' className='button3 connectWallet' onClick={() => handleSelectedPage('main')}>
        Login
      </button>
      <p>
        Login to your account <br /> <br />
        <strong className='home_title' id='accountCreate' onClick={() => handleSelectedPage('home')}>
          Create Account
        </strong>
      </p>
    </div>
  );
};

export default LoginUser;
