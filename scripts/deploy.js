const { ethers } = require("hardhat");
async function main(){

// Contract Loading 
const MyContract = await ethers.getContractFactory("MyContract");

// Deploying an Contract 
const HermannNFT = await MyContract.deploy();
await HermannNFT.deployed();

console.log("Depolyed Successfully to address :" , HermannNFT.address);

}
 
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1)
});

//Depolyed Successfully to address : 0xfE07f665D8dFEC8393656E24d26A59C4dFB6546D

//A cat on moon in Astronaut's Suit
//A robot doing Surgery in 2060 AD