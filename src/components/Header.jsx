import React, { useState } from 'react';
import Network from './Network';

const Header = ({ show, setSelectedNetwork, selectedNetwork }) => {
  const [showNetwork, setShowNetwork] = useState(false);
  return (
    <>
      <div className={show ? 'show' : 'hide'}>
        <div className='header'>
          <div className='header_log'>
            <img src='./assets/theblockchaincoders.svg' alt='logo' />
          </div>

          <div className='header_network' id='header_network' onClick={() => setShowNetwork(!showNetwork)}>
            <p>
              <img src='./assets/SVG/question.svg' alt='question' />
              <span id='selected_network'>{selectedNetwork?.name}</span>
              <img src='./assets/SVG/arrow.svg' alt='arrow' />
            </p>
            <div className='error' id='error'></div>
          </div>
        </div>
      </div>
      <Network show={showNetwork} setShowNetwork={setShowNetwork} setSelectedNetwork={setSelectedNetwork} />
    </>
  );
};

export default Header;
