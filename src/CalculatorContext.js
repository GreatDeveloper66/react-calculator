import React, { createContext, useState } from 'react';
import { handleC } from './utilities/handleC.js';
import { handleCE } from './utilities/handleCE.js';
import { handleDelete } from './utilities/handleDelete.js';
import { handleEquals } from './utilities/handleEquals.js';
import { handleNumbers } from './utilities/handleNumbers.js';
import { handleOperators } from './utilities/handleOperators.js';
import { handlePeriod } from './utilities/handlePeriod.js';
//import { handleSquareRoot } from './utilities/handleSquareRoot';



export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const initialState = {
    displayValue: '0',
    expression: ''
  };

  const [state, setState] = useState(initialState);

  const handleButtonClick = value => {
    setState(prevState => {
      
      switch (value) {
        case 'C':
          // Clear the display and expression
          return handleC(prevState);
        case 'CE':
          // Clear the last character from the display and expression
          return handleCE(prevState);
        case '=':
          // Perform calculations
          // Perform calculations
          return handleEquals(prevState);
        case 'DEL':
          // Delete the last character from the display and expression
          return handleDelete(prevState);
        case '+':
        case '-':
        case '*':
        case '/':
          // Handle operators
          return handleOperators(prevState, value);
        case '.':
          // Handle decimal point
          return handlePeriod(prevState, value);
        case '':
          // Handle square root
          charSymbol = "&#8730;";

          newDisplayValue += charSymbol;
          newExpression += 'Math.sqrt(';
          break;
        default:
          // Handle numbers
          return handleNumbers(prevState, value);
      }
    });
  };



  const contextValue = {
    state,
    handleButtonClick
  };

  return (
    <CalculatorContext.Provider value={contextValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;