/* global chrome */
import React, { useState, useEffect } from 'react';
import { generateAccount } from '../utils/AccountUtils';
import Loader from './Loader';
import { encrypt } from '../utils/crypto_func';

const CreateUser = ({ show, handleSelectedPage }) => {
  const [loading, setLoading] = useState(false);
  const [acctShow, setAcctShow] = useState(false);
  const [auth, setAuth] = useState({
    password: '',
    confirmPassword: '',
  });
  const [seedphrase, setSeedphrase] = useState('');
  const [account, setAccount] = useState(null);
  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuth((prev) => ({ ...prev, [name]: value }));
  };

  const createAccount = async () => {
    const result = await generateAccount('', 0, auth.password);

    if (result.message) {
      setLoading(false);
      return;
    } else {
      setLoading(false);
      setAccount(result.account);
      setSeedphrase(result.seedPhrase);
      setAcctShow(true);
      let data = {
        password: auth.password,
        seedphrase: result.seedPhrase,
        account: [result.account],
      };
      data = JSON.stringify(data);
      const encoded = encrypt(data, encIv, encryptKey);
      localStorage.setItem('MIWALLET', JSON.stringify(encoded));
      // chrome.storage.local.get(function (result) {
      //   console.log(result);
      // });
      // const exStore = chrome.storage.local.set({ user: data });
    }
  };

  // console.log(loading, seedphrase, account, acctShow);
  return (
    <div id='create_popUp' className={`create_popUp ${show ? 'show' : 'hide'}`}>
      <div className='form'>
        <p id='heading'>Create Account</p>
        {!acctShow && (
          <div id='field'>
            <div className='field'>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <input type='text' name='password' value={auth.password} className='input-field' placeholder='password' id='sign_up_password' onChange={handleChange} />
            </div>
            <p className='space'></p>
            <div className='field'>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <input type='text' name='confirmPassword' className='input-field' value={auth.confirmPassword} placeholder='password confirm' id='sign_up_passwordConfirm' onChange={handleChange} />
            </div>
          </div>
        )}

        {loading && <Loader />}
        {/* <Loader /> */}

        {!acctShow && (
          <button
            id='sign_up'
            className='button3 connectWallet'
            onClick={() => {
              setLoading(true);
              createAccount();
            }}
          >
            Sign Up
          </button>
        )}
        {acctShow && (
          <div id='accountData' className='accountData'>
            <h3 id='accountInfo'>Address</h3>
            <p id='createdAddress'>{account.address}</p>
            <h3>Private Key</h3>
            <p id='createdPrivateKey'>{account.privateKey}</p>
            <h3>Mnemonic</h3>
            <p id='createdMnemonic'>{seedphrase}</p>
          </div>
        )}
        {acctShow && (
          <button
            id='goHomePage'
            className='button3 connectWallet'
            onClick={() => {
              setAcctShow(false);
              handleSelectedPage('main');
            }}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
