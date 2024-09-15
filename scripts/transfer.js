const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyContract.sol/MyContract.json");

const tokenAddress = "0xfE07f665D8dFEC8393656E24d26A59C4dFB6546D";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xddCf3C25dc9d71cbf538447a5afd82A36A162e67";

async function main() {

  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

  for (let i = 1; i <6; i++) {
    const approveTx = await tokenContract.approve(FxERC721RootTunnel, i);
    await approveTx.wait();
    console.log('Approval confirmed');

    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, i, "0x6556");
    await depositTx.wait();
    console.log("Tokens deposited");
  }
}

  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });