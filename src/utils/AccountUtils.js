import { Wallet, HDNodeWallet } from 'ethers';

export function generateAccount(seedPhrase, index, password) {
  console.log('Loading');
  let wallet;

  try {
    if (!seedPhrase) {
      seedPhrase = Wallet.createRandom().mnemonic.phrase;
      // seedPhrase = HDNodeWallet.createRandom(password).mnemonic.phrase;
    }

    console.log(seedPhrase);
    wallet = seedPhrase.includes(' ') ? Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/${index}`) : new Wallet(seedPhrase);
    // wallet = seedPhrase.includes(' ') ? HDNodeWallet.fromMnemonic(seedPhrase) : new HDNodeWallet(seedPhrase);

    console.log(wallet);
    const { address } = wallet;
    const account = { address, privateKey: wallet.privateKey, balance: '0' };

    return { account, seedPhrase: seedPhrase.includes(' ') ? seedPhrase : '' };
  } catch (err) {
    console.log(err.message);
    return { message: err.message };
  }
}

export function shortenAddress(str, numChars) {
  return `${str.substring(0, numChars)}...${str.substring(str.length - numChars)}`;
}

export function toFixedIfNecessary(value, decimalPlaces) {
  return +parseFloat(value).toFixed(decimalPlaces);
}
