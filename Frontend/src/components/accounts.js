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
      <div class="container mt-6">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Wallet info</h5>
            <p class="card-text">
              Your Wallet address: {address}
            </p>
            <p>Your account balance:{data?data.value:"loading..."}</p>
            <button onClick={() => { disconnect(); }}  class="btn btn-primary">
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
