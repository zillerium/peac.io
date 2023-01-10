import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {CartContext} from '../CartContext';
import {useContext} from 'react';
import axios from 'axios';
const Checkout = (props) => {
 const cart = useContext(CartContext);
      console.log(cart.items.length);
	const checkout = async () => {

   const response = await axios.post("https://peacioapi.com:3000/checkout", cart.items);
                console.log(response);
                const url=response.data.data.url;
                console.log(response.data.data.url);
                window.location.assign(url);

        }

	return (
 <div><Button disabled={(cart.items.length==0) ? true : false} onClick={checkout} >Buy</Button></div>               
        )

}

export default Checkout;
