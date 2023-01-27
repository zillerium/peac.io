import {Web3Button} from '@web3modal/react';
import {useContext, useEffect, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,
	configureChains, createClient,useSigner, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'
import Notary from './Notary'
import {ethers, ContractFactory, utils, BigNumber} from 'ethers';
import bytecode1 from './bytecode';
import abi from './abi';
import {CartContext} from '../CartContext';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

function DeployContract() {

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
                } = useContext(ContractContext);
        const cart = useContext(CartContext);
	const payee = cart.seller;
	const title = cart.title;
	const items = cart.items;
	const sellers = items.reduce((acc, curr) => {
  if(!acc[curr.seller]) {
    acc[curr.seller] = {
      seller: curr.seller,
      totalAmount: curr.price * curr.quantity
    }
  } else {
    acc[curr.seller].totalAmount += curr.price * curr.quantity
  }
  return acc
}, {})
	    console.log(items);
	    console.log(sellers);
	    console.log("payee2 = ", payee);
	    console.log("title2 = ", title);
        const purchaseAmount = cart.getTotalCost();
//	const [notary, setNotary]=useState({address: ''});
        const salesRelease = Math.floor(Date.now() / 1000);
        const disputeRelease = salesRelease + 100; // 100 secs for testing

        const {data: signer, isError, isLoading} = useSigner({
             onError(error) {
		     console.log('error', error)
	     },
	})


        if (isLoading) return (<h1>loading ...</h1>); else console.log("signer", signer);
        if (isError) console.log("error == ");
        const contractFactory = new ethers.ContractFactory(abi, bytecode1, signer);
console.log(contractFactory)
	console.log("deploy contract user address ===========================");
  //  useEffect(()=>{
//	console.log("deploy contract notary *****************************************");
//	console.log(notary);
 //   },[notary]);

    const HandleDeploy= async ()=> {
	    console.log("button cliecked ============================");
	    console.log("payee = ", payee);
	    console.log("title = ", title);
	    console.log("sellers============================================ = ", sellers);
	    console.log("notary = ", notary, sellers, Object.keys(sellers));
       //     const maticAmount = BigNumber.from(purchaseAmount);
         //   const contract = await contractFactory.deploy(payee, notary, salesRelease, disputeRelease,
           //         {value: maticAmount});
         //   const contracts = await Promise.all(Object.keys(sellers).forEach(sellerAddress => {
	  var thisSeller = '';
          let arrayContracts=[];
	  try {
            const contract = await (Object.keys(sellers).map(async sellerAddress => {
                 const aSeller = sellers[sellerAddress];
	//	  thisSeller = aSeller.seller;
		   const contractDetails1 = {seller: aSeller.seller, totalAmount: aSeller.totalAmount, 
			   notary: notary.address ,  contractAddress: '0x0'};
			   //notary:'0x0' notary.address, buyer:address, contractAddress: '0x0'};
	//	   console.log(aSeller);
		   arrayContracts.push(contractDetails1);  
		  //  console.log(maticAmount, aSeller.seller, notary.address, salesRelease, disputeRelease);
                //    await contractFactory.deploy(sellers[sellerAddress].seller, notary.address, salesRelease, disputeRelease);
                 //  {value: maticAmount});
             }))
//		  console.log(contract);
//		  console.log("contract address *********************", contract.address);
//		  setERC20ContractAddress(contract.address);
//		  setApproveContract(true);
//		  setDeployContract(false);
	//	  const contractresolved = await Promise.all(contract);
          } catch (error) {
             console.log(error);
	  
	  }
	    const contractArrayLocal = [];
             for (let i=0;i<arrayContracts.length; i++) { 
		     console.log("vars -----");
		     console.log(arrayContracts[i].seller);
		     console.log(notary.address);
		     console.log(contractFactory);
		    
	          const contract = await contractFactory.deploy(arrayContracts[i].seller, notary.address, salesRelease, disputeRelease);

		  console.log("resolved =====");
		  console.log(contract);
		  if (contract) arrayContracts[i].contractAddress = contract.address;
		     //console.log(contractdetails)
		     console.log(arrayContracts[i])
		  contractArrayLocal.push(arrayContracts[i]);
                  console.log("contract address *********************", contract.address);
                  setContractAddress(contract.address);
                  setApproveContract(true);
                  setDeployContract(false);

	     }
	     
		  setContractDetails(contractArrayLocal);
             console.log("deploy end")
	    console.log(contractArrayLocal);

           //setContractAddress(contract.address);
        }


	   //<NotaryContext.Provider value={{notary, setNotary}}>
//	setNotary(notaries[0]);
  return (
    <div >
        <div className="row">
             <div className="col-4 text-center">
	        <Button variant="primary" onClick={HandleDeploy}>1. Create Contract</Button> 
            </div>
             <div className="col-8 text-center">
	         <Notary />
            </div>
        </div>

    </div>
  );
}

export default DeployContract;
