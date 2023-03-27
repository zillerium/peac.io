import {useEffect, useState, useContext } from 'react'; 
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {ContractContext} from './ContractContext';
import GetSellers from './GetSellers';



function WalletInner(props) {
        const   [sellerAddress, setSellerAddress]=useState({address: ''});
        const   [contractAmount, setContractAmount]=useState(0);
        
	const isConnectedWallet = props.isConnected;
        const payer = props.address;
        const cart = useContext(CartContext);
return (
    <div className="container">

        <ContractContext.Provider value={{
                sellerAddress, setSellerAddress,
		contractAmount, setContractAmount
        }}>

        <div>

<CheckAllowace />
	<GetSellers />
      </div>
<div>
	seller addr {sellerAddress.address} end of addr {allowanceAmount} end amount
	</div>
        </ContractContext.Provider>
  </div>
);


}

export default WalletInner;


	





