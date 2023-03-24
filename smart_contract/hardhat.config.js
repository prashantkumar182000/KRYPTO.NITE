require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Sfo5I7qiMy0oi4PqDuqxTvnmeZ6-6Nzy',
      accounts: ['a67a3669f9ea0ee5306a8bad3c15e8763aaeea0be24e08661a1e15c0c4ba5e4a'],
    },
  },
};