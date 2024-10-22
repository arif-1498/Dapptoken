import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { WagmiProvider, useAccount } from "wagmi";
import { Configs } from "./Contract/configs.js";
import { Accounts } from "./components/accounts.js";
import { WalletOptions } from "./components/walletConnect.js";

function App() {
 
  const queryCliets = new QueryClient();
  //console.log(Configs);
  const ConnectWalltet = () => {
    const { isConnected } = useAccount();
    if (isConnected) return <Accounts />;
    return <WalletOptions />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <>
          <WalletOptions />
          <WagmiProvider config={Configs}>
            <QueryClientProvider client={queryCliets}>
              <h1>hello this is web3 application</h1>
              <ConnectWalltet />
            </QueryClientProvider>
          </WagmiProvider>
        </>
      </header>
    </div>
  );
}

export default App;
