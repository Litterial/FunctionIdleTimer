import React,{ useState,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionIdleTimer from './components/FunctionIdleTimer';

function App() {
 

  return (
    <div className="App">
      <FunctionIdleTimer></FunctionIdleTimer>
    </div>
  );
}

export default App;
