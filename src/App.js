import React from 'react';
import './App.css';
import CalculatorButtons from './CalculatorButtons.js';
import CalculatorDisplay from './CalculatorDisplay.js';
import CalculatorProvider from './CalculatorContext.js';

const App = () => {
  return (
    <CalculatorProvider>
      <div className="calculator">
        <h1>Calculator</h1>
        <CalculatorDisplay />
        <CalculatorButtons />
      </div>
    </CalculatorProvider>
  );
};

export default App;

