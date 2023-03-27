import React, { useState, useEffect, useContext } from 'react';
import { useContractRead } from 'wagmi';
import abi from './abi';
import { ContractContext } from './ContractContext';

function ShowContractDetails() {
  const { contractDetails} = useContext(ContractContext);

console.log("hhhhhhhhhhhhhhhhhhhhhh ==", contractDetails);
console.log("hhhhhhhhhhhhhhhhhhhhhh ==", contractDetails);
console.log("hhhhhhhhhhhhhhhhhhhhhh ==", contractDetails);
console.log("hhhhhhhhhhhhhhhhhhhhhh ==", contractDetails);
  return (
    <div>
      <p>Buyer: {contractDetails.buyerr}</p>
      <p>Seller: {contractDetails.seller}</p>
      <p>Notary: {contractDetails.notary}</p>
      <p>Release Dates:</p>
      <ul>
        <li>Sales: {contractDetails.releaseTime.toNumber()}</li>
        <li>Dispute: {contractDetails.disputeTime.toNumber()}</li>
      </ul>
      <p>Payment Amount: {contractDetails.price.toNumber()}</p>
      <p>Status: {contractDetails.balance.toNumber()}</p>
      <p>Seller Approval: {contractDetails.dispute.toString()}</p>
      <p>Buyer Approval: {contractDetails.settled.toString()}</p>
    </div>
  );
}

export default ShowContractDetails;
