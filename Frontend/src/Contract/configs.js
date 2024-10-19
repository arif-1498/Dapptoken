import { createConfig, http } from 'wagmi'
import { mainnet, polygon, sepolia } from 'wagmi/chains'
import {metamask} from 'wagmi/connectors'


export const Configs=createConfig({
  chains: [mainnet, sepolia,],
  transports :{
    [mainnet.id]:http(),
    [polygon.id]:http(),
  
  },
  
}

);