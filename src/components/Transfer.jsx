import React from 'react';
import Loader from './Loader';

const Transfer = ({ show, handleSelectedPage }) => {
  return (
    <div className={`transfer_form ${show ? 'show' : 'hide'}`} id='transfer_form'>
      <div className='form'>
        <img src='./assets/arrowleft.png' className='goBack' id='goBack' alt='go back to home' onClick={() => handleSelectedPage('main')} />

        <p id='heading'>Transfer Funds</p>
        <div className='field'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <input type='text' className='input-field' placeholder='amount' id='amount' />
        </div>
        <p className='space'></p>
        <div className='field'>
          <img src='./assets/SVG/@.svg' alt='lock' />
          <input type='text' className='input-field' placeholder='Transfer Address' id='address' />
        </div>

        <Loader />

        <small>
          <a href='' id='link' target='_blank'>
            Check your Transaction
          </a>
        </small>

        <button id='transferFund' className='button3 connectWallet'>
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Transfer;
