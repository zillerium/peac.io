import {useEffect, useState, useContext } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ReactPlayer from 'react-player';
import WalletInner from './WalletInner';
import {ethers} from 'ethers';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,   useAccount,configureChains, createClient, useSigner, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';


function Wallet() {

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
        const {isConnected, address} = useAccount()
        const {chain} = useNetwork();
        const network = useNetwork();

return (
  <div className="container">

       <WagmiConfig client={client}>
         <div className="row">

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
                {isConnected ? <>Address: {address}</>:<>User not connected</>}
           </div>
           <div>
               {chain && <div>Network - {chain.name}</div>}
           </div>
	</div>

        <div>
	  <div className="row">
	           <WalletInner isConnected={isConnected} address={address}/>

         </div>
	</div>
          </WagmiConfig>
  </div>
);


}

export default Wallet;

	





