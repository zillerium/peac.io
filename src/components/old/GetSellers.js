import { useContext } from 'react';
import { CartContext } from '../CartContext';
import SellerInfoContext from './SellerInfoContext';

function GetSellers() {
  const cart = useContext(CartContext);
  const items = cart.items;
  console.log('----items --', items);

  const calculateSellerInfo = useContext(SellerInfoContext);

  calculateSellerInfo(items);

  return <></>;
}

export default GetSellers;
