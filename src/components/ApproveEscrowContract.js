import {useContext} from 'react'
import {  
            useContractWrite, usePrepareContractWrite} from "wagmi";
import {ContractContext} from './ContractContext'
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';

import abi from './abi';

function ApproveEscrowContract() {

	 const  {
                approveAmount, setApproveAmount,
                payContract, setPayContract,
                contractAddress, 
                } = useContext(ContractContext)
console.log("----app amt -- ", approveAmount);
const approveAmount1 = 10000000000000;
  const {config, error} = usePrepareContractWrite({
                   address: contractAddress,
          abi: abi,
          functionName: 'approveContractTransfer',
          args:[approveAmount1]
  })
console.log(config);
                const {data, isLoading, isSuccess, write} = useContractWrite(config)
        if (isLoading) {
             return <div>Loading ...</div>
        }
        console.log(data)

	 if (isSuccess) {
		 setPayContract(true);
         }




    return (
        <>
        <div><Button  onClick={()=>write?.()}>Approve contract to pay {approveAmount}</Button></div>
            {error && (<div> error in formatting {error.message} </div>)}
   <div><p>contract approval to pay=   at address {contractAddress}</p></div>
        </>
    )

}

export default ApproveEscrowContract;

