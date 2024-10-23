import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { configs } from "./Contract/configs.js";
import { Accounts } from "./components/accounts.js";
import { WalletOptions } from "./components/walletConnect.js";
import {WagmiProvider, useAccount} from 'wagmi'

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
       <h1>hello </h1>
       <WagmiProvider config={configs}>
       <QueryClientProvider client={queryCliets}>
           <WalletConnection/>
       </QueryClientProvider>
       </WagmiProvider>
      </header>
    </div>
  );
}

export default App;
