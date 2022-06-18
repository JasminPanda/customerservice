import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"
import header from './Header';
 
 const Home = (props) => {
    let navigate=useNavigate();
   return (
    <div>
       <h1>&nbsp;ONLINE CUSTOMER <br/> &nbsp;&nbsp;SERVICE CENTER</h1>
       <h2>&nbsp;&nbsp;WE ARE READY TO HELP YOU</h2>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={()=>navigate("/about")}>Get Started</button>
      
  
     
     </div>
   )
 }
 
 export default Home