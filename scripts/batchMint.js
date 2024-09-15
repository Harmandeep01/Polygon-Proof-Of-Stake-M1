const { ethers } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  const MyContract = await ethers.getContractFactory("MyContract");


  const HermannNFT = await MyContract.attach("0xfE07f665D8dFEC8393656E24d26A59C4dFB6546D"); 

  console.log("Deployed Successfully to address:", owner.address);

  const tokenURIs = [
    "https://tan-working-reindeer-49.mypinata.cloud/ipfs/QmWXg1nEQ1D6L9WdowSsncuasZfY3anQxwVoDagEjH94qg/0.json",
    "https://tan-working-reindeer-49.mypinata.cloud/ipfs/QmWXg1nEQ1D6L9WdowSsncuasZfY3anQxwVoDagEjH94qg/1.json",
    "https://tan-working-reindeer-49.mypinata.cloud/ipfs/QmWXg1nEQ1D6L9WdowSsncuasZfY3anQxwVoDagEjH94qg/2.json",
    "https://tan-working-reindeer-49.mypinata.cloud/ipfs/QmWXg1nEQ1D6L9WdowSsncuasZfY3anQxwVoDagEjH94qg/3.json",
    "https://tan-working-reindeer-49.mypinata.cloud/ipfs/QmWXg1nEQ1D6L9WdowSsncuasZfY3anQxwVoDagEjH94qg/4.json",
  ];

  const prompts = [
    "A robot doing Surgery in 2060 AD",
    "A robot doing Surgery in 2060 AD",
    "A cat on moon in Astronaut's Suit ",
    "A cat on moon in Astronaut's Suit",
    "A cat on moon in Astronaut's Suit "
  ];

  for (let i = 0; i < tokenURIs.length; i++) {
    const tx = await HermannNFT.mintNFT(owner.address, tokenURIs[i], prompts[i]);
    await tx.wait();
    console.log(`Minted NFT ${i + 1} with tokenURI: ${tokenURIs[i]} and prompt: ${prompts[i]}`);
  }
}

// Execute the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //0x37ebe5E71Dd123eb0f9985157Cbb32ab8363808e