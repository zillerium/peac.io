import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Search1 from './Search1.js';
import {useQuery, useMutation} from 'react-query';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import {Container} from 'react-bootstrap';
import {Link, BrowserRouter ,  Routes, Route} from 'react-router-dom';
import Cancel from './pages/Cancel'
import NavBar from './NavBar.js'
import Cart from './pages/Cart.js'
import Store from './pages/Store'
import About from './pages/About'
import ProductPage from './pages/ProductPage'
import AddProduct from './pages/AddProduct'
import Pay from './pages/Pay'
import Success from './pages/Success'
import CartProvider from './CartContext.js'
import './styles.css'
import Wagmitest from './Wagmitest'
function App() {

	const [image, setImage]=useState(false);

	const [firstName, setFirstName]=useState("");
	const [lastName, setLastName]=useState("");

	const [manName, setManName] = useState("");
	const [partNumber, setPartNumber] = useState("");
	const [manPartNumber, setManPartNumber] = useState("");
	const [partOption, setPartOption] = useState("");
	const [partDesc, setPartDesc] = useState("");
	const [partShortDesc, setPartShortDesc] = useState("");
	const [partImgUrl, setPartImgUrl] = useState("");
	const [partTechImgUrl, setPartTechImgUrl] = useState("");
	const [partSalePrice, setPartSalePrice] = useState("");
	const [partManPrice, setPartManPrice] = useState("");
	const [currency, setCurrency] = useState("");
	const [merchantId, setMerchantId] = useState("");
	const [merchantName, setMerchantName] = useState("");
	const [deliveryCharge, setDeliveryCharge] = useState("");
	const [search,setSearch] = useState("");
	const {isLoading, error, data, isFetching, refetch} = useQuery('dogs',
		() => axios ('https://random.dog/woof.json'),
		{
			enabled: false,
		}
		
		);

const Button = () => {
return	  <button onClick={refetch}>Get </button>
}

const PostData = async  (part) => {
	console.log("part");
	console.log(part);
//	let x = {keyword: user.firstName};
	const response = await axios.post("https://peacioapi.com:3000/addPartAPI", part);
//	console.log(x);
//	const response = await fetch("https://peacioapi.com:3000/getDBData", {
  //         method: 'POST',
//	   body: x,
//	headers: {
  //         'Content-type': 'application/json; charset-UTF-8'
//	}
//	})
	return response;


}

const searchDBx = async (searchVal) => {
	console.log("searching ...");
	console.log(searchVal);
//	const baseUrl = "https://peacioapi.com:3000/searchDB/"+searchVal; 
//	let res = await axios.get(baseUrl);
//	console.log(res.data);
}

const {mutate,  isError} = useMutation(PostData, {
	onSuccess: (successData) => {
		console.log("post was done");

           console.log(successData);
	}
})
const ImageDisplay = () => {
return ( data ? <img src={data.data.url}/> : <p></p>);
}
 console.log("render");
 console.log(error);
 console.log(data);
	if (error) return <h1>{error.message}</h1>
	if (isLoading) return <h1>Loading</h1>
		//console.log(data);




  return (
    <div >
	  <CartProvider>
         <Container>
		<NavBar />
	    <NavbarComponent>

	    </NavbarComponent>
                <Routes>
                     <Route index element={<Search1 />} />                    
                     <Route path="succcess" element={<Success />} />                    
                     <Route path="cancel" element={<Cancel />} />     
                     <Route path="/product/:productId" element={<ProductPage />} />
                     <Route path="/addproduct/" element={<AddProduct />} />
                     <Route path="/pay/" element={<Pay />} />
                     <Route path="/about/" element={<About />} />
                     <Route path="/cart/" element={<Cart />} />
	        </Routes>
          <div>
	  </div>
	  </Container>
</CartProvider>

    </div>
  );
}

export default App;
