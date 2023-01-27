import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from '../components/NavbarComponent';
import {Container, Row, Col} from 'react-bootstrap';
import {Link, BrowserRouter ,  Routes, Route} from 'react-router-dom';
import Cancel from './Cancel'
import Store from './Store'
import ProductPage from './ProductPage'
import Success from './Success'
import CartProvider from '../CartContext.js'
import ReactPlayer from 'react-player'

const About = () => {



  return (
    <div >

      <header >
	  <h1>About Us</h1>
        <p>Contractual Payments without an intermediary.
        </p>
<Container>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=JU0dBWZQr5I"/>
          </Col>
	  <Col></Col>
	  </Row>
	  <Row><Col></Col>
	  <Col>
                 <ReactPlayer url="https://www.youtube.com/watch?v=spfkaIOsy4k"/>
          </Col>
	  <Col></Col>
	  </Row>
	  </Container>

      </header>
    </div>
  );
}

export default About;
