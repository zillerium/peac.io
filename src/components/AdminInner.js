import {useEffect, useState, useContext } from 'react'; 
import {Button, } from 'react-bootstrap';
import {ContractContext} from './ContractContext';
import ApproveContract from './ApproveContract';
import CheckAllowance from './CheckAllowance';

function AdminInner(props) {
        const   [allowanceAmount, setAllowanceAmount] = useState(0);
        const   [approveContract, setApproveContract] = useState(false);
        const   [paymentAmount, setPaymentAmount] = useState();
        const   [erc20ContractAddress, setERC20ContractAddress] = useState('0x0FA8781a83E46826621b3BC094Ea2A0212e71B23');
        const   [contractAddress, setContractAddress] = useState(process.env.REACT_APP_CONTRACT_ADDR);
        const   [approvedMsg, setApprovedMsg] = useState("not approved");
        
	const isConnectedWallet = props.isConnected;
        const payer = props.address;

return (
    <div className="container">

        <ContractContext.Provider value={{
                allowanceAmount, setAllowanceAmount,
                approveContract, setApproveContract,
                paymentAmount, setPaymentAmount,
                erc20ContractAddress, setERC20ContractAddress,
                contractAddress, setContractAddress,
                approvedMsg, setApprovedMsg
        }}>


        <div>
	   <div className="row">
  	       <div className="col-12 text-center">
	           <h2>Register Wallet</h2>
               </div>
   	   </div>
      <div className="row">
             <div className="col-6 ">
                 <CheckAllowance  address={props.address} />
             </div>
      </div>

	   <div className="row">
	{allowanceAmount==0 ? <ApproveContract /> : <div>already approved</div>}
	</div>
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default AdminInner;


	





