import "./App.css";
import React, {useState} from "react";

import { Fstcomp0 } from "./components/fstcomp";
// import { Dusra } from "./components/dusra";

import { Teesra } from "./components/teesra";

import { Chhotha } from "./components/chhotha";

import {Bbb} from "./components/Navbar"


import { Panchwa } from "./components/Panchwa";
import { Chhata } from "./components/Chhata";
import { Saatwa } from "./components/Saatwa";
import Newcomp from "./components/newcomp";



function App() {

  // const name="Sahir222222"




const [coun,setCount]=useState(0);

const clickcount=()=>{

console.log("coun", coun)

setCount(coun +3);


}

  return(
  <>
< Bbb /> 
  {/* <h1 className="text-center text-primary"> this and that</h1>

<h1>count: {coun}</h1>
<button onClick={clickcount}>touch me</button> */}

{/* <Newcomp /> */}

  < Fstcomp0 />

  {/* <Dusra /> */}
  <Teesra />
<Chhotha />
  
<Panchwa />

<Chhata />

<Saatwa /> 

  
  </>

);
}

export default App;