import Form from './MainForm/Form';
import { useState } from 'react';
import './App.css';
import Item from './Products/Products';
import React from 'react';
import Products from './Products/Products';
function App() {
  const [objs,setObjs] = useState([])


  const fetchItemfromForm=(obj)=>{
    setObjs((prev)=>{
      if(prev.length>0){
        return [...prev,obj]

      }else{
        return [obj]
      }
      
    })

  }
  return (
    <React.Fragment>
    
    <Form getItem={fetchItemfromForm}/>

    <Products items={objs}/>
    </React.Fragment>
  )
  
}

export default App;
