/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
// const {API_URL , PRIVATE_KEY} = process.env;
module.exports = {
  solidity: '0.8.24',
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://sepolia.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b',
      accounts: ['a946b02598da70534970983f0c20a5184f6a52d42610f4b03a8eaa9be75198fa'],
    },
  
    polygon_amoy: {
      url: "https://polygon-amoy.infura.io/v3/bd8639b04f404de09a9bb5eb4c2aba3b",
      chainId: 80002,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}
