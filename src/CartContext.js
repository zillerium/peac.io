import {createContext, useState} from 'react';
import { getProductData} from './productsStore';
import {SignClient } from '@walletconnect/sign-client';
import { Web3Modal } from "@web3modal/standalone";
export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
	createClient: () => {},
	signClient: {},
	createWeb3Modal: () => {},
	handleConnect: () => {},
	handleDisconnect: () => {},
	closeModal: () => {},
	web3Modal: {},
	accounts: {},
	sessions: {},
	walletStatus: {},
	show: {},
})

export const CartProvider = ({children}) => {
console.log("carttttttttttttttttttttttcart" );
console.log("carttttttttttttttttttttttcart" );
console.log("carttttttttttttttttttttttcart" );
	console.log(children);
	const [cartProducts, setCartProducts] = useState([]);
        const   [signClient, setSignClient] = useState(null);
        const   [show, setShow] = useState({});
        const   [web3Modal, setWeb3Modal] = useState({});
        const	[sessions, setSessions] = useState({});
        const	[walletStatus, setWalletStatus] = useState(false);
        const	[accounts, setAccounts] = useState([]);
        const	[txhash, setTxhash] = useState([]);

//{id:1, quantity: 2
//
//

const closeModal=() =>{
	console.log("set show-------");
	console.log(show);
 setShow(false);
}

const handleDisconnect=async()=>{
  try {
    await signClient.disconnect({
       topic: sessions.topic,
            code: 6000,
            message: "user disconnected"
    });
          reset();
  } catch(e) {

  }
}

const reset=()=> {
  setAccounts([]);
  setSessions([]);
}



const createWeb3Modal =  () => {
	console.log("111111");
   const web3Modal1 =  new Web3Modal({
                projectId: process.env.REACT_APP_PROJECT_ID,
        standaloneChains:[ "eip155:5"]
   })
	console.log("2222222111111");
	console.log(web3Modal1);
   setWeb3Modal(web3Modal1);
	console.log("333333333333333332222222111111");
	console.log(web3Modal1);
	console.log("444444444333333333333333332222222111111");
	console.log(web3Modal);

}

const handleConnect = async()=> {
        if (!signClient) throw Error("cannot connect - sign client is unconnected");
        try {
           const proposalNamespace = {
               eip155: {
                       chains: ["eip155:5"],
                       methods: ["eth_sendTransaction"],
                       events: ["connect", "disconnect"]
               }
           };
                const {uri, approval}  = await signClient.connect({
                   requiredNamespaces: proposalNamespace
                })
                console.log('uri', uri);
                if (uri){
                    web3Modal.openModal({uri})
                        const sessionNamespace = await approval()
                    console.log(sessionNamespace);
                        onSessionConnect(sessionNamespace);
                        web3Modal.closeModal();
                }
        } catch (e) {
            console.log(e);
        }
}

const onSessionConnect=async(session) => {

        if (!session) throw Error("no session");
        try {
            setSessions(session);
            setAccounts(session.namespaces.eip155.accounts[0].slice(9));
	    setWalletStatus(true);
        } catch(e) {
           console.log(e);
        }

}

const subscribeToEvents = async (client) => {
    if (!client) throw Error("no client");
        try {
           client.on("session_delete", ()=>{
               console.log("user disconnected their wallet session");
                reset();
           })
        } catch(e) {
 console.log(e);
        }

}



const createClient = async () => {
	try {
           const client = await SignClient.init({
                projectId: process.env.REACT_APP_PROJECT_ID
	   })
	   console.log(client);
     	   setSignClient(client);
		    await subscribeToEvents(client);

	} catch (e) {
           console.log(e);
	}
}

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
		const merchantName = props.merchantName;

		console.log("props  xx====");
		console.log(props);
		console.log(id);
		console.log("xx====");
              const quantity = getProductQuantity(id);
		console.log("ddxx====");
		console.log(quantity);
		console.log("ddxx====");

		if (quantity === 0) {
                     setCartProducts([...cartProducts, {id:id, seller: merchantName, title: title, quantity:1, price: price}])
		} else {
                     setCartProducts(
                           cartProducts.map(product=>
                                  product.id === id ? {...product, quantity:product.quantity +1 } 
				   : product
			   )
		     )
		}
		console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb====");
		console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb====");
		console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb====");
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
	  createClient,
	  signClient: signClient,
	  createWeb3Modal,
	  handleConnect,
	  handleDisconnect,
	  closeModal,
   	  web3Modal: web3Modal,
   	  accounts: accounts,
	  sessions: sessions,
	  show: show,
}
		return (
                     <CartContext.Provider value={contextValue}>
                         {children}
		     </CartContext.Provider>
		)

}

export default CartProvider;
