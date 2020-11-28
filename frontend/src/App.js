import React, {useState,  useEffect} from 'react';
import Axios from 'axios';
import './App.css';


function App() {

   //const [productName, setProductName] = useState('');
  const [productList, setProductList] = useState([]);

  useEffect(() =>{
    Axios.get('http://localhost:3001/product/get').then((response =>{
      setProductList(response.data)
     
    }))

  }, []) 

  return (
    <div className="App">
      <h1> Sallve Store</h1>

      <div>
        {productList.map((val)=>{
           return <h1>
             Nome: {val.name}
           </h1>
           
        })}
      </div>  
      Hello World
    </div>
  );
}

export default App;
