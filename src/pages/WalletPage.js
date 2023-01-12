import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import {Container} from 'react-bootstrap';
import {Link, BrowserRouter ,  Routes, Route} from 'react-router-dom';
import Cancel from './Cancel'
import Store from './Store'
import ProductPage from './ProductPage'
import Success from './Success'
import CartProvider from '../CartContext.js'

const WalletPage = () => {

       const wallet =useContext(CartContext);


  return (
    <div >
	  <CartProvider>
         <Container>
	    <NavbarComponent>

	    </NavbarComponent>
          <div>
	  </div>
	  </Container>
</CartProvider>

      <header >
	  <h1>Wallet Pages</h1>
        <p>Connect your wallet here to Peacio.
        </p>
      </header>
    </div>
  );
}

export default About;
