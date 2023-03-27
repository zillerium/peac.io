import React, {useState, useContext} from 'react';
import {useQuery, useMutation} from 'react-query';
import {Link, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {CartContext} from './CartContext';
import {Table, Card, Button, Form, Row, Col} from 'react-bootstrap';
import {ProductPage} from './pages/ProductPage';
import {ArrowRight,Search} from 'react-bootstrap-icons';

// import {productsArray} from '../productsStore';
//import ProductCard from '../components/ProductCard';
  //                    {productsArray.map((product, idx) => (
    //                       <ProductCard product={product} />

const Search1 =  () => {
    console.log("rendering");
       const [search,setSearch] = useState("");
       const [searchedData,setSearchedData] = useState([]);
       const cart=useContext(CartContext);

       const searchDB = async (searchVal) => {
          const baseUrl = "https://peacioapi.com:3000/searchDB/"+searchVal; 
          let res = await axios.get(baseUrl);
	       console.log("res");
	       console.log(res.data);
	       setSearchedData(res.data.data[0]);
   	  return res;
       }

//	let res = await searchDB(props.query);
  //      console.log(res.data);
	return  ( 
	<div>
	  <div>
	    <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <Button onClick={()=>searchDB(search)} ><Search  /> </Button>


          </div>
                    <div>
					<div>
					<Table stripod="true"  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Brand</th>
                                                      <th>Part Number</th>
                                                      <th>Details</th>
                                                      <th>Price</th>
                                                      <th>Cart</th>
					         </tr>
					    </thead>
	                        	<tbody>
                        {searchedData.length>0 && searchedData.map((value, key) => {
                                return (
					<tr>
                                 <td>    {value.manName}  </td>
                                 <td>    {value.partDesc}  </td>
					                     <td>            <Link to={{
                                             pathname:`/product/${value.dbKey}`,
                                                           state:{productId: value.dbKey, productPrice: value.partSalePrice}
                                                           }}>{value.partNumber}</Link>
                                                           </td>
                                 <td>    ${value.partSalePrice?.toFixed(2)}  </td>
					<td> <Button sm="6" 
					onClick={()=>cart.addOneToCart(value)
					} 
					className="mx-2">+</Button>
					 <Button sm="6" 
					onClick={()=>cart.removeOneFromCart(value)
					} 
					className="mx-2">-</Button></td>
					</tr>
				)
			})}
		                       </tbody>
                                         </Table>
					</div>
        </div> 						
        </div> 						
	)
}


export default Search1;


