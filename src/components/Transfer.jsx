import React, { useState } from 'react';
import Loader from './Loader';
import { decrypt } from '../utils/crypto_func';
import { sendToken } from '../utils/TransactionUtils';

const Transfer = ({ show, handleSelectedPage, selectedNetwork, destinationAddress }) => {
  const [details, setDetails] = useState({ amount: 0, address: '' });
  const [networkResponse, setNetworkResponse] = useState({
    status: null,
    message: '',
  });

  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const transfer = async () => {
    setNetworkResponse({
      status: 'pending',
      message: '',
    });
    const miwallet = JSON.parse(localStorage.getItem('MIWALLET'));

    let decode = decrypt(miwallet.k, encIv, encryptKey);
    decode = JSON.parse(decode);
    const account = decode.account.find((item) => item.address === destinationAddress);

    try {
      const { receipt } = await sendToken(details.amount, details.address, account.privateKey, selectedNetwork);

      if (receipt.status === 1) {
        // Set the network response status to "complete" and the message to the transaction hash
        setNetworkResponse({
          status: 'complete',
          message: (
            <p>
              Transfer complete!{' '}
              <a href={`${selectedNetwork.blockExplorerUrl}/tx/${receipt.transactionHash}`} target='_blank' rel='noreferrer'>
                View transaction
              </a>
            </p>
          ),
        });
        return receipt;
      } else {
        console.log(`Failed to send ${receipt}`);
        setNetworkResponse({
          status: 'error',
          message: JSON.stringify(receipt),
        });
        return { receipt };
      }
    } catch (error) {
      console.error({ error });
      setNetworkResponse({
        status: 'error',
        message: error.reason || JSON.stringify(error),
      });
    }
  };
  return (
    <div className={`transfer_form ${show ? 'show' : 'hide'}`} id='transfer_form'>
      <div className='form'>
        <img src='./assets/arrowleft.png' className='goBack' id='goBack' alt='go back to home' onClick={() => handleSelectedPage('main')} />

        <p id='heading'>Transfer Funds</p>
        <div className='field'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <input type='text' className='input-field' placeholder='amount' id='amount' name='amount' value={details.amount} onChange={handleChange} />
        </div>
        <p className='space'></p>
        <div className='field'>
          <img src='./assets/SVG/@.svg' alt='lock' />
          <input type='text' className='input-field' placeholder='Transfer Address' id='address' name='address' value={details.address} onChange={handleChange} />
        </div>
        {networkResponse.status === 'pending' && <Loader />}
        <small>{networkResponse.message}</small>

        <button id='transferFund' className='button3 connectWallet' onClick={transfer}>
          Transfer
        </button>
      </div>
    </div>
  );
};

export default Transfer;
