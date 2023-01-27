import {Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
        configureChains, createClient, useNetwork, useConnect, chain, useContractWrite, usePrepareContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import bytecode1 from './bytecode';

import abi from './abi';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';


function PaySeller() {

 const  {connectWallet, setConnectWallet,
                deployContract, setDeployContract, 
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                networkConnected, setNetworkConnected,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
	        contractDetails, setContractDetails,
                isConnected, setIsConnected } = useContext(ContractContext);

        let totAmount = contractDetails.reduce((total,item)=>total+item.totalAmount,0);
	const stableCoinAmount = totAmount;
  totAmount = totAmount * (10 ** 6);

 const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
          abi: abi,
          functionName: 'settlementUsdc',
  })
console.log(config);
                const {data, isLoading, isSuccess, write} = useContractWrite(config)
        if (isLoading) {
             return <div>Loading ...</div>
        }
        console.log(data)



    return (
        <>
        <div><Button disabled={!write} onClick={()=>write?.()}>5. Settle to seller {stableCoinAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}

export default PaySeller;
