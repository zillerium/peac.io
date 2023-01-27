import {useEffect, useState } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";
import {Container, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';
import ReactPlayer from 'react-player';


function Walletold() {
const	[signClient, setSignClient] = useState();
const	[web3Modal, setWeb3Modal] = useState();
const	[test, setTest1] = useState();
const	[sessions, setSessions] = useState([]);
const	[accounts, setAccounts] = useState([]);
const	[txhash, setTxhash] = useState([]);

const cart = useContext(CartContext);

const createWeb3Modal =  () => {
        console.log("111111");
   const web3Modal1 =  new Web3Modal({
                projectId: process.env.REACT_APP_PROJECT_ID,
        standaloneChains:[ "eip155:5"]
   })
	setTest1("mmmm");
        console.log("2222222111111");
        console.log(test);
        console.log(web3Modal1);
   setWeb3Modal(web3Modal1);
        console.log("333333333333333332222222111111");
        console.log(web3Modal1);
        console.log("444444444333333333333333332222222111111");
        console.log(web3Modal);

}

useEffect(()=>{

cart.createWeb3Modal();

console.log("modalxxyy -------------------");
console.log(cart)
console.log(cart.web3Modal)
console.log("modalxxyy 1-------------------");
}, [cart.web3Model])



 const createClient = async () => {
	 console.log("create client ===================");
	 console.log("create client ===================");
	 console.log("create client ===================");
	await cart.createClient();
console.log("cart in wallet 000000");
console.log(cart)
console.log("cart in wallet 999000000");
 }


	const readWeb3Modal = () => {
console.log("modalxx -------------------");
console.log(cart)
console.log(cart.web3Modal)
console.log("modalxx 1-------------------");
	}

	const createWeb3Modal1 = () => {
setWeb3Modal(cart.createWeb3Modal());
console.log("modal -------------------");
console.log(cart)
console.log(web3Modal)
console.log(cart.web3Modal)
console.log("modal 1-------------------");
	}

 const handleConnect = async () => {
	 console.log("create client ===================");
	 console.log("create client ===================");
	 console.log("create client ===================");
	await cart.handleConnect();
console.log("cart in wallet 000000111111");
console.log(cart)
console.log("cart in wallet 9990000001111");
 }


 const handleDisconnect = async () => {
         console.log("create client ===================");
        await cart.handleDisconnect();
console.log("cart in wallet dis 000000111111");
console.log(cart)
console.log("cart in wallet dis 9990000001111");
 }


const handleSend=async()=> {
        try {
const tx =
  {
    from:cart.accounts,
    to: "0x846799Ed461091F982d52FB2f7812913c8E90B01",
    data: "0x",
    gasPrice: "0x029104e28c",
//    gasPrice:   "0x5152ab908c",
    gasLimit:   "0x5208",
    value: "0x00",
  };
                console.log(tx);
   const res = await cart.signClient.request({
topic:cart.sessions.topic,
    request: {
       method:"eth_sendTransaction",
params: [tx]
    },
           chainId: "eip155:5",
   });
                setTxhash(res);
                console.log(res);

        } catch(e) {
            console.log(e);
        }

}

const sessionLength = Object.keys(cart.sessions).length;

console.log("dara----");
console.log(cart)
console.log(sessionLength)
console.log(cart.sessions)
console.log(cart.sessions)
if (cart.sessions.length>0) console.log(cart.sessions.namespaces.eip155.accounts[0]);
  return (
    <div >
	  <h1>Checkout</h1>
	  <div>
	  <Container className="mt-3">
              <Row>
                  <Col xs={3}> 
                       <Card>
	                 <Card.Header>Wallet & Payment</Card.Header>
	                 <Card.Body>
<Button onClick={createClient} disabled={cart.signClient}>Create Client</Button>
	                 </Card.Body>
                       </Card>
                       <Card>
	                 <Card.Body>
                  <Button onClick={handleDisconnect}   disabled ={sessionLength==0} >Disconnect</Button>
                  <Button onClick={handleConnect}  disabled ={!(sessionLength==0)} >Connect</Button> 
	                 </Card.Body>
                       </Card>
                       <Card>
	                 <Card.Body>
                  <Button onClick={handleSend}> Pay</Button>
	  <br/>$ {(cart.getTotalCost()).toFixed(2)}
	                 </Card.Body>
                       </Card>

</Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=iQ-nKIp4kfk"/>
	  </Col>
	      </Row>
	  </Container>
	  <h2>Connection</h2>
	  <p>Sign client = {cart.signClient && cart.signClient.opts.projectId}</p>
	  <p>Session = {(sessionLength) ? cart.sessions.namespaces.eip155.accounts[0]: ' '}</p>
	  
	  </div>
	  <div>
	 {txhash}
	  </div>

    </div>
  );
}

export default Walletold;

