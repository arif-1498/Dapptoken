import { createConfig, http } from 'wagmi'
import { mainnet, polygon, sepolia } from 'wagmi/chains'
import {injected, metaMask} from 'wagmi/connectors'


export const Configs=createConfig({
  chains: [mainnet, sepolia,],
  connectors:[
    injected(),
    metaMask(),

  ],
  transports :{
    [mainnet.id]:http(),
    [polygon.id]:http(),
  
  },
  
}

);