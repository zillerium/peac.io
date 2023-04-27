import {useContext} from 'react'
import {ContractContext} from './ContractContext'
import ApproveContractNow from './ApproveContractNow'

import { Button, } from 'react-bootstrap';

function ApproveContract() {

	 const  {
                allowanceAmount,
                approvedMsg,
                } = useContext(ContractContext)


	return (
    <div >
		        <div>



        {  <ApproveContractNow />  }
		</div>

    </div>
  );
}


export default ApproveContract;
