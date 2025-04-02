import React, { createContext, useState } from 'react';
import { handleC } from './utilities/handleC.js';
import { handleCE } from './utilities/handleCE.js';
import { handleEquals } from './utilities/handleEquals.js';
import { handleDelete } from './utilities/handleDelete.js';
import { handleOperators } from './utilities/handleOperators.js';
import { handlePeriod } from './utilities/handlePeriod.js';
import { handleSquare } from './utilities/handleSquare.js';
import { handleSquareRoot } from './utilities/handleSquareRoot.js';
import { handleSin } from './utilities/handleSin.js';
import { handleCos } from './utilities/handleCos.js';
import { handleTan } from './utilities/handleTan.js';
import { handleLog } from './utilities/handleLog.js';
import { handleln } from './utilities/handleln.js';
import { handleFactorial } from './utilities/handleFactorial.js';
import { handleCubeRoot } from './utilities/handleCubeRoot.js';
import { handleCube } from './utilities/handleCube.js';
import { handleReciprocal } from './utilities/handleReciprocal.js';
import { handleAns } from './utilities/handleAns.js';
import { handleNumbers } from './utilities/handleNumbers.js';
import { handlePi } from './utilities/handlePi.js';
import { handleOpenLeftParen } from './utilities/handleOpenLeftParen.js'; 
import { handleClosedRightParen } from './utilities/handleClosedRightParen.js';


// Create a context for the calculator
// This context will hold the state and functions for the calculator
// It will be used to provide the state and functions to the components that need them
// without having to pass them down through props

export const CalculatorContext = createContext();

/**
 * CalculatorProvider is a React context provider component that manages the state
 * and logic for a calculator application. It provides the current state and a 
 * function to handle button clicks to its children components.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will have access 
 * to the calculator context.
 *
 * @returns {JSX.Element} A context provider component that wraps its children.
 *
 * @property {Object} state - The current state of the calculator.
 * @property {string} state.displayValue - The value currently displayed on the calculator.
 * @property {string} state.expression - The mathematical expression being built.
 * @property {boolean} state.evaluated - A flag indicating if the expression has been evaluated.
 * @property {number|undefined} state.lastAnswer - The last calculated answer, if any.
 *
 * @property {Function} handleButtonClick - A function to handle button clicks on the calculator.
 * @param {string} value - The value of the button clicked.
 */
const CalculatorProvider = ({ children }) => {
  const initialState = {
    displayValue: '0',
    expression: '0',
    evaluated: false,
    lastAnswer: undefined
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
        case 'x^2':
          // Handle square of number
          return handleSquare(prevState);
        case '√':
          return handleSquareRoot(prevState);
        case 'sin':
          // Handle sine of a number
          return handleSin(prevState);
        case 'cos':
          // Handle cosine of a number
          return handleCos(prevState);
        case 'tan':
          // Handle tangent of a number
          return handleTan(prevState);
        case 'log':
          return handleLog(prevState);
        case 'ln':
          return handleln(prevState);
        case 'x!':
          return handleFactorial(prevState);
        case 'x^1/y':
          return handleCubeRoot(prevState);
        case 'x^y':
          return handleCube(prevState);
        case '1/x':
          return handleReciprocal(prevState);
        case 'ANS':
          return handleAns(prevState);
          case '&Pi;':
            return handlePi(prevState);
            case '(':
              return handleOpenLeftParen(prevState);
              case ')':
                return handleClosedRightParen(prevState);
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