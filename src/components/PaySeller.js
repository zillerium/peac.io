import {useContext, useState} from 'react'
import {
         useContractWrite, usePrepareContractWrite} from "wagmi";
import {ContractContext} from './ContractContext'
import bytecode1 from './bytecode';
import {CartContext} from '../CartContext'

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
	        contractNumber, setContractNumber,
                isConnected, setIsConnected } = useContext(ContractContext);
         const cart = useContext(CartContext);

const items = cart.items;
console.log("----items --", items);

        const notaries = [{address:'0x9f0BEA7dE67e8Fb333067ed83b468E5082280835'}];
        let sellers = items.reduce(
                (acc,item)=> {
                        if (!acc[item.seller]) {
                                acc[item.seller] = {
                            seller: item.seller,
                                totAmount: item.price*item.quantity,
                                }
                        } else {
                            acc[item.seller].totAmount +=item.price*item.quantity;
                        }
                return acc;
                }, {});
        console.log("sellers -- ", sellers);
        let totAmount=0;
        let thisSellerAddr = {address:''};
        Object.entries(sellers).map(([sellerAddress, sellerDetails]) => {
             thisSellerAddr.address = sellerAddress;
             totAmount = sellerDetails.totAmount;
        })



  //totAmount = totAmount * (10 ** 6);

const argsArray = [contractNumber];

	const stableCoinAmount = totAmount;
console.log("----  contractNumber -- ", contractNumber);
 const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
          abi: abi,
          functionName: 'settlementUsdc',
	   args: argsArray
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
