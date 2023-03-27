import {useEffect,  useContext} from 'react';
import {CartContext} from '../CartContext';
import AdminCom from '../components/AdminCom';

function Admin() {

const cart = useContext(CartContext);
useEffect(()=>{
	cart.closeModal();
}, [cart])
	console.log("**********************************************cart");
	console.log(cart);
  return (
    <div >
<AdminCom />
    </div>
  );
}

export default Admin;

