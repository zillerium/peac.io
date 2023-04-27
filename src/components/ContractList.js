import { useEffect, useState, useContext } from 'react';
import { useContractRead } from 'wagmi';
import { ContractContext } from './ContractContext';
import ContractDetails from './ContractDetails';
import ShowContractDetails from './ShowContractDetails';
import PaySeller from './PaySeller';
import ClaimSeller from './ClaimSeller';
import abi from './abi';
import { Button, ListGroup, Table } from 'react-bootstrap';

function ContractList(props) {
  const { contractAddress, contractDetails, sellerContracts, buyerContracts } = useContext(ContractContext);
	const [selContract, setSelContract]=useState();
console.log("jjjjjjjjjjjjjjj", buyerContracts);
//           <ContractDetails contractNum={contractNum} />
          //{contractDetails && <ShowContractDetails /> }
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
console.log("ooooooooooooooooooo contract details ------------", contractDetails);
  const showContractDetailsFunc=(c) => {
	  console.log("c=====", c);
	  console.log("c=====", c);
	  console.log("c=====", c);
	  setSelContract(c);
	  console.log("ccontarct=====", selContract);
  }

 /* {selContract && (
           <ContractDetails contractNum={selContract} />
  )}
          {contractDetails && <ShowContractDetails /> }
*/
	//  {contractDetails}
  const dateFormat = {
     dateStyle: 'long',
	  timeStyle: 'short',
	  hour12: true
  }

   return (
    <div>
	   <div className="row">
       <div className="col-6">
      <h3>List of Contracts:</h3>
      <ListGroup>
        {props.contracts.map((contractNum) => (
          <ListGroup.Item key={contractNum}>
            <Button variant="light" onClick={() => showContractDetailsFunc(contractNum)}>
              {contractNum}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
     </div>

      {selContract && <ContractDetails address={props.address} contractNum={selContract} />}

       <div className="col-6">
      {selContract && contractDetails && JSON.stringify(contractDetails) !== JSON.stringify([{}]) && (
        <div>
          <h3>Contract Details: {selContract} ({props.contractType})</h3>
          <Table bordered striped>
            <tbody>
              <tr>
                <td><strong>Seller:</strong></td>
                <td>{contractDetails.data.seller}</td>
              </tr>
              <tr>
                <td><strong>Buyer:</strong></td>
                <td>{contractDetails.data.buyer}</td>
              </tr>
              <tr>
                <td><strong>Notary:</strong></td>
                <td>{contractDetails.data.notary}</td>
              </tr>
              <tr>
                <td><strong>Dispute:</strong></td>
                <td>{contractDetails.data.dispute ? 'yes' : 'no'}</td>
              </tr>
              <tr>
                <td><strong>Settled:</strong></td>
                <td>{contractDetails.data.settled ? 'yes' : 'no'}</td>
              </tr>
              <tr>
                <td><strong>Release Time:</strong></td>
	      <td>
  {new Date(parseInt(contractDetails.data.releaseTime._hex,16)*1000).toLocaleString('en-GB', dateFormat)}
  {new Date() > new Date(parseInt(contractDetails.data.releaseTime._hex,16)*1000) &&
    <span className="text-success font-weight-bold"> <strong>settlement possible</strong></span>
  }
               </td>

              </tr>
              <tr>
                <td><strong>Dispute Release:</strong></td>
                <td>{new Date(parseInt(contractDetails.data.disputeRelease._hex,16)*1000).toLocaleString('en-GB',dateFormat)}</td>
              </tr>
              <tr>
                <td><strong>Balance:</strong></td>
                <td>{(parseInt(contractDetails.data.balance._hex, 16)/10**6).toFixed(2)} USD</td>
              </tr>
              <tr>
                <td><strong>Price:</strong></td>
                <td>{(parseInt(contractDetails.data.price._hex, 16)/10**6).toFixed(2)} USD</td>
              </tr>
	      <tr>
	      {props.contractType==="buyer" && <td colSpan="2">
	      {parseInt(contractDetails.data.balance._hex, 16)>0 && 
		      <PaySeller contractNum={selContract}
		      contractAmount={(parseInt(contractDetails.data.balance._hex, 16)/10**6).toFixed(2)}/>}
	        </td>}
	      </tr>
	      <tr>
	      {props.contractType==="seller" &&
		      new Date() > new Date(parseInt(contractDetails.data.releaseTime._hex,16)*1000) 
		      && 
		<td colSpan="2">
	      {parseInt(contractDetails.data.balance._hex, 16)>0 && 
		      <ClaimSeller contractNum={selContract}
		      contractAmount={(parseInt(contractDetails.data.balance._hex, 16)/10**6).toFixed(2)}/>}
	        </td>}
	      </tr>
            </tbody>
          </Table>
        </div>
      )}
     </div>
    </div>
    </div>
  );
}

export default ContractList;
