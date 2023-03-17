import {Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
        configureChains, createClient, useNetwork, useConnect, chain, useContractWrite, usePrepareContractWrite} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import bytecode1 from './bytecode';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

import { BigNumber} from 'bignumber.js';
import abi from './abi';

function ApproveEscrowContract() {

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
                contractNumber, setContractNumber
                } = useContext(ContractContext)
        let totAmount = contractDetails.reduce((total,item)=>total+item.totalAmount,0);
	const stableCoinAmount = totAmount;
        totAmount = totAmount * (10 ** 6);
        const maxint256 = new BigNumber(2).pow(256).minus(1);
	const ranNumber = BigNumber.random({crypto:true}).times(maxUint256).integerValue();
        const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
                   abi: abi,
                   functionName: 'approveAndTransferUSDC',
               //    args:[totAmount]
                   args:[contractNumber, paySeller, notary, releaseTime, disputeRelease, totAmount  ]
        })
        console.log(config);
        const {data, isLoading, isSuccess, write} = useContractWrite(config)
        if (isLoading) {
           return <div>Loading ...</div>
        }
        console.log(data)

        if (isSuccess) {
           setPaySeller(true);
           setPayContract(false);
        }



    return (
        <>
        <div><Button disabled={!write} variant="primary" onClick={()=>write?.()}>Pay to Escrow {stableCoinAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
        </>
    )

}












export default ApproveEscrowContract;
