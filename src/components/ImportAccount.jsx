import React from 'react';

const ImportAccount = ({ show, handleSelectedPage }) => {
  return (
    <div id='import_account' className={`import_account ${show ? 'show' : 'hide'}`}>
      <div className='form'>
        <img id='close_import_account' className='goBack' src='./assets/arrowleft.png' alt='go back' onClick={() => handleSelectedPage('main')} />
        <p id='heading'>Import Account</p>
        <div className='field'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <textarea type='text' className='input-field' placeholder='private key' id='add_account_private_key' name='' cols='30' rows='5'></textarea>
        </div>

        <button id='add_New_Account' className='button3 connectWallet'>
          Import
        </button>
        <div id='load_account'></div>
        <div className='accountList' id='accountList'></div>
      </div>
    </div>
  );
};

export default ImportAccount;
