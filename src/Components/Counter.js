import React, { useState } from 'react';
import './Counter.css';
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app">
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      <div className="counter-container">
        <h1 className="counter-title">React Counter App</h1>
        <div className="counter">
          <span className="counter-display">{count}</span>
        </div>
        <div className="button-container">
          <button className="btn increment" onClick={increment}>
            <FaPlus className="icon" /> Increment
          </button>
          <button className="btn decrement" onClick={decrement}>
            <FaMinus className="icon" /> Decrement
          </button>
          <button className="btn reset" onClick={reset}>
            <FaRedo className="icon" /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
