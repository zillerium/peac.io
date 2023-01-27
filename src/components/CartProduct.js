import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import {useContext} from 'react';

const CartProduct=(props)=> {
          const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const title = props.title;
	const seller = props.seller;
	const price = props.price;
	console.log("price ========================== title", title);
	const priced = props.price.toFixed(2);
	const subtot = (price*quantity).toFixed(2);
	console.log("title ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp");
	console.log(props);
	console.log(price);
//	const productData = getProductData(id);

	return (

		                                        <tr>
                                                  <td>{id}</td>
                                                  <td>{seller.substring(0,4)}</td>
                                                  <td>{title}</td>
                                                  <td>{quantity}</td>
                                                  <td>${priced}</td>
                                                  <td>${subtot}</td>
                      <td> <Button size="sm" onClick={() => cart.deleteFromCart(id)}>X</Button></td>
                                        </tr>

	)

}

export default CartProduct;
