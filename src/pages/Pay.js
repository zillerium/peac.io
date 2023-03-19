import {useEffect,  useContext} from 'react';
import {CartContext} from '../CartContext';
import Wallet from '../components/Wallet';

function Pay() {

const cart = useContext(CartContext);
useEffect(()=>{
	cart.closeModal();
}, [cart])
	console.log("**********************************************cart");
	console.log(cart);
  return (
    <div >
<Wallet />
    </div>
  );
}

export default Pay;

