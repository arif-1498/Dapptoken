import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { WagmiProvider,  } from 'wagmi';
import { Configs } from './Contract/configs.js'


function App() {
  const queryCliets= new QueryClient();
  console.log(Configs)

  return (
    <div className="App">
      <header className="App-header">
       <WagmiProvider config={Configs}>
         <QueryClientProvider client={queryCliets}>

         </QueryClientProvider>
       </WagmiProvider>
      </header>
    </div>   
    
  );
}

export default App;
