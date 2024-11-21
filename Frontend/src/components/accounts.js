import { useAccount, useDisconnect, useEnsAvatar, useEnsName, useBalance} from "wagmi";
import {} from "wagmi";

export const Accounts = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });
  const {data,isError, isLoading} =useBalance({address:address});

  console.log(address);
  console.log(ensName);
  console.log("balance data")

  return (
    <div>
      <div className="container mt-6">
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Wallet info</h5>
            <p className="card-text">
              Your Wallet address: {address}
            </p>
            <p>Your account balance:{data?data.value:"loading..."}</p>
            <button onClick={() => { disconnect(); }}  className="btn btn-primary">
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
