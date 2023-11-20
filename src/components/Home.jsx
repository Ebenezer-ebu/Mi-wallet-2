import React from 'react';

const Home = ({ show, handleSelectedPage }) => {
  return (
    <div id='createAccount' className={`home_screen_signup ${show ? 'show' : 'hide'}`}>
      <img src='./assets/theblockchaincoders.svg' alt='' className='home_screen_img' />
      <h1 className='home_title'>Mi Wallet</h1>
      <p>Welcome to next generation crypto wallet exchange, the most complete dapp solution</p>
      <button id='openCreate' className='button3 connectWallet' onClick={() => handleSelectedPage('createAccount')}>
        Create Account
      </button>
      <p>
        Login to your account <br /> <br />
        <strong className='home_title' id='loginAccount' onClick={() => handleSelectedPage('login')}>
          LOGIN
        </strong>
      </p>
    </div>
  );
};

export default Home;
