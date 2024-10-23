import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
//import { WagmiProvider, useAccount, useConfig} from "wagmi";
import { configs } from "./Contract/configs.js";
import { Accounts } from "./components/accounts.js";
import { WalletOptions } from "./components/walletConnect.js";
import {WagmiProvider} from 'wagmi'

function App() {
 
  const queryCliets = new QueryClient();
  //console.log(Configs);
   /*

    <WagmiProvider config={configs}>
            
          </WagmiProvider>
   
               
         <WalletOptions />*/
            

  return (
    <div className="App">
      <header className="App-header">
       <h1>hello </h1>
       <WagmiProvider config={configs}>
       <QueryClientProvider client={queryCliets}>
           <WalletOptions />
       </QueryClientProvider>
       </WagmiProvider>
      </header>
    </div>
  );
}

export default App;
