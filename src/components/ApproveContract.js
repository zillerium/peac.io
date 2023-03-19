import {Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
	configureChains, createClient, useNetwork, useConnect, chain, useContractWrite, usePrepareContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import bytecode1 from './bytecode';

import abierc20 from './abierc20';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

function ApproveContract() {

	 const  {
                deployContract, setDeployContract,
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                contractDetails, setContractDetails,
                notary, setNotary
                } = useContext(ContractContext)

	console.log("contract debug details ====== ");
	console.log(contractDetails);
//Object.keys(contractDetails).map(item=>{
//	console.log("item == ", item);
//totAmount += item.totalAmount;
//
//})
//	let totAmount = contractDetails.reduce((total,item)=>total+item.totalAmount,0);
        let totAmount = 10000000;
	totAmount = totAmount * (10 ** 6);
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
console.log("tot", totAmount, contractAddress, erc20ContractAddress);
// this handles just one seller now, but this should be an array to handle all sellers
  const {config, error} = usePrepareContractWrite({
                   address: erc20ContractAddress,
          abi: abierc20,
          functionName: 'approve',
          args:[contractAddress, totAmount]
  })

const {data, isLoading, isSuccess, write} = useContractWrite(config)
	if (isLoading) {
             return <div>Loading ...</div>
	}
	console.log(data)

 if (isSuccess) {
     setApproveEscrowContract(true);
	 setApproveContract(false);
 }

	return (
    <div >
		        <div><Button variant="primary" disabled={!write} onClick={()=>write?.()}>Approve contract to pay {paymentAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}

    </div>
  );
}












export default ApproveContract;
