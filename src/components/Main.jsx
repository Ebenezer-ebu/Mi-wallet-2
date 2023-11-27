import React, { useState, useEffect } from 'react';
import { FiCopy } from 'react-icons/fi';
import { ethers, networks, getDefaultProvider } from 'ethers';
import { decrypt } from '../utils/crypto_func';
import { toFixedIfNecessary, shortenAddress, copyAddress } from '../utils/AccountUtils';
import DropDown from './dropDownBox/DropDown';
import { sendToken } from '../utils/TransactionUtils';

const Main = ({ show, handleSelectedPage, selectedNetwork, destinationAddress, setDestinationAddress }) => {
  const [accounts, setAccounts] = useState([]);
  const [showAccounts, setShowAccounts] = useState(false);
  const [balance, setBalance] = useState(0);
  const [nameSym, setNameSym] = useState('');

  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;

  useEffect(() => {
    const miwallet = JSON.parse(localStorage.getItem('MIWALLET'));
    if (miwallet && miwallet.k) {
      let decode = decrypt(miwallet.k, encIv, encryptKey);
      decode = JSON.parse(decode);
      const addresses = decode.account.map((item) => item.address);
      setAccounts(addresses);
    } else {
      handleSelectedPage('login');
    }
  }, [show]);

  useEffect(() => {
    if (selectedNetwork && destinationAddress) {
      const fetchData = async () => {
        const provider = new ethers.providers.JsonRpcProvider(selectedNetwork.rpcUrl);
        const network = await provider.getNetwork();
        setNameSym(network.name);
        let accountBalance = await provider.getBalance(destinationAddress);
        setBalance(String(toFixedIfNecessary(ethers.utils.formatEther(accountBalance), 6)));
      };
      fetchData();
    }
  }, [selectedNetwork, destinationAddress]);

  return (
    <div className={`home ${show ? 'show' : 'hide'}`} id='home'>
      <div className='home_header'>
        <div className='address-box'>
          <p id='userAddress' onClick={() => setShowAccounts(!showAccounts)}>
            {shortenAddress(destinationAddress, 8)}
          </p>
          <span onClick={() => copyAddress(destinationAddress)}>
            <FiCopy />
          </span>
          {showAccounts && <DropDown setDestinationAddress={setDestinationAddress} options={accounts} setShowAccounts={setShowAccounts} />}
        </div>
        <div>
          <p>Active</p>
        </div>
      </div>

      <img src='./assets/theblockchaincoders.svg' className='home_header_img' alt='' />
      <h1 id='accountBlance'>
        {balance} {nameSym}ETH
      </h1>

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
