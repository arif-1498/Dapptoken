import { dataTagSymbol } from '@tanstack/react-query';
import { useAccount, useEnsName } from 'wagmi'

export const profile =()=>{

    const {address}= useAccount();
    const {data,error, status}= useEnsName({address});
    if(status=='pending') return (<div>ENS name pending....</div>)
    if(status=='error') return(<div>Error{error.message}</div>)
    return(<div>ENS name: {data}</div>)
}