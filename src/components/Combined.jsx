import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import ImportAccount from './ImportAccount';
import ImportToken from './ImportToken';
import Transfer from './Transfer';

const Combined = ({ pages, handleSelectedPage }) => {
  const headerShow = pages.main || pages.importAccounts || pages.importTokens || pages.transferFunds;
  const [selectedNetwork, setSelectedNetwork] = useState();
  return (
    <>
      <Header show={headerShow} setSelectedNetwork={setSelectedNetwork} selectedNetwork={selectedNetwork} />
      <Main show={pages.main} handleSelectedPage={handleSelectedPage} selectedNetwork={selectedNetwork} />
      <ImportAccount show={pages.importAccounts} handleSelectedPage={handleSelectedPage} />
      <ImportToken show={pages.importTokens} handleSelectedPage={handleSelectedPage} />
      <Transfer show={pages.transferFunds} handleSelectedPage={handleSelectedPage} />
    </>
  );
};

export default Combined;
