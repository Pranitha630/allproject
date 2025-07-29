
import './App.css';
//import ParentProp from './Components/ParentProp';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FormUseSt from './FormUseSt';
//import ExampleFormUs from './ExampleFornUS';
import FormUseSt from './FormUseSt';
import { BrowserRouter, Route, Routes } from "react-router"
//import HookTask3 from './Components/HookTask3';
import WElcomePageForm from './Components/WElcomePageForm';
//import UseStateHook from './Components/UseStateHook';
// import HookStateTAsk from './Components/HookStateTAsk';
// import Hooktask2 from './Components/Hooktask2';
// import HookTask3 from './Components/HookTask3';
// import HookTask4 from './Components/HookTask4';
// import Hooktask5 from './Components/Hooktask5';
// import { useState } from 'react';
// import Hooktask7 from './Components/Hooktask7';
// import HookTask8 from './Components/HookTask8';
// import Hooktask9 from './Components/Hooktask9';


function App() {
  
  return (
    <div className='App' >
      {/* <ParentProp /> */}
      {/* <UseStateHook /> */}
      {/* <h1>Q1</h1>
     <HookStateTAsk />
     <h1>Q2</h1>
     <Hooktask2 />
     <h1>Q3</h1>
     <HookTask3 />
     <h1>Q4</h1>
     <HookTask4 />
     <h2>Q5</h2>
     <Hooktask5 />
     <button onClick={()=>setChangeWhite(!isWhite)}>backChange</button>
     <h1>Q7</h1>
     <Hooktask7 />
     <h1>Q8</h1>
     <HookTask8 />
     <h1>Q9</h1>
     <Hooktask9 /> */}

    <BrowserRouter>
    
    <Routes>
      <Route path='' element={<FormUseSt />}/>
      <Route path='/welcome' element={<WElcomePageForm></WElcomePageForm>}></Route>
    </Routes>
    </BrowserRouter> 

     {/* <ExampleFormUs />*/}
    
    </div>
  );
}

export default App;
