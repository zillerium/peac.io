import React, {useState} from 'react';
import {useQuery, useMutation} from 'react-query';
import {Table} from 'react-bootstrap';
import axios from 'axios';

const Search1 =  () => {
    console.log("rendering");
       const [search,setSearch] = useState("");
       const [searchedData,setSearchedData] = useState([]);

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
            <button onClick={()=>searchDB(search)} >Search </button>
          </div>
                    <div>
					<div>
					<Table stripod  bordered hover>
                                            <thead>
                                                 <tr>
                                                      <th>Brand</th>
                                                      <th>Part Number</th>
                                                      <th>Details</th>
                                                      <th>Price</th>
					         </tr>
					    </thead>
	                        	<tbody>
                        {searchedData.length>0 && searchedData.map((value, key) => {
                                return (
					<tr>
                                 <td>    {value.manName}  </td>
                                 <td>    {value.partNumber}  </td>
                                 <td>    {value.partDesc}  </td>
                                 <td>    ${value.partSalePrice?.toFixed(2)}  </td>
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


