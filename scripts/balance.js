const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyContract.sol/MyContract.json");

const tokenAddress = "0xbEc40B7f7b8E867B50b897c3AA4De65aC51F4AB2"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xddCf3C25dc9d71cbf538447a5afd82A36A162e67";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();