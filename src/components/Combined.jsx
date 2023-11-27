import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Header from './Header';
import Main from './Main';
import ImportAccount from './ImportAccount';
import ImportToken from './ImportToken';
import Transfer from './Transfer';
import { goerli_test, polygon_mumbai, mainnet } from '../models/Chain';
import { decrypt } from '../utils/crypto_func';

const Combined = ({ pages, handleSelectedPage }) => {
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [destinationAddress, setDestinationAddress] = useState('');
  const headerShow = pages.main || pages.importAccounts || pages.importTokens || pages.transferFunds;
  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;
  useEffect(() => {
    const mynetworks = [goerli_test, mainnet, polygon_mumbai];
    setSelectedNetwork(mynetworks[0]);
    const miwallet = JSON.parse(localStorage.getItem('MIWALLET'));
    if (miwallet && miwallet.k) {
      let decode = decrypt(miwallet.k, encIv, encryptKey);
      decode = JSON.parse(decode);
      const account1 = decode.account[0];
      setDestinationAddress(account1.address);
    }
  }, []);
  return (
    <>
      <Header show={headerShow} setSelectedNetwork={setSelectedNetwork} selectedNetwork={selectedNetwork} />
      <Main show={pages.main} handleSelectedPage={handleSelectedPage} selectedNetwork={selectedNetwork} destinationAddress={destinationAddress} setDestinationAddress={setDestinationAddress} />
      <ImportAccount show={pages.importAccounts} handleSelectedPage={handleSelectedPage} />
      <ImportToken show={pages.importTokens} handleSelectedPage={handleSelectedPage} />
      <Transfer show={pages.transferFunds} handleSelectedPage={handleSelectedPage} selectedNetwork={selectedNetwork} destinationAddress={destinationAddress} />
    </>
  );
};

export default Combined;
