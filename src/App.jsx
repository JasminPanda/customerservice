import {Route,Routes} from "react-router-dom";
 import  "./Styles/Navbar.css";
        
         import Contact from "./Pages/Contact";
         import About from "./Pages/About";
         import Home from "./Layout/Home";
         import Login from "./Pages/Login";
         import header from "./Layout/Header";

         function App() {
           return (
             <>
             
             <div>
               <br/>
             <header>
               
               <strong><img  src="src\photo\logo.png" alt="Online customer service center"/></strong>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button><a href="./Login"><strong>&nbsp; Login&nbsp;</strong> </a></button> 
              &nbsp; &nbsp;
               </header>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <button>  <a href="./Home"><strong>  &nbsp;Home &nbsp;</strong> </a></button>
              &nbsp; &nbsp;&nbsp;
              <button><a href="./About"><strong>&nbsp;About &nbsp;</strong></a></button>
              &nbsp; &nbsp;&nbsp;
              <button>  <a href="./Home"><strong>  &nbsp;Service &nbsp;</strong> </a></button>
              &nbsp; &nbsp;&nbsp;
              <button>  <a href="./Home"><strong>  &nbsp;Ticketing System &nbsp;</strong> </a></button>
              &nbsp; &nbsp;&nbsp;
              <button><a href="./Contact"><strong> &nbsp; Contact Us &nbsp;</strong> </a></button>
              &nbsp; &nbsp;&nbsp;
               </div>
             <div>
             </div>
               <Routes>
                 <Route path="/contact" element={<Contact/>}></Route>
               </Routes>
               <Routes>
                 <Route path="/login" element={<Login/>}></Route>
               </Routes>
               <Routes>
                 <Route path="/home" element={<Home/>}></Route>
               </Routes>
               <Routes>
                 <Route path="/about" element={<About/>}></Route>
               </Routes>
             </>
           );
         }
        
         export default App;
