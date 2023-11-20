import React from 'react';

const Network = () => {
  return (
    <div id='network' className='network'>
      <div className='network_title'>
        <p>Networks</p>
      </div>
      <div id='network_item' className='network_list'>
        <p className='network_item'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <span>Ethereum Mainnet</span>
        </p>
        <p className='network_item'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <span>Polygon Mainnet</span>
        </p>
        <p className='network_item'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <span>Polygon Mumbai</span>
        </p>
        <p className='network_item'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <span>Goerli test network</span>
        </p>
        <p className='network_item'>
          <img src='./assets/SVG/lock.svg' alt='lock' />
          <span>Sepolia test network</span>
        </p>
      </div>

      <button id='add_network' className='button3 addStyle'>
        Add network
      </button>
    </div>
  );
};

export default Network;
