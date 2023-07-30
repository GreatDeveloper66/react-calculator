import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const initialState = {
    displayValue: '0',
    expression: ''
  };

  const [state, setState] = useState(initialState);

  const handleButtonClick = value => {
    setState(prevState => {
      let newDisplayValue = prevState.displayValue;
      let newExpression = prevState.expression;

      switch (value) {
        case 'C':
          // Clear the display and expression
          newDisplayValue = '0';
          newExpression = '';
          break;
        case 'CE':
          // Clear the last character from the display and expression
          newDisplayValue =
            newDisplayValue === 'Error' || newDisplayValue.length <= 1
              ? '0'
              : newDisplayValue.slice(0, -1);
          newExpression = newExpression.slice(0, -1);
          break;
        case '=':
          // Perform calculations
          // Perform calculations
          try {
            if (newExpression.endsWith('Math.sqrt(')) {
              // If the expression ends with 'Math.sqrt(', it means the square root operation is not complete
              newDisplayValue = 'Error';
              newExpression = '';
            } else {
              // Append a closing parenthesis before evaluating to complete any pending square root operation
              if (newExpression.includes('Math.sqrt(')) {
                newExpression += ')';
              }
              newDisplayValue = Function('return ' + newExpression)();
              newExpression = newDisplayValue.toString();
            }
          } catch (error) {
            newDisplayValue = 'Error';
            newExpression = '';
          }
          break;

        case 'DEL':
          // Delete the last character from the display and expression
          newDisplayValue = newDisplayValue.slice(0, -1);
          newExpression = newExpression.slice(0, -1);
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          // Handle operators
          if (endsWithOperator(newExpression)) {
            // Replace the last operator with the new one
            newExpression = newExpression.slice(0, -1) + value;
          } else {
            newExpression += value;
          }
          break;
        case '.':
          // Handle decimal point
          if (!newDisplayValue.includes('.')) {
            newDisplayValue += value;
            newExpression += value;
          }
          break;
        case '':
          // Handle square root
          charSymbol = "&#8730;";

          newDisplay += charSymbol;
          newExpression += 'Math.sqrt(';
          break;
        default:
          // Handle numbers
          if (newDisplayValue === '0' || endsWithOperator(newExpression)) {
            newDisplayValue = value;
          } else {
            newDisplayValue += value;
          }
          newExpression += value;
          break;
      }

      return {
        ...prevState,
        displayValue: newDisplayValue,
        expression: newExpression
      };
    });
  };

  const endsWithOperator = expression => {
    const operators = ['+', '-', '*', '/'];
    return operators.some(operator => expression.endsWith(operator));
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