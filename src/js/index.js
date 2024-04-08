//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Carnes from "./component/Carnes";
import Pescados from "./component/Pescados";
import Congelados from "./component/Congelados";
import Lacteos from "./component/Lacteos";
import Verduras from "./component/Verduras";
import NoPerecederos from "./component/NoPerecederos";
import FichaTecnica from "./component/FichaTecnica";
import Footer from "./component/Footer";
import Header from "./component/Header";






//import your own components


//render your react application
ReactDOM.render(
    <div>
       <Header/>
       <FichaTecnica/>      
       
       <Pescados/>   
       <Carnes/>  
       <Verduras/>
       <Lacteos/>
       <NoPerecederos/>
       <Congelados/> 
       <Footer/>
       
    </div>, document.querySelector("#app"));
