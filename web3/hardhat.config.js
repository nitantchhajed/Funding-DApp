/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: "matic",
    networks: {
      hardhat: {},
      polygon_mumbai: {
        url: "https://rpc-mumbai.maticvigil.com",
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
