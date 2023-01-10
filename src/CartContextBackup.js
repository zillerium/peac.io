import {createContext, useState} from 'react';
import {productsArray, getProductData} from './productsStore';

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

        const addOneToCart = (id) => {
		console.log("xx====");
		console.log(id);
		console.log("xx====");
              const quantity = getProductQuantity(id);
		console.log("ddxx====");
		console.log(quantity);
		console.log("ddxx====");

		if (quantity === 0) {
                     setCartProducts([...cartProducts, {id:id, quantity:1}])
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
 setCartProducts(
     cartProducts =>
	 cartProducts.filter(currentProduct=> {
                        return currentProduct.id != id;
	 })


	 )

}

const removeOneFromCart=(id)=> {
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
	cartProducts.map((cartItem)=>{
                const productData = getProductData(cartItem.id);
		totalCost+=(productData.price*cartItem.quantity);
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
