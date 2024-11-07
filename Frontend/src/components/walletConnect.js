import { useConnect} from 'wagmi'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const WalletOptions=()=>{
    const {connectors, connect} =useConnect();
    // const [mapDataId, setMapDataId] = useState([]);
    // const [mapDataName, setMapDataName] = useState([]);

    const data = [
        { id: 1, title: 'Item 1', buttonText: 'Click 1' },
        { id: 2, title: 'Item 2', buttonText: 'Click 2' },
        { id: 3, title: 'Item 3', buttonText: 'Click 3' },
      ];
    
   console.log( "connectors :", connectors);
   return (
   <div>
    
      {connectors.map((connector) => (
        
        <div key={connector.id}>
          <button  class="btn btn-card" onClick={()=>connect({connector})}>{connector.name}</button>
        </div>
      ))}

   </div>
   )
} 