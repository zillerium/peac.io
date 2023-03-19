import {useEffect, useState, useContext } from 'react'; 
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import ApproveEscrowContract from './ApproveEscrowContract';
import PayContract from './PayContract';
import ApproveContract from './ApproveContract';
import PaySeller from './PaySeller';
import ContractShow from './ContractShow';



function WalletInner(props) {
        const   [deployContract, setDeployContract] = useState(true);
        const   [approveContract, setApproveContract] = useState(false);
        const   [approveAmount, setApproveAmount] = useState(0);
        const   [payContract, setPayContract] = useState(false);
        const   [approveEscrowContract, setApproveEscrowContract] = useState(false);
        const   [paySeller, setPaySeller] = useState(false);
        const   [paymentAmount, setPaymentAmount] = useState();
        const   [erc20ContractAddress, setERC20ContractAddress] = useState();
        const   [contractAddress, setContractAddress] = useState();
        const   [contractDetails, setContractDetails] = useState([{}]);
        const   [notary, setNotary]=useState({address: ''});
        const   [sellerAddress, setSellerAddress]=useState({address: ''});
        const   [contractNumber, setContractNumber]=useState(0);
        const   [salesRelease, setSalesRelease] = useState(0);
        const   [disputeRelease, setDisputeRelease] = useState(0);
        
	const isConnectedWallet = props.isConnected;
        const payer = props.address;
        const cart = useContext(CartContext);

useEffect(() => {
		setERC20ContractAddress('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
	setContractAddress('0x44f168de1F56c61b93817D5E87e569cEc1f1F8aC');

	setApproveAmount(1000000000000);
	setApproveContract(true);
	setApproveEscrowContract(true);
	setPayContract(true);
}, [])
console.log("app amout ------", approveAmount);
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
                notary, setNotary,
                sellerAddress, setSellerAddress,
                salesRelease, setSalesRelease,
                disputeRelease, setDisputeRelease,
                contractNumber, setContractNumber
        }}>

        <div>
    	    <div className="row">
	       <ContractShow />
	    </div>
	</div>

        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
	           <h2>Settle Contract</h2>
               </div>
   	   </div>

 <div className="row">
             <div className="col-6 ">
        { approveContract && <ApproveContract />        }
        { !approveContract && <Button variant="secondary" disabled>2. Approve StableCoin Contract</Button>      }
        </div>
</div>

	   <div className="row">
               <div className="col-12 text-center">

        { payContract && <PayContract />	}
	{ !payContract && <Button variant="secondary" disabled>4. Pay to Escrow</Button>	}

	           { paySeller && <PaySeller />	}
	           { !paySeller && <Button variant="secondary" disabled>2. Settle to Seller</Button>	}
	       </div>
           </div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default WalletInner;


	





