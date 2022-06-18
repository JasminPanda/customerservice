import React from 'react';
import { useNavigate } from 'react-router-dom';
 
 const Contact = (props) => {
   let navigate=useNavigate();
   return (
     <div>
       <h1>Contact Page</h1>
       <h2>The below button will take me to About page</h2>
       {/* passing the path to navigate to the navigate metho */}
       <button onClick={()=>navigate("/about")}>Click Me</button>
     </div>
   )
 }
 
 export default Contact