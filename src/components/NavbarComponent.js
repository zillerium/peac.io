import {Button, Container, Navbar, Table, Modal} from 'react-bootstrap';
import {useState, useContext } from 'react';
import axios  from 'axios';
import {CartContext} from '../CartContext';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

const NavbarComponent=()=>{

    const cart = useContext(CartContext);
    const [show, setShow]=useState(false);
    const handleClose = () => {setShow(false); cart.closeModal(); }
    const handleShow = () => {setShow(true);  }

	const checkout = async () => {

   const response = await axios.post("https://peacioapi.com:3000/checkout", cart.items);
		console.log(response);
		const url=response.data.data.url;
		console.log(response.data.data.url);
		window.location.assign(url);

	}

    const productsCount = cart.items.reduce((sum,product)=> sum+product.quantity, 0);

	console.log("carttttttttttttttttttttttttttttttttttttttttttttttttttt");
	console.log(cart);
	console.log("totallllllllllllllllllllllllllllllllllllllllllll");
	console.log(cart.getTotalCost());

return (
	<>
        <Navbar expand="sm">
           <Navbar.Toggle />
           <Navbar.Collapse className="justify-content-end">
                <Button onClick={handleShow}>Cart ({productsCount} items)</Button>
	    </Navbar.Collapse>
        </Navbar>
	<Modal size="lg" show={show} onHide={handleClose} >
          <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
	  </Modal.Header>
	           <Modal.Body>
                                  <Table stripod  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Brand</th>
                                                      <th>Seller</th>
                                                      <th>Details</th>
                                                      <th>Qty</th>
                                                      <th>Price</th>
                                                      <th>Subtot</th>
                                                      <th>Action</th>
                                                 </tr>
                                            </thead>
                	{productsCount > 0 ?

                                        <tbody>
					      {cart.items.map((currentProduct, idx) => (
						      <CartProduct key={idx}
                                                      id = {currentProduct.id} 
                                                      seller= {currentProduct.seller} 
                                                      quantity = {currentProduct.quantity} 
                                                      title = {currentProduct.title} 
                                                      price = {currentProduct.price} 
						      />
						        ))}


                                       </tbody>



		        : <tbody>
				</tbody>
	                
			}

<tr>
	<td>Total</td>
	<td></td>
	<td></td>
	<td></td>
	<td>${(cart.getTotalCost()).toFixed(2)}</td>
	<td>	<Link to="/pay">
		               <Button disabled={(cart.items.length==0) ? true : false} 
		               onClick={()=>handleClose()}>Buy</Button>
	</Link></td></tr>


                                         </Table>
	           </Modal.Body> 

	</Modal>
	</>

)
}

export default NavbarComponent;
