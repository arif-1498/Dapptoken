import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export const Accounts = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName });

  console.log(address);
  console.log(ensName);

  return (
    <div>
      <div class="container mt-6">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">Wallet info</h5>
            <p class="card-text">
              Your Wallet address: {address}
            </p>
            <button onClick={() => { disconnect(); }}  class="btn btn-primary">
              Disconnect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
