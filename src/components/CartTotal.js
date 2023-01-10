import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import {useContext} from 'react';
import Checkout from './Checkout';

const CartTotal=(props)=> {
         // const cart = useContext(CartContext);
	const cart = props.cart;
var totalPrice = 0;
	console.log("product ggggggggggggggggggggggggg");
       console.log(props);
	                 {cart.items.length>0 && cart.items.map((value, key) => {
                            totalPrice+=(value.price*value.quantity);
                        })}
	const totalPriced = totalPrice.toFixed(2);
	return (
                                 <tr>
                                  <td>Total</td> 
                                  <td></td>
                                  <td></td>
                                  <td></td>
                <td>
                ${totalPriced}
                </td>
                                  <td><Checkout /></td>

                </tr>


	)

}

export default CartTotal;
