export const goerli_test = {
  chainId: '5',
  name: 'Goerli',
  blockExplorerUrl: 'https://goerli.etherscan.io',
  rpcUrl: 'https://rpc.ankr.com/eth_goerli',
  network: 'testnet'
};

export const mainnet = {
  chainId: '1',
  name: 'Ethereum',
  blockExplorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/JjgYqx3AeOubVdyiKulV7DnVyTbMqqcB',
  network: 'mainnet',
};

export const polygon_mumbai = {
  chainId: '1',
  name: 'Polygon Mumbai',
  blockExplorerUrl: 'https://mumbai.polygonscan.com/tx',
  rpcUrl: 'https://rpchttps://polygon-mumbai.g.alchemy.com/v2/z2wWtlYaKMjRPxsWZLwFpuoxEyZ0k6sz.ankr.com/polygon',
  network: 'testnet',
};

export const CHAINS_CONFIG = {
  [goerli_test.chainId]: goerli_test,
  [mainnet.chainId]: mainnet,
};
