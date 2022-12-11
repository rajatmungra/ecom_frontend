import axios from 'axios';
import React from 'react'
import Nav from "./Home/Header/Nav/Nav";
import Products from "./Home/Products/Products";

const Home = ({alert="kk"}) => {
 

  if(alert === 'yes'){
    window.alert('Order Successfully placed')
  }
  else if(alert === 'no'){
    window.alert('Order is not placed')
  }
 
  return (
    <div >
        <Nav/>
        <Products/>  
    </div>
  )
}

export default Home