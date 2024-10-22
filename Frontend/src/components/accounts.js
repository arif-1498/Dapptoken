import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'


export const Accounts=()=>{
    const {address}=useAccount();
    const {disconnect}=useDisconnect();
    const {data:ensName}=useEnsName({address});
    const {data:ensAvatar} =useEnsAvatar({name:ensName})

    return(
        <div>
            {ensAvatar && <img alt='ENS Name' src={ensAvatar} />}
            {ensName && <div>{ensName? `${ensName}(${address})`:address}</div> }
            <button onClick={()=>{disconnect()}}>Disconnect</button>
        
        </div>
    )
}