import React from 'react';

const DropDown = ({ options, setDestinationAddress, setShowAccounts }) => {
  return (
    <div className='address-list'>
      {options.length > 0 ? (
        options?.map((item, i) => (
          <div
            key={i}
            className='item'
            onClick={() => {
              setDestinationAddress(item);
              setShowAccounts(false);
            }}
          >
            Account {i + 1}
          </div>
        ))
      ) : (
        <>No Data</>
      )}
    </div>
  );
};

export default DropDown;
