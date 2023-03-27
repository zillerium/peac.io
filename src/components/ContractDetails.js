import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abi from './abi';
import { ContractContext } from './ContractContext';
import  ShowContractDetails  from './ShowContractDetails';

function ContractDetails(props) {
  const { contractAddress, contractNumber, contractDetails, setContractDetails } = useContext(ContractContext);

	    console.log("----contract number show adata --------------", props.contractNum);
  const config = {
    address: contractAddress,
    abi: abi,
    overrides: { from: props.address },
    functionName: 'salesContracts',
   args: [props.contractNum],
  };

  const { data, isLoading, isSuccess } = useContractRead(config);

  useEffect(() => {
    if ((isSuccess)  && (data) ) {
	    console.log("----show adata --------------", data);
	    console.log("----show adata --------------", data);
	    console.log("----show adata --------------", data);
	    console.log("----show adata --------------", data);
      setContractDetails({data});
      };
  }, [data]);

  if (isLoading) {
    return <div>Loading contract details...</div>;
  }

	 // {contractDetails && <ShowContractDetails /> }
  return (
    <div>
    </div>
  );
}

export default ContractDetails;
