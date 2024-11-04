import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";
import { configs } from "./Contract/configs.js";
import { Accounts } from "./components/accounts.js";
import { WalletOptions } from "./components/walletConnect.js";
import {WagmiProvider, useAccount} from 'wagmi'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContractData} from './components/contractdata.js'
import {Products} from './components/procducts.js'

function App() {
 
  const queryCliets = new QueryClient();
    
  
   const WalletConnection=()=>{
    const {isConnected}=useAccount();
    if (isConnected){
      return <Accounts/>
    }
    else {return <WalletOptions/>}

   }
            

  return (
    <div className="App">
      <header className="App-header">
      <div>
      <FaCartPlus/>
    </div>
       <h1> Blockchain based Ecomerce </h1>
       <WagmiProvider config={configs}>
       <QueryClientProvider client={queryCliets}>
          <WalletConnection/>
          <Products/>
       </QueryClientProvider>
       </WagmiProvider>
      </header>
    </div>
  );
}

export default App;
