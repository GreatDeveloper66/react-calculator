import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext.js';

const CalculatorDisplay = () => {
    const { state } = useContext(CalculatorContext);
  
    return (
      <div className="calculator-display">
        <p className="top-display">{state.expression}</p>
        <p className="bottom-display">{state.displayValue}</p>
      </div>
    );
  };
  

export default CalculatorDisplay;
