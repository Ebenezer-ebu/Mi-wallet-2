import React from 'react';

const ImportToken = ({ show, handleSelectedPage }) => {
  return (
    <div id='import_token' className={`import_token ${show ? 'show' : 'hide'}`}>
      <div className='form'>
        <img src='./assets/arrowleft.png' alt='go back' className='goBack' id='goBack_import' onClick={() => handleSelectedPage('main')} />

        <p id='heading'>Import Token</p>
        <div className='field'>
          <img src='./assets/SVG/@.svg' alt='@' />
          <input type='text' className='input-field' placeholder='token address' id='token_address' />
        </div>
        <p className='space'></p>
        <div className='field'>
          <img src='./assets/SVG/@.svg' alt='@' />
          <input type='text' className='input-field' placeholder='token name' id='token_name' />
        </div>
        <p className='space'></p>
        <div className='field'>
          <img src='./assets/SVG/@.svg' alt='@' />
          <input type='text' className='input-field' placeholder='token symbol' id='token_symbol' />
        </div>
        <button id='add_new_token' className='button3 connectWallet'>
          Import
        </button>
      </div>
    </div>
  );
};

export default ImportToken;
