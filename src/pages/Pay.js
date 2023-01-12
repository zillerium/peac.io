import {useEffect, useState } from 'react'; 
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";
import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';
import Wallet from '../components/Wallet';
import NavbarComponent from '../components/NavbarComponent';
import axios from 'axios';

function Pay() {

const cart = useContext(CartContext);
useEffect(()=>{
	cart.closeModal();
}, [cart])
	console.log("**********************************************cart");
	console.log(cart);
  return (
    <div className="App">
<Wallet />
    </div>
  );
}

export default Pay;

