import {Link, useMatch, useResolvedPath} from "react-router-dom"
import peacio from './peacio.png';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ArrowRight, WalletFill, Wallet2} from 'react-bootstrap-icons';

const NavBar=() => {
	const cart = useContext(CartContext);

  return <nav className="nav">
      <Link to="/" className="site-title"><img src={peacio} className="img-fluid" /></Link>
      <ul>
		<CustomLink to="/pay" >Pay</CustomLink>
		<CustomLink to="/cart" >Cart</CustomLink>
		<CustomLink to="/addproduct" >Add Product</CustomLink>
		<CustomLink to="/about" >About</CustomLink>
		{cart.walletStatus ? <WalletFill className="ml-4" color="#3FAF6D" /> :
		<WalletFill className="ml-4" color="#E62729" color1="red" title="open"/>}
      </ul>
  </nav>


}

const CustomLink = ({to, children, ...props}) => {
   const path = window.location.pathname;
	const resolvedPath = useResolvedPath (to);
	const isActive = useMatch({ path: resolvedPath.pathname, end:true});
console.log("children = " + children);
console.log("children = " + children);
console.log("props = " + JSON.stringify({...props}));
   return (
      <li className={isActive ? "active" : ""}>
         <Link to={to} {...props}>
             {children}
	 </Link>
      </li>
   )
}

export default NavBar;
