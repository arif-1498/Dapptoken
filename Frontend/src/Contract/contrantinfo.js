import Web3 from "web3";
import { ethers } from "ethers";
import ContractABI from "./TokenC.json"
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const getContractInstance = async () => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      // Create a new Web3 instance using MetaMask as the provider
      const web3 = new Web3(window.ethereum);
  
      try {
        // Request user accounts from MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });
  
        // Create and return the contract instance
        const contractInstance = new web3.eth.Contract(ContractABI, CONTRACT_ADDRESS);
        return { web3, contractInstance };
      } catch (error) {
        console.error("User denied account access or error occurred:", error);
        return null;
      }
    } else {
      console.error("MetaMask is not installed. Please install MetaMask to use this feature.");
      return null;
    }
  };