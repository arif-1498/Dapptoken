import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';
import { getContractInstance } from './Contract/contrantinfo';

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [networkId, setNetworkId] = useState(null);
    console.log(getContractInstance);
  useEffect(() => {
    // Initialize web3 instance
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);

      // Detect account change
      window.ethereum.on('accountsChanged', async (accounts) => {
        console.log('Account changed to:', accounts[0]);
        setAccount(accounts[0]);
        await getAccountBalance(accounts[0]);
      });

      // Detect network change
      window.ethereum.on('chainChanged', (chainId) => {
        console.log('Network changed to:', chainId);
        setNetworkId(chainId);
      });
    }
  }, []);

  // Function to connect MetaMask and get account
  async function connectMetamask() {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        console.log('Connected account:', accounts[0]);

        // Get account balance
        await getAccountBalance(accounts[0]);

        // Get network ID
        const networkId = await web3.eth.net.getId();
        setNetworkId(networkId);
        console.log('Network ID:', networkId);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  }

  // Function to get the balance of the account
  async function getAccountBalance(account) {
    const web3 = new Web3(window.ethereum);
    const balanceInWei = await web3.eth.getBalance(account);
    const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
    setBalance(balanceInEth);
    console.log('Account balance in ETH:', balanceInEth);
  }

  // Function to add a custom network
  async function addNetwork() {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x4', // Example: Rinkeby Testnet (0x4)
          chainName: 'Rinkeby Testnet',
          nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18
          },
          rpcUrls: ['https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'], // Replace with your own RPC URL
          blockExplorerUrls: ['https://rinkeby.etherscan.io']
        }]
      });
    } catch (error) {
      console.error('Failed to add network', error);
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Web3.js</h1>
        <button onClick={connectMetamask}>
          Connect MetaMask
        </button>
        {account && <p>Connected Account: {account}</p>}
        {balance && <p>Account Balance: {balance} ETH</p>}
        {networkId && <p>Network ID: {networkId}</p>}
        <button onClick={addNetwork}>
          Add Rinkeby Test Network
        </button>
      </header>
    </div>   
    
  );
}

export default App;
