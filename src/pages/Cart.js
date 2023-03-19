import {useParams, useLocation, useNavigate, Link} from "react-router-dom";
import React, {useState, useContext} from 'react';
import {Container, Button, Row, Col, Image, Table} from 'react-bootstrap';

import {CartContext} from '../CartContext';
import CartTotal from '../components/CartTotal';


//      let res = await searchDB(props.query);
  //      console.log(res.data);


const Cart = (props) => {
const [search, setSearch] = useState("");
	const {productId}=useParams();
      const cart=useContext(CartContext);

        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecart");
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecart");
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecart");
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecart");
        console.log(cart);
        return (
          <>
	  <div>
          <h1>Cart </h1>
          </div>
		<div>
<div>
                                        <div>
                                        <Table stripod  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Brand</th>
                                                      <th>Details</th>
                                                      <th>Price</th>
                                                      <th>Qty</th>
                                                      <th>SubTot</th>
                                                      <th>Cart</th>
                                                 </tr>
                                            </thead>
                                        <tbody>
                        {cart.items.length>0 && cart.items.map((value, key) => {
                                return (
                                        <tr>
                                 <td>    {value.id}  </td>
                                                             <td>            <Link to={{
                                             pathname:`/product/${value.id}`,
                                                           state:{productId: value.id, productPrice: value.price}
                                                           }}>{value.title}</Link>
                                                           </td>
                                 <td>    ${value.price?.toFixed(2)}  </td>
                                 <td>    {value.quantity}  </td>
                                 <td>   ${( value.price*value.quantity).toFixed(2)}  </td>
                                        <td> <Button sm="6" 
                                        onClick={()=>cart.addOneToCart({dbKey:value.id, merchantName: value.merchantName, partSalePrice:value.price, partShortDesc:value.title})
                                        }
                                        className="mx-2">+</Button>
                                         <Button sm="6" 
                                        onClick={()=>cart.removeOneFromCart({dbKey:value.id, partSalePrice:value.price, partShortDesc:value.title})
                                        }
                                        className="mx-2">-</Button></td>
                                        </tr>
                                )
                        })}
                                       </tbody>
<tr>
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td>${(cart.getTotalCost()).toFixed(2)}</td>
        <td>    <Link to="/pay">
                               <Button disabled={(cart.items.length==0) ? true : false}
                               >Buy</Button>
        </Link></td></tr>

                                         </Table>
                                        </div>
        </div>    

		</div>
		</>
  )
}

export default Cart;

