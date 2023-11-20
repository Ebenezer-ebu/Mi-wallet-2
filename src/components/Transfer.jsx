import React from 'react';

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

        <div id='transfer_center' className='center'>
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
