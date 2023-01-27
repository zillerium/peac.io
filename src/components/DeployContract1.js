import logo from './logo.svg';
import './App.css';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {ethers,  ContractFactory, utils, BigNumber} from 'ethers';
import { parseEther} from 'ethers/lib/utils.js';
import {WagmiConfig,  useAccount, useSigner, useSendTransaction, usePrepareSendTransaction,
	configureChains, createClient, useNetwork, useProvider} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider, WalletConnectConnector} from "@web3modal/ethereum"
import {useState} from 'react';
import bytecode1 from './bytecode';
import abi from './abi';
import Web3 from 'web3'
import {NetworkContext} from './context'
import {useContext} from 'react'

function DeployContract(props) {
	const {network, contractAddress, setContractAddress} = useContext(NetworkContext);
	const [purchaseAmount, setPurchaseAmount]=useState(0);
	const [existingContractAddress, setExistingContractAddress]=useState(0);

	const payer = props.payer;
	const payee = props.payee;
	const notary = props.notary;
	const saleRelease = props.salesRelease;
	const disputeRelease = props.disputeRelease;
	const isConnected = props.isConnected;

        const provider = useProvider();
	const {data: signer, isError, isLoading} = useSigner();
	const contractFactory = new ethers.ContractFactory(abi, bytecode1, signer);
	
	const HandleDeploy= async ()=> {
  	   const maticAmount = BigNumber.from(purchaseAmount);
           const contract = await contractFactory.deploy(payee, notary, saleRelease, disputeRelease, 
		    {value: maticAmount});
	   setContractAddress(contract.address);
	}


    return (
        <>
	    <h1>Deploy New Contract</h1>
	    <div>
                <button onClick={HandleDeploy}>Deploy</button>
	    </div>
	    <div>
                <input placeholder="purchase amount" type="text" onChange={(e)=>setPurchaseAmount(e.target.value)} />
	      
	    </div>
   <p> Purchased Amount  {purchaseAmount}</p>
	    <h1>Existing Contract</h1>
	    <div>
                <button onClick={()=>setContractAddress(existingContractAddress)}>Save Contract Address</button>
	    </div>
	    <div>
                <input placeholder="contract address" type="text" onChange={(e)=>setExistingContractAddress(e.target.value)} />
	    </div>
        </>
    )





}

export default DeployContract;
