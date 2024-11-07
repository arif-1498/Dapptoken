import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./App.css";
import { configs } from "./Contract/configs.js";
import { Accounts } from "./components/accounts.js";
import { WalletOptions } from "./components/walletConnect.js";
import { Container, Row, Col } from "react-bootstrap";
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
      <h1> Blockchain-based E-commerce </h1>
      <WagmiProvider config={configs}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <WalletConnection />

            

            <Routes>
              <Route
                path="/"
                element={
                  <Container fluid className="my-5">
              <Row>
                {/* Product List on the Left */}
                <Col md={8}>
                  <Products />
                </Col>

                {/* Cart Component on the Right */}
                <Col md={4} className="sticky-cart">
                <Cartbox />
                </Col>
              </Row>
            </Container>
                }
              />
              <Route path="/itemDetail" element={<ItemDetail />} />
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </WagmiProvider>
    </div>
  );
}

export default App;
