import React, { useState } from 'react';
import CreateUser from './CreateUser';
import LoginUser from './LoginUser';
import Combined from './Combined';
import Home from './Home';
import Transfer from './Transfer';

const Wallet = () => {
  const [pages, setpages] = useState({
    createAccount: false,
    home: false,
    login: true,
    transferFunds: false,
    importTokens: false,
    importAccounts: false,
    main: false,
  });

  const handleSelectedPage = (page) => {
    const myPages = Object.keys(pages);
    const copiedPages = { ...pages };
    myPages.forEach((ipage) => {
      if (ipage.toLowerCase() === page.toLowerCase()) {
        copiedPages[ipage] = true;
      } else {
        copiedPages[ipage] = false;
      }
    });
    setpages(copiedPages);
  };
  return (
    <div className='card'>
      <div className='card2'>
        <CreateUser show={pages.createAccount} handleSelectedPage={handleSelectedPage} />
        <LoginUser show={pages.login} handleSelectedPage={handleSelectedPage} />
        <Combined pages={pages} handleSelectedPage={handleSelectedPage} />
        <Home show={pages.home} handleSelectedPage={handleSelectedPage} />
      </div>
    </div>
  );
};

export default Wallet;
