import {Connector, useConnect} from 'wagmi'

export const WalletOptions=()=>{
    console.log('arifffffffffffffffffffffffffffffffffffffffffffffffffffff')
    const {connectors, connect}=useConnect();

    console.log('ariffffffffffffff with output', {connectors});
    return connectors.map((connector)=>{
        <button key={connector.id} onClick={()=>connect({connector})}>{connector.name}</button>
    })
} 