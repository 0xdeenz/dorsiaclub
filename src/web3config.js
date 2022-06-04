import { ethers } from "ethers"; 

// AVAX testnet:
export const chainId = 80001;
export const RPC = "https://matic-mumbai.chainstacklabs.com"
export const network = {
  chainId: `0x${Number(chainId).toString(16)}`,
  chainName: "Mumbai",
  nativeCurrency: {
    name: "Polygon",
    symbol: "MATIC",
    decimals: 18
  },
  rpcUrls: [RPC],
  blockExplorerUrls: ["https://mumbai.polygonscan.com"]
};

export const config = {
    readOnlyChainId: chainId,
    readOnlyUrls: {
      [chainId]: RPC,
    },
};

// Business Card smart contract
export const contractAddress = '0x798E1eFBFFB2d6315d1Ab62Cd80C1c56A7C5E70d'
const contractAbi = require('./contracts/BusinessCard/build/contracts/BusinessCard.json')['abi']
export const _provider = new ethers.providers.JsonRpcProvider(RPC)
export const contract = new ethers.Contract(contractAddress, contractAbi, _provider)

// Default URI fed to the smart contract
export const defaultURI = 'https://dorsiaclub.mypinata.cloud/ipfs/QmZGZ8ZVZexb5XgmWprH8nEyhaJzdfKxki8DoGuvPRcju6'

// Card minting and updating requirements
export const mintPrice = ethers.utils.parseUnits("0.1","ether");
export const updatePrice = ethers.utils.parseUnits("0.05","ether");

// Card naming requirements
export const maxNameLength = 22;
export const maxPositionLength = 32;
