import React, { useState, useEffect } from 'react';

const CreateUser = ({ show, handleSelectedPage }) => {
  const [acctShow, setAcctShow] = useState(false);
  return (
    <div id='create_popUp' className={`create_popUp ${show ? 'show' : 'hide'}`}>
      <div className='form'>
        <p id='heading'>Create Account</p>
        {!acctShow && (
          <div id='field'>
            <div className='field'>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <input type='text' className='input-field' placeholder='name' id='sign_up_name' />
            </div>
            <p className='space'></p>
            <div className='field'>
              <img src='./assets/SVG/@.svg' alt='lock' />
              <input type='text' className='input-field' placeholder='email' id='sign_up_email' />
            </div>
            <p className='space'></p>
            <div className='field'>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <input type='text' className='input-field' placeholder='password' id='sign_up_password' />
            </div>
            <p className='space'></p>
            <div className='field'>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <input type='text' className='input-field' placeholder='password confirm' id='sign_up_passwordConfirm' />
            </div>
          </div>
        )}

        <div id='center' className='center'>
          <div className='loader'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
            <div className='bar4'></div>
            <div className='bar5'></div>
            <div className='bar6'></div>
            <div className='bar7'></div>
            <div className='bar8'></div>
            <div className='bar9'></div>
            <div className='bar10'></div>
            <div className='bar11'></div>
            <div className='bar12'></div>
          </div>
        </div>

        {acctShow && (
          <div id='accountData' className='accountData'>
            <h3 id='accountInfo'>Address</h3>
            <p id='createdAddress'>Address:</p>
            <h3>Private Key</h3>
            <p id='createdPrivateKey'>Private Key:</p>
            <h3>Mnemonic</h3>
            <p id='createdMnemonic'>Mnemonic:</p>
          </div>
        )}

        {!acctShow && (
          <button id='sign_up' className='button3 connectWallet' onClick={() => setAcctShow(true)}>
            Sign Up
          </button>
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
