
import './App.css';
//import ParentProp from './Components/ParentProp';
import 'bootstrap/dist/css/bootstrap.min.css';
//import UseStateHook from './Components/UseStateHook';
import HookStateTAsk from './Components/HookStateTAsk';
import Hooktask2 from './Components/Hooktask2';
import HookTask3 from './Components/HookTask3';
import HookTask4 from './Components/HookTask4';


function App() {
  return (
    <div className="App">
      {/* <ParentProp /> */}
      {/* <UseStateHook /> */}
      <h1>Q1</h1>
     <HookStateTAsk />
     <h1>Q2</h1>
     <Hooktask2 />
     <h1>Q3</h1>
     <HookTask3 />
     <h1>Q4</h1>
     <HookTask4 />
    </div>
  );
}

export default App;
