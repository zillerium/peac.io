import {useState, useContext, useEffect} from 'react'
import {
	      useContractRead} from "wagmi";
import {ContractContext} from './ContractContext'
import abi from './abi';
import { Button} from 'react-bootstrap';

function CheckAllowance(props) {
	 const  {
                allowanceAmount, setAllowanceAmount,
                contractAddress, 
                } = useContext(ContractContext)

        const config = {
                address: contractAddress,
                abi: abi,
		overrides: {from: props.address},
                functionName: 'checkAllowance',
                //functionName: 'getContractUsdcBalance',
        }
	console.log("checl allowance 2 == ", config, props.address)


	const {data, isLoading, isSuccess} = useContractRead(config)

useEffect(()=>{
    
	    console.log("checl allowance == ", data)
	        if (isSuccess) {
                if (data) {
                        console.log("-------------------- data ------ ", data[0].toString());
                        console.log("-------------------- data ------ ", data[0].toString());
                        console.log("-------------------- data ------ ", data[0].toString());
                        console.log("-------------------- data ------ ", data[0].toString());
                        console.log("-------------------- data ------ ", data[0].toString());
                    setAllowanceAmount(data[0].toString());
                }
           }

}, [data]);

        if (isLoading) {
           return <div>Loading ...</div>
        }
	return (
    <div >
		</div>
  );
}

export default CheckAllowance;
