# MyContract NFT Project

This repository contains the necessary scripts and contracts to deploy, mint, transfer, and check balances for an ERC-721 compliant NFT contract named `MyContract`. The project utilizes the Hardhat framework and Ethers.js to interact with the Ethereum blockchain, allowing you to easily create and manage your NFT collection.

## Prerequisites

To get started with this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [Hardhat](https://hardhat.org/)
- [Metamask](https://metamask.io/) or any Web3-enabled wallet
- [Pinata](https://pinata.cloud/) (optional for hosting metadata)

## Setting Up the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harmandeep01/Polygon-Proof-Of-Stake-M1.git

   cd Polygon-Proof-Of-Stake-M1
   ```

2. **Install dependencies:**
   Install all required dependencies with:
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root of the project and add your private key and Infura or Alchemy API key.

## Smart Contract

The `MyContract.sol` contract is an ERC-721 compliant NFT contract with minting functionality. It allows you to mint unique NFTs to a specified address, associating them with a unique URI and metadata. The contract is based on OpenZeppelin's `ERC721URIStorage` standard.

Make sure to update the contract details and functionalities based on your project needs.

## Deployment

To deploy the `MyContract` contract on an Ethereum testnet (e.g., sepolia), use the `deploy.js` script. This script will deploy the contract and log the contract address once successful.

### Steps:

1. **Configure network settings:**
   Ensure that the network settings (API keys and private keys) are properly configured in `hardhat.config.js`.

2. **Deploy the contract:**
   Use the following command to deploy the contract to a specified network:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

## Minting NFTs

To mint multiple NFTs, use the `batchMint.js` script. The script mints NFTs with corresponding metadata hosted on a decentralized platform like IPFS.

Update the script with the correct token URIs and metadata before running:
```bash
npx hardhat run scripts/batchMint.js --network sepolia
```

## Transferring NFTs

To transfer NFTs across networks (e.g., Ethereum to Polygon), use the `transfer.js` script. This script handles the approval and deposit of NFTs to a specified tunnel contract.

Run the transfer script:
```bash
npx hardhat run scripts/transfer.js --network sepolia
```

## Checking NFT Balance

Use the `balance.js` script to check the number of NFTs held by a specific wallet. Update the wallet address in the script and run it to see the balance:
```bash
npx hardhat run scripts/balance.js --network sepolia
```




# Checking NFT Balance on Polygon Amoy Testnet

Once you've successfully transferred your NFTs using the `transfer.js` script, you can verify the balance on the Polygon Amoy testnet using the following steps:

1. **Check the NFT Transfer on Polygon Amoy**:
   - After running the `transfer.js` script, copy the wallet address you used for the transfer.
   - Go to [https://amoy.polygonscan.com/](https://amoy.polygonscan.com/) and paste the wallet address into the search bar.
   - Wait a few minutes or up to an hour for the server to update (depending on their network load).
   - Navigate to the **NFT Transfers** section under your wallet address. Once the NFTs appear, click on the specific NFT to view details.

2. **Copy the Polygon Amoy Contract Address**:
   - On the NFT details page, you will see the contract address on which the NFTs have been transferred. Copy this contract address for the next step.

3. **Update `balance.js` with Polygon Amoy Contract Address**:
   - Open the `balance.js` script in your project.
   - Replace the `tokenAddress` variable with the contract address you copied from Polygon Amoy.

   Example:
   ```javascript
   const tokenAddress = "0xYourPolygonAmoyContractAddress";
   ```
4. Run the Balance Check Command on Polygon Amoy:

   - After updating the contract address, run the script using the Polygon Amoy testnet: 

   ```
   npx hardhat run scripts/balance.js --network polygon_amoy

   ``` 
## Credits

Special thanks to [ChatGPT](https://www.openai.com/chatgpt) for providing valuable assistance and guidance throughout the development of this blockchain project. The insights and support helped shape and refine key aspects of the project.

## License
This project is licensed under the MIT [License](/LICENSE.txt).



