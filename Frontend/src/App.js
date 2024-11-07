import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";
import { configs } from "./Contract/configs.js";
import { Accounts } from "./components/accounts.js";
import { WalletOptions } from "./components/walletConnect.js";
import { WagmiProvider, useAccount } from "wagmi";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContractData } from "./components/contractdata.js";
import { Products } from "./components/procducts.js";
import { Cartbox } from "./components/cart.js";
import ItemDetail from "./components/ItemDetail"; // import your ItemDetail component

function App() {
  const queryClient = new QueryClient();

  const WalletConnection = () => {
    const { isConnected } = useAccount();
    return isConnected ? <Accounts /> : <WalletOptions />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FaCartPlus />
        </div>
        <h1> Blockchain-based E-commerce </h1>
        <WagmiProvider config={configs}>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <WalletConnection />
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="d-flex">
                      <div>
                        <Products />
                      </div>
                      <div>
                        <Cartbox />
                      </div>
                    </div>
                  }
                />
                <Route path="/itemDetail" element={<ItemDetail />} />
              </Routes>
            </QueryClientProvider>
          </BrowserRouter>
        </WagmiProvider>
      </header>
    </div>
  );
}

export default App;
