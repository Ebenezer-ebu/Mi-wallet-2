import React, { useState, useEffect } from 'react';
import { ethers, networks, getDefaultProvider } from 'ethers';
import { decrypt } from '../utils/crypto_func';
import { goerli_test, polygon_mumbai, mainnet } from '../models/Chain';
import { toFixedIfNecessary, shortenAddress } from '../utils/AccountUtils';

const Main = ({ show, handleSelectedPage, selectedNetwork }) => {
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [nameSym, setNameSym] = useState('');

  const [networkResponse, setNetworkResponse] = useState({
    status: null,
    message: '',
  });
  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const handleDestinationAddressChange = (event) => {
    setDestinationAddress(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number.parseFloat(event.target.value));
  };

  // async function transfer() {
  //   setNetworkResponse({
  //     status: 'pending',
  //     message: '',
  //   });

  //   try {
  //     const { receipt } = await sendToken(amount, account.address, destinationAddress, account.privateKey);

  //     if (receipt.status === 1) {
  //       // Set the network response status to "complete" and the message to the transaction hash
  //       setNetworkResponse({
  //         status: 'complete',
  //         message: (
  //           <p>
  //             Transfer complete!{' '}
  //             <a href={`${goerli.blockExplorerUrl}/tx/${receipt.transactionHash}`} target='_blank' rel='noreferrer'>
  //               View transaction
  //             </a>
  //           </p>
  //         ),
  //       });
  //       return receipt;
  //     } else {
  //       // Transaction failed
  //       console.log(`Failed to send ${receipt}`);
  //       // Set the network response status to "error" and the message to the receipt
  //       setNetworkResponse({
  //         status: 'error',
  //         message: JSON.stringify(receipt),
  //       });
  //       return { receipt };
  //     }
  //   } catch (error) {
  //     // An error occurred while sending the transaction
  //     console.error({ error });
  //     // Set the network response status to "error" and the message to the error
  //     setNetworkResponse({
  //       status: 'error',
  //       message: error.reason || JSON.stringify(error),
  //     });
  //   }
  // }

  useEffect(() => {
    const miwallet = JSON.parse(localStorage.getItem('MIWALLET'));
    if (miwallet && miwallet.k) {
      let decode = decrypt(miwallet.k, encIv, encryptKey);
      decode = JSON.parse(decode);
      const account1 = decode.account[0];
      const mynetworks = [goerli_test, mainnet, polygon_mumbai];
      const fetchData = async () => {
        const provider = new ethers.providers.JsonRpcProvider(mynetworks[0].rpcUrl);
        const network = await provider.getNetwork();
        setNameSym(network.name);
        let accountBalance = await provider.getBalance(account1.address);
        setBalance(String(toFixedIfNecessary(ethers.utils.formatEther(accountBalance))));
        setDestinationAddress(account1.address);
      };
      fetchData();
    } else {
      handleSelectedPage('login');
    }
  }, [show]);

  useEffect(() => {
    console.log(selectedNetwork);
    if (selectedNetwork && destinationAddress) {
      const fetchData = async () => {
        const provider = new ethers.providers.JsonRpcProvider(selectedNetwork.rpcUrl);
        const network = await provider.getNetwork();
        setNameSym(network.name);
        let accountBalance = await provider.getBalance(destinationAddress);
        setBalance(String(toFixedIfNecessary(ethers.utils.formatEther(accountBalance))));
      };
      fetchData();
    }
  }, [selectedNetwork]);

  return (
    <div className={`home ${show ? 'show' : 'hide'}`} id='home'>
      <div className='home_header'>
        <div>
          <p id='userAddress'>{shortenAddress(destinationAddress, 8)}</p>
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
