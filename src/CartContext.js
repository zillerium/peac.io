import {createContext, useState} from 'react';
import { getProductData} from './productsStore';

export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {}
})

export const CartProvider = ({children}) => {

	const [cartProducts, setCartProducts] = useState([]);

//{id:1, quantity: 2
//
//
        const getProductQuantity = (id) => {
              const quantity = cartProducts.find(product=>product.id===id)?.quantity;

		console.log("ddxx11====");
		console.log(quantity);
		console.log("ddxx11====");
	      if (quantity === undefined) {
                   return 0;
	      }
		return quantity;
	}

        const addOneToCart = (props) => {
		const id = props.dbKey;
		const price = props.partSalePrice;
		const title = props.partShortDesc;

		console.log("props  xx====");
		console.log(props);
		console.log(id);
		console.log("xx====");
              const quantity = getProductQuantity(id);
		console.log("ddxx====");
		console.log(quantity);
		console.log("ddxx====");

		if (quantity === 0) {
                     setCartProducts([...cartProducts, {id:id, quantity:1, title:title, price: price}])
		} else {
                     setCartProducts(
                           cartProducts.map(product=>
                                  product.id === id ? {...product, quantity:product.quantity +1 } 
				   : product
			   )
		     )
		}
		console.log("====");
		console.log(cartProducts);
		console.log("====");
	}

const deleteFromCart=(id)=> {
	console.log("cartProducts99999999999999999999999999999999999990000000000000000000000000000000000000000000000000000000000");
	console.log(id);
    const cartProducts1 = cartProducts.filter(currentProduct=> currentProduct.id != id)


	setCartProducts(cartProducts1);
	console.log("cartProducts0000000000000000000000000000000000000000000000000000000000");
	console.log(cartProducts1);
	console.log(id);
	console.log(cartProducts);

}

const removeOneFromCart=(props)=> {
	const id = props.dbKey;
    const quantity = getProductQuantity(id);

	if (quantity == 1) {
		deleteFromCart(id);
	} else {
             
                     setCartProducts(
                           cartProducts.map(product=>
                                  product.id === id ? {...product, quantity:product.quantity -1 } 
				   : product
			   )
		     )
	}
}

const getTotalCost=()=> {
   let totalCost = 0;
//	cartProducts.map((cartItem)=>{
 //               const productData = getProductData(cartItem.id);
//		totalCost+=(productData.partPrice*cartItem.quantity);
//	})
	cartProducts.map((cartItem)=> {
                      totalCost+=(cartItem.price*cartItem.quantity);
	})
	return totalCost;
}

	const contextValue = {
            items: cartProducts,
		getProductQuantity,
  	  addOneToCart,
	  removeOneFromCart,
	  deleteFromCart,
	  getTotalCost,
	}
		return (
                     <CartContext.Provider value={contextValue}>
                         {children}
		     </CartContext.Provider>
		)

}

export default CartProvider;
