import {useReadContract, useWalletClient  } from 'wagmi'
import {Contractconfig} from '../Contract/contractconfig.js' 
import {} from 'wagmi/actions'

export const ContractData=()=>{
     const { data:walletclient, isError, isLoading}=useWalletClient();


   console.log(walletclient);
    const{data: balance}=useReadContract({
        ...Contractconfig,
        functionName: 'balanceOf',
        args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
    })

      console.log(balance)
  
    return(
        <>
        <h1>Contract data component...</h1>
        </>
    )
}

