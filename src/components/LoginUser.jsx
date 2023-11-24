import React, { useEffect, useState } from 'react';
import { decrypt } from '../utils/crypto_func';

const LoginUser = ({ show, handleSelectedPage }) => {
  const [walletPass, setWalletPass] = useState('');
  const [password, setPassword] = useState('');
  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const handleLogin = () => {
    if (password === walletPass) {
      handleSelectedPage('main');
    } else {
      alert('Please enter a valid password');
    }
  };
  useEffect(() => {
    const miwallet = JSON.parse(localStorage.getItem('MIWALLET'));
    if (miwallet && miwallet.k) {
      let decode = decrypt(miwallet.k, encIv, encryptKey);
      decode = JSON.parse(decode);
      setWalletPass(decode.password);
    }
  }, []);
  return (
    <div id='LoginUser' className={`home_screen_login ${show ? 'show' : 'hide'}`}>
      <img src='./assets/theblockchaincoders.svg' alt='logo' className='home_screen_img' />
      <h1 className='home_title'>Mi Wallet</h1>
      <p>Welcome back! The decentralized web Dapp</p>
      <div className='form' id='login_form'>
        <div className='field'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <input type='text' id='login_password' value={password} className='input-field' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <button id='login' className='button3 connectWallet' onClick={handleLogin}>
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
