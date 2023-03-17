import {useEffect, useState, useContext } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ReactPlayer from 'react-player';
import DeployContract from './DeployContract';
import ApproveContract from './ApproveContract';
import PayContract from './PayContract';
import ApproveEscrowContract from './ApproveEscrowContract';
import PaySeller from './PaySeller';
import ContractShow from './ContractShow';
import PaymentText from './PaymentText';
import bytecode1 from './bytecode';
import abi from './abi';

import {ethers} from 'ethers';
import {Web3Modal, Web3Button} from '@web3modal/react';
import {goerli,polygonMumbai, avalancheFuji, avalanche, polygon,mainnet } from "wagmi/chains";
import {WagmiConfig,   useAccount,configureChains, createClient, useSigner, useNetwork, useConnect, chain} from "wagmi";
import {EthereumClient, modalConnectors, walletConnectProvider} from "@web3modal/ethereum"
import { publicProvider } from 'wagmi/providers/public';


function WalletInner(props) {
        const   [deployContract, setDeployContract] = useState(true);
        const   [approveContract, setApproveContract] = useState(false);
        const   [payContract, setPayContract] = useState(false);
        const   [approveEscrowContract, setApproveEscrowContract] = useState(false);
        const   [paySeller, setPaySeller] = useState(false);
        const   [paymentAmount, setPaymentAmount] = useState();
        const   [erc20ContractAddress, setERC20ContractAddress] = useState();
        const   [contractAddress, setContractAddress] = useState();
        const   [contractDetails, setContractDetails] = useState([{}]);
        const   [notary, setNotary]=useState({address: ''});
        
	const isConnectedWallet = props.isConnected;
        const payer = props.address;
        const cart = useContext(CartContext);

useEffect(() => {
		setERC20ContractAddress('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
})

return (
  <div className="container">

        <ContractContext.Provider value={{
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
        }}>

        <div>
  	  <div className="row">
	    <ContractShow />
	  </div>
	  <div className="row">
  	     <div className="col-8 text-center">
	<h2>Setup Contract</h2></div>

  	     <div className="col-4 text-center">
<p><PaymentText paymentType="hover for help" paymentDesc="when there is a dot hover for more" paymentHeader="Help" /></p>
	</div> 
	</div>
	<div className="row">
  	     <div className="col-12 text-center">
	<p>This is done once for a buyer/seller relationship. Then for all new transactions the two approves should be done, or a large
<PaymentText paymentType="approval" paymentDesc="you approve the contracts to make payments" paymentHeader="Approval" />
	can be done, and then just the payment part authorised for different contractual obligations. For example, this can be 
	used for <PaymentText paymentType="rent" paymentDesc="recurring payments" paymentHeader="Rent" />, mortgage payments, 
	<PaymentText paymentType="shopping" paymentDesc="regular shopping payments" paymentHeader="Shopping" />, and anything which requires a contract</p>
            </div>
	</div>

	<div className="row">
  	     <div className="col-12 ">
	{ deployContract && <DeployContract />	}
	{ !deployContract && <Button variant="secondary" disabled>1. Create Contract</Button>	}
        </div>
</div>
	<div className="row">
  	     <div className="col-6 ">
	{ approveContract && <ApproveContract />	}
	{ !approveContract && <Button variant="secondary" disabled>2. Approve StableCoin Contract</Button>	}
        </div>
  	     <div className="col-6 ">
	
	{ approveEscrowContract && <ApproveEscrowContract />	}
	{ !approveEscrowContract && <Button variant="secondary" disabled>3. Approve Escrow Contract</Button>	}

        </div>
        </div>

	<div className="row">
  	     <div className="col-12 text-center">
	<h2>Settle Contract</h2>
              </div>
	</div>
	 <div className="row">
             <div className="col-12 text-center">

	{ payContract && <PayContract />	}
	{ !payContract && <Button variant="secondary" disabled>4. Pay to Escrow</Button>	}

	{ paySeller && <PaySeller />	}
	{ !paySeller && <Button variant="secondary" disabled>5. Settle to Seller</Button>	}
	   </div>
         </div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default WalletInner;

	





