import React, { useState } from 'react';
import Counter from './Components/Counter';
import './App.css';
import { FaArrowRight } from 'react-icons/fa';

function App() {
  const [showCounterPage, setShowCounterPage] = useState(false);

  const handlePageSwitch = () => {
    setShowCounterPage(true);
  };

  return (
    <div className={`app ${showCounterPage ? 'show-counter' : ''}`}>
      {!showCounterPage ? (
        <div className="intro-page" onClick={handlePageSwitch}>
          <div className="intro-content">
            <h1>Counter Application</h1>
            <FaArrowRight className="intro-icon" />
            <p>Click anywhere to start</p>
          </div>
        </div>
      ) : (
        <Counter />
      )}
    </div>
  );
}

export default App;