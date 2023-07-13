import React, {useState} from 'react';
import './App.css';
import ClassCombo from "./Handsonone/ClassCombo";
import FuncCombo from "./Handsonone/FuncCombo"; 
function App() {
  const[fState , setFState]=useState(false);
  const[cState, setCState]=useState(false);
  console.log(fState);
  return (
    <>
    <h1 class="heading1"> Styling using Functional and Class Component</h1>
   
    <button onClick={()=>setFState(!fState)} class="btn1"> To See Styling is Function Component</button>
    <button onClick={()=>setCState(!cState)} class="btn2" > To See Styling is Class Component</button>
    { fState ? <FuncCombo/>:""}
    { fState && <FuncCombo/>}
    { cState ? <ClassCombo/>:""}
    { cState && <ClassCombo/>}
   
    </>
  );
}

export default App;
