import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import abi from './abi';

function GetContractList(props) {
  const { contractAddress, 
	  buyerContracts, setBuyerContracts,
	  sellerContracts, setSellerContracts
  } = useContext(ContractContext);
let funcname = "";
if (props.contractType ==="buyer") funcname = "getBuyerContractsByAddress"; 
if (props.contractType ==="seller") funcname = "getSellerContractsByAddress"; 


  const config = {
    address: contractAddress,
    abi: abi,
    overrides: { from: props.address },
    //functionName: 'getBuyerContractsByAddress',
    functionName: funcname,
	  args:[props.address]
  };

	console.log("config --------------", config);
	console.log("config --------------", config);
	console.log("config --------------", config);
  const { data, isLoading, isSuccess } = useContractRead(config);
console.log("read adat ---------------------------", data);
console.log("read adat ---------------------------", data);
console.log("read adat ---------------------------", data);
console.log("read adat ---------------------------", data);
  useEffect(() => {
    if (isSuccess) {
      if (data) {
	  //    setBuyerContracts([1,2,3]);
	      console.log("len=",data.length);
	      console.log("len=",data.length);
	      console.log("len=",data.length);
	      console.log("len=",data.length);
	      console.log("len=",data.length);
	      console.log("len=",data.length);
	      console.log("len=",data[0]);
	      console.log("len=",data[1]);
	      const myArray = Array.from(data.map((contract) => contract.toNumber()));
	console.log("may array ----", myArray);
//	      setBuyerContracts(myArray);
if (props.contractType ==="buyer") setBuyerContracts(myArray);
if (props.contractType ==="seller") setSellerContracts(myArray); 
       // setBuyerContracts(Array.from(data[0]).map((contract) => contract.toNumber()));
	  console.log('bucontarcts 1',data,  buyerContracts);
      }
	  console.log('bucontarcts 2', buyerContracts);
    }
	  console.log('bucontarcts 3', buyerContracts);
  }, [data]);

  if (isLoading) {
    return <div>Loading contracts...</div>;
  }
//           <ContractDetails contractNum={contractNum} />

  return (
    <div>
    </div>
  );
}

export default GetContractList;
