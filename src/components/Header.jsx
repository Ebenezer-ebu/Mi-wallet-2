import React from 'react';

const Header = ({ show }) => {
  return (
    <div className={show ? 'show' : 'hide'}>
      <div className='header'>
        <div className='header_log'>
          <img src='./assets/theblockchaincoders.svg' alt='logo' />
        </div>

        <div className='header_network' id='header_network'>
          <p>
            <img src='./assets/SVG/question.svg' alt='question' />
            <span id='selected_network'>Polygon Mumbai</span>
            <img src='./assets/SVG/arrow.svg' />
          </p>
          <div className='error' id='error'></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
