import React, { useEffect, useState } from 'react';
import { decrypt, encrypt } from '../utils/crypto_func';
import { generateAccount, importByPrivateKey } from '../utils/AccountUtils';
import Loader from './Loader';

const ImportAccount = ({ show, handleSelectedPage }) => {
  const [importAccount, setImportAccount] = useState(false);
  const [miWallet, setMiWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [privateKey, setPrivateKey] = useState('');
  const encIv = process.env.REACT_APP_ENCIV;
  const encryptKey = process.env.REACT_APP_ENCRYPTION_KEY;

  const handleImportAccount = () => {
    const res = importByPrivateKey(privateKey);
    if (res.message) {
      alert(res.message);
      return;
    }
    setMiWallet((prev) => ({ ...prev, account: [...prev.account, res] }));
    const newWallet = { ...miWallet, account: [...miWallet.account, res] };
    let data = JSON.stringify(newWallet);
    const encoded = encrypt(data, encIv, encryptKey);
    localStorage.setItem('MIWALLET', JSON.stringify(encoded));
  };

  const handleAddcount = async () => {
    const seedphrase = miWallet.seedphrase;
    const index = miWallet.account.length;
    const result = await generateAccount(seedphrase, index, '');
    if (result.message) {
      setLoading(false);
      return;
    } else {
      setLoading(false);
      let data = {
        seedphrase: result.seedPhrase,
        account: [result.account],
      };
      setMiWallet((prev) => ({ ...prev, account: [...prev.account, result.account] }));
      const newWallet = { ...miWallet, account: [...miWallet.account, result.account] };
      data = JSON.stringify(newWallet);
      const encoded = encrypt(data, encIv, encryptKey);
      localStorage.setItem('MIWALLET', JSON.stringify(encoded));
      // chrome.storage.local.get(function (result) {
      //   console.log(result);
      // });
      // const exStore = chrome.storage.local.set({ user: data });
    }
  };

  useEffect(() => {
    const wallet = JSON.parse(localStorage.getItem('MIWALLET'));
    if (wallet) {
      let decode = decrypt(wallet.k, encIv, encryptKey);
      decode = JSON.parse(decode);
      setMiWallet(decode);
    }
  }, [show]);

  return (
    <div id='import_account' className={`import_account ${show ? 'show' : 'hide'}`}>
      <div className='form'>
        <img id='close_import_account' className='goBack' src='./assets/arrowleft.png' alt='go back' onClick={() => handleSelectedPage('main')} />
        <div className='account'>
          <button className='button3' onClick={handleAddcount}>
            ➕ Add Account
          </button>
          <button className='button3' onClick={() => setImportAccount(!importAccount)}>
            Import Account
          </button>
        </div>
        {importAccount && (
          <>
            <p id='heading'>Import Account</p>
            <div className='field'>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <textarea
                type='text'
                className='input-field'
                value={privateKey}
                placeholder='private key'
                id='add_account_private_key'
                name=''
                cols='30'
                rows='5'
                onChange={(e) => setPrivateKey(e.target.value)}
              ></textarea>
            </div>
            <button id='add_New_Account' className='button3 connectWallet' onClick={handleImportAccount}>
              Import
            </button>
            {loading && (
              <div id='load_account'>
                <Loader />
              </div>
            )}
          </>
        )}
        {loading && (
          <div id='load_account'>
            <Loader />
          </div>
        )}
        <div className='accountList' id='accountList'>
          {miWallet?.account.map((account, i) => (
            <div className='lists' key={i}>
              <p className='accountValue'>{account.address.slice(0, 25)}...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportAccount;
