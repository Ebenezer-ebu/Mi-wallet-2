import React from 'react';

const Main = ({ show, handleSelectedPage }) => {
  return (
    <div className={`home ${show ? 'show' : 'hide'}`} id='home'>
      <div className='home_header'>
        <div>
          <p id='userAddress'>connecting...</p>
        </div>
        <div>
          <p>Active</p>
        </div>
      </div>

      <img src='./assets/theblockchaincoders.svg' className='home_header_img' alt='' />
      <h1 id='accountBlance'>0.00 MATIC</h1>

      <div className='home_features'>
        <div className='home_feature_item'>
          <img src='./assets/buy.png' className='home_features_img' alt='' />
          <p className='text'>Buy</p>
        </div>
        <div className='home_feature_item' id='open_Transfer' onClick={() => handleSelectedPage('transferFunds')}>
          <img src='./assets/send.png' className='home_features_img' alt='' />
          <p className='text'>Send</p>
        </div>
        <div className='home_feature_item' id='openAccountImport' onClick={() => handleSelectedPage('importAccounts')}>
          <img src='./assets/user.png' className='home_features_img' alt='' />
          <p className='text'>Account</p>
        </div>
        <div className='home_feature_item' id='open_Import' onClick={() => handleSelectedPage('importTokens')}>
          <img src='./assets/import.png ' className='home_features_img' alt='' />
          <p className='text'>Import</p>
        </div>
      </div>

      <div className='home_tabs'>
        <p id='open_assets'>Assets</p>
        <p id='logout' className='logout' onClick={() => handleSelectedPage('login')}>
          logout
        </p>
        <p id='open_activity'>Activity</p>
      </div>
      <p className='space'></p>
      <p className='space'></p>

      {/* Asset list */}
      <div id='assets' className='assets'></div>

      <div id='activity' className='activity'>
        <div className='assets_item'>
          <img src='./assets/theblockchaincoders.svg' className='assets_item_img' alt='' />
          <span>24432445445424...</span>
          <span>0.45 MATIC</span>
        </div>
      </div>
      <div id='activity' className='activity'>
        <div className='assets_item'>
          <img src='./assets/theblockchaincoders.svg' className='assets_item_img' alt='' />
          <span>24432445445424...</span>
          <span>0.45 MATIC</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
