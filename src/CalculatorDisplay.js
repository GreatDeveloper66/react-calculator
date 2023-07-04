import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorContext.js';

const CalculatorDisplay = () => {
  const { displayValue } = useContext(CalculatorContext);

  return (
    <div className="calculator-display">
      <p>{displayValue}</p>
    </div>
  );
};

export default CalculatorDisplay;
