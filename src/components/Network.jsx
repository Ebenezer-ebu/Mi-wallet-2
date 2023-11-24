import React, { useState, useEffect } from 'react';
import { goerli_test, polygon_mumbai, mainnet } from '../models/Chain';

const Network = ({ show, setShowNetwork, setSelectedNetwork }) => {
  const [myNetworks, setMyNetworks] = useState(null);
  useEffect(() => {
    const networks = [goerli_test, mainnet, polygon_mumbai];
    setSelectedNetwork(networks[0]);
    setMyNetworks(networks);
  }, []);
  return (
    <div id='network' className={`network ${show ? 'show' : 'hide'}`}>
      <div className='network_title'>
        <p>Networks</p>
      </div>
      <div id='network_item' className='network_list'>
        {myNetworks?.map((network, i) => {
          return (
            <p className='network_item' key={i} onClick={() => setSelectedNetwork(network)}>
              <img src='./assets/SVG/lock.svg' alt='lock' />
              <span>{network.name}</span>
            </p>
          );
        })}
      </div>

      <button id='add_network' className='button3 addStyle' onClick={() => setShowNetwork(false)}>
        Add network
      </button>
    </div>
  );
};

export default Network;
