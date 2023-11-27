import { Wallet, HDNodeWallet, ethers } from 'ethers';

export function generateAccount(seedPhrase, index, password) {
  let wallet;

  try {
    if (!seedPhrase) {
      seedPhrase = Wallet.createRandom().mnemonic.phrase;
      // seedPhrase = HDNodeWallet.createRandom(password).mnemonic.phrase;
    }

    wallet = seedPhrase.includes(' ') ? Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/${index}`) : new Wallet(seedPhrase);
    // wallet = seedPhrase.includes(' ') ? HDNodeWallet.fromMnemonic(seedPhrase) : new HDNodeWallet(seedPhrase);

    const { address } = wallet;
    const account = { address, privateKey: wallet.privateKey, balance: '0' };

    return { account, seedPhrase: seedPhrase.includes(' ') ? seedPhrase : '' };
  } catch (err) {
    return { message: err.message };
  }
}

export function importByPrivateKey(privateKey) {
  try {
    const wallet = new ethers.Wallet(privateKey);

    const address = wallet.address;
    return {
      address,
      privateKey,
      imported: true,
    };
  } catch (error) {
    return { message: error.message };
  }
}

export function shortenAddress(str, numChars) {
  return `${str.substring(0, numChars)}...${str.substring(str.length - numChars)}`;
}

export function toFixedIfNecessary(value, decimalPlaces) {
  return +parseFloat(value).toFixed(decimalPlaces);
}

export function copyAddress(address) {
  navigator.clipboard
    .writeText(address)
    .then(() => {
      alert('successfully copied');
    })
    .catch(() => {
      alert('something went wrong');
      document.getElementById('error').innerText = 'something went wrong';
    });
}
