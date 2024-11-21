import { createConfig, http } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import {injected, metaMask} from 'wagmi/connectors'


export const configs=createConfig({
  chains: [mainnet, sepolia,],
  connectors:[
    injected(),
    metaMask(),

  ],
  transports :{
    [mainnet.id]:http(),
    [sepolia.id]:http(),
  },
  ssr: true, 
  
});