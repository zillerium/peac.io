import {useContext, useEffect} from 'react'
import {  
	    useContractWrite, usePrepareContractWrite} from "wagmi";
import {ContractContext} from './ContractContext'

import abierc20 from './abierc20';
import { Button, } from 'react-bootstrap';

function ApproveContractNow() {

	 const  {
                erc20ContractAddress,
                contractAddress,
		allowanceAmount,
                approvedMsg, setApprovedMsg,
                } = useContext(ContractContext)

//Object.keys(contractDetails).map(item=>{
//	console.log("item == ", item);
//totAmount += item.totalAmount;
//
//})
//	let totAmount = contractDetails.reduce((total,item)=>total+item.totalAmount,0);
        let totAmount = 10000000;
	totAmount = totAmount * (10 ** 6);
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        console.log("tot", totAmount, contractAddress, erc20ContractAddress);
// this handles just one seller now, but this should be an array to handle all sellers
        const {config, error} = usePrepareContractWrite({
                   address: erc20ContractAddress,
                   abi: abierc20,
                   functionName: 'approve',
                   args:[contractAddress, totAmount]
        })

        const {data, isLoading, isSuccess, write} = useContractWrite(config)
	if (isLoading) {
             return <div>Loading ...</div>
	}
	console.log(data)


	if (isSuccess) {
              return (<div> Contract Approved</div>)
	}

	return (
    <div >
		        <div>
		<Button variant="primary" disabled={false} onClick={()=>write?.()}>Approve contract to pay</Button>
		</div>
            {error && (<div> error in formatting {error.message} </div>)}

    </div>
  );
}

export default ApproveContractNow;
