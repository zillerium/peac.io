import {useContext} from 'react'
import {ContractContext} from './ContractContext'
import PayContract from './PayContract'

import {Button} from 'react-bootstrap';

function PayContractMgr() {

	 const  {
		 allowanceAmount, setAllowanceAmount,
                sellerAddress, setSellerAddress,
                paySeller, setPaySeller,
                } = useContext(ContractContext)
console.log("---------------- seller address -----------------", sellerAddress);
console.log("---------------- seller address -----------------", sellerAddress);
console.log("---------------- seller address -----------------", sellerAddress);
console.log("---------------- seller address -----------------", sellerAddress);
console.log("---------------- seller address pay -----------------", paySeller);
console.log("---------------- seller address allowance -----------------", allowanceAmount);
	
    return (
        <>

        {allowanceAmount}
        {  sellerAddress && !paySeller && <PayContract /> }
        { !sellerAddress && <Button variant="secondary" disabled>4. Pay to Escrow</Button> }
        { paySeller && <div>Contract Paid</div> }
        { !paySeller && <div>Contract unPaid</div> }


        </>
    )

}

export default PayContractMgr;

