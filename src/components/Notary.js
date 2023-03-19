import {useContext, useEffect} from 'react'
import {ContractContext} from './ContractContext'

function Notary() {

 const  {notary, setNotary   } = useContext(ContractContext);
//
	//const notaries = [{address:'0x9f0BEA7dE67e8Fb333067ed83b468E5082280835'}];
	const notaries = [{address:'0x9f0BEA7dE67e8Fb333067ed83b468E5082280835'}];
        //const [notary, setNotary]=useState({address:''});
	console.log("select notary0000000000000000000000000000000000000000000000000", notary);
	const handleChange=(e)=> {
             const aNotary = notaries.find(n=>n.address===e)
		console.log("kkkkkkkkkmmmm", aNotary);
		setNotary(aNotary);
	}
	useEffect(()=>{
   //        if (notaries.length === 1) {
              setNotary(notaries[0]);
//	   }
	}, [])
	            // value={notary.address} onChange={e=>setNotary(notaries.find(n=>n.address===e.target.value))}>
	            // value={notary.address} onChange={e=>handleChange(e.target.value)}>
  return (
    <div >
          <div> {notaries.length > 1 && (<div><div>Notary</div>
               <select className="custom-select form-control" 
	             value={notary.address} onChange={e=>setNotary(notaries.find(n=>n.address===e.target.value))}>
                    {notaries.map(n => (
                        <option key={n.address} value={n.address} >{n.address}</option>
		    ))}

	       </select></div>)}
	  </div>
	  <b>Notary  {notary.address}</b>
    </div>
  );
}

export default Notary;
