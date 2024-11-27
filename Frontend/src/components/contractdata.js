import {
  useReadContrat,
  useWalletClient,
  useWriteContract,
  useAccount,
} from "wagmi";
import { useState } from "react";
import { Contractconfig } from "../Contract/contractconfig.js";
import { ChainOptions } from "../constants/chainoptions.js";

import { ethers, parseEther } from "ethers";
import { sepolia } from "viem/chains";

const contractAddressPKRT = "0x5b6884cdfde546cdd4a60bd5e41615e5faf407c0";
const ContractABI = [
  {
    inputs: [
      { internalType: "string", name: "_tokenName", type: "string" },
      { internalType: "string", name: "_Symbol", type: "string" },
      { internalType: "uint256", name: "_decimals", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "Symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TokenName",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowances",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balancesOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimal",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const ContractData = () => {
  const [error, seterror] = useState([]);
  const [value,  setvalue] = useState()
  const [selectedChain, setSelectedChain] = useState("");

  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  //const recipent='0x2435aE99dEDbC92F3C8AF67220b70774F17E9932';
  //const amount= 2*1000000;

  const Transfertoken = async () => {
    try {
      const data = await writeContractAsync({
        chainId: sepolia.id,
        address: contractAddressPKRT,
        abi: ContractABI,
        functionName: "transfer",
        args: ["0x2435aE99dEDbC92F3C8AF67220b70774F17E9932", 2 * 1000000],
      });
      console.log(data);
      console.log("contract method called");
    } catch (error) {
      console.log(error);
      seterror(error);
    }
  };

  const mintToken=async ()=>{
    try {
      const data = await writeContractAsync({
        chainId: sepolia.id,
        address: contractAddressPKRT,
        abi: ContractABI,
        functionName: "mint",
        args: [address, value * 10000000000],
      });
      console.log(data);
      console.log("contract method called");
    } catch (error) {
      console.log(error);
      seterror(error);
    }
  }

  const handleChange = (event) => {
    setSelectedChain(event.target.value);
  };

  const handleValueChange = (event) => {
    setvalue(event.target.value);
  }

  console.log(value);

  return (
    <>
      <h1>tranfer token</h1>
      <button onClick={Transfertoken}>tranfer token</button>
      <p>Transaction hash: 0jjdksdjdsjsk</p>
      {error && <p>Error in tranfer amount</p>}
      <div>
        <input onChange={handleValueChange} type="text" />
        <button onClick={mintToken}>mint token</button>
        
      </div>
    </>
  );
};
