import {Web3Button} from '@web3modal/react';
import React, {useContext, useEffect, useState} from 'react'
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
import {Container, Button, Row, Col, Image, Table} from 'react-bootstrap';

function ContractShow() {

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
        console.log("shpw start contract details ====");
	console.log(contractDetails);
	console.log(contractAddress);
        console.log("shpw end contract details ====");
	const [hoverIndex, setHoverIndex]=useState(-1);
	const handleMouseEnter = (index) => { setHoverIndex(index);}
	const handleMouseLeave = (index) => { setHoverIndex(-1);}
     return (
        <div >
	  <b> Contract</b>
               <Table stripod  bordered hover>
                    <thead>
                       <tr>
                         <th>Hover</th>
                         <th>Seller</th>
                         <th>Notary</th>
                         <th>Contract</th>
                         <th>Amount</th>
                       </tr>
                    </thead>
                    <tbody>
                        {contractDetails.length>0 && contractDetails.map((value, key) => {
                                return (
					<React.Fragment key={key}>
					<tr>
                                 <td onMouseEnter={()=>handleMouseEnter(key)} 
					onMouseLeave={handleMouseLeave}> More </td>    
                                 <td
				>    {value.seller?.substring(0,4)} 
				 </td>
				 <td>    {value.notary?.substring(0,4)}  </td>
                                 <td> <a href={`https://mumbai.polygonscan.com/address/${value.contractAddress}`} target="_blank">
					{value.contractAddress?.substring(0,4)}</a>  </td>
                                 <td>    ${value.totalAmount?.toFixed(2)}  </td>
                                        </tr>
				              {hoverIndex === key && (
						      <tr>
						      <td>More
						      </td>
						                                             <td  className="popup">

						                                                 {value.seller}
						                                                </td>

				 <td>    {value.notary}  </td>
                                 <td> {value.contractAddress}  </td>
                                 <td>    ${value.totalAmount?.toFixed(2)}  </td>
                                                       </tr>

						                                        )}

					</React.Fragment>
                                )
                        })}
                                       </tbody>

                                         </Table>
 
    </div>
  );
}

export default ContractShow;
