import {Web3Modal, Web3Button} from '@web3modal/react';
import {useContext, useEffect, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,configureChains, createClient, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';
import {ContractContext} from './ContractContext'

function ConnectWallet() {

 const  {
                deployContract, setDeployContract,
                approveContract, setApproveContract,
                payContract, setPayContract,
                approveEscrowContract, setApproveEscrowContract,
                paySeller, setPaySeller,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, 
                contractDetails, setContractDetails,
                notary, setNotary
                } = useContext(ContractContext)

//useEffect(()=> {
//
//}, [connectWallet, deployContract, payContract, approveContract, paySeller, networkConnected, paymentAmount, erc20ContractAddress, contractAddress, address, isConnected])

	const { chains, provider, webSocketProvider } = configureChains(
                 [polygonMumbai, goerli, avalanche],
                 [publicProvider()],
              )
	const client=createClient({
            autoConnect: true,
		connectors: modalConnectors({appName: "web3Modal", chains}),
		provider,
	});

	const aEthereumClient = new EthereumClient(client, chains);
        const {isConnected: isConnectedAccount, address: addressAccount} = useAccount()
        const {chain} = useNetwork();
        const network = useNetwork();
//	setNetworkConnected(network);
//	setIsConnected(isConnectedAccount);
//	setAddress(addressAccount);

  return (
    <div >
	  <WagmiConfig client={client}>
                    <div>
             <Web3Modal projectId= "18cf63f918c9aebd18567aabc841a68a"
                  theme="dark"
          accentColor="default"
          ethereumClient={aEthereumClient}/>
          </div>
<div>
             <Web3Button></Web3Button>
          </div>
    <div>
                {isConnectedAccount ? <>Address: {addressAccount}</>:<>User not connected</>}
           </div>
           <div>
               {chain && <div>Network - {chain.name}</div>}
           </div>
          </WagmiConfig>

    </div>
  );
}

export default ConnectWallet;
