import {Web3Modal, Web3Button} from '@web3modal/react';
import {useContext, useState} from 'react'
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,  useAccount,configureChains, createClient, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';

function Wagmitest() {

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
    </div>
  );
}

export default Wagmitest;
