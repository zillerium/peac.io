import {useEffect,  useContext} from 'react';
import {CartContext} from '../CartContext';
import OrderList from '../components/OrderList';

function Orders() {

const cart = useContext(CartContext);
useEffect(()=>{
	cart.closeModal();
}, [cart])
	console.log("**********************************************cart");
	console.log(cart);
  return (
    <div >
<OrderList />
    </div>
  );
}

export default Orders;

