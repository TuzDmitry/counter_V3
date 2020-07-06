import React from 'react';
import './App.css';
import { APIservice } from './api/api';
import CounterBox from "./components/CounterBox";



function App() {
  let a=3;
  return (
    <div className="App">
<button onClick={()=>{APIservice.updateCounterStartValue(a)}}>Click me!</button>
        <div className="container">
            <CounterBox/>
        </div>
    </div>
  );
}



export default App;
