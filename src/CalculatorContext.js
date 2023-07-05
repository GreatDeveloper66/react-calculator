import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
    const initialState = {
        displayValue: '',
        expression: ''
    };

    const isOperator = value => {
        return value === '+' || value === '-' || value === '*' || value === '/';
        };


    const [state, setState] = useState(initialState);

    const handleButtonClick = value => {
        setState(prevState => {
          let newDisplayValue = prevState.displayValue;
          let newExpression = prevState.expression;
      
          switch (value) {
            case 'C':
              // Clear the display and expression
              newDisplayValue = '';
              newExpression = '';
              break;
            case 'CE':
              if(newDisplayValue === 'Error' || newDisplayValue.length == 1 || newDisplayValue === '') {
                newDisplayValue = '0';
              } else {
                newDisplayValue = newDisplayValue.slice(0, -1);
              }
              if(newExpression === 'Error' || newExpression.length == 1 || newExpression === '') {
                newExpression = '0';
              } else {
                newExpression = newExpression.slice(0, -1);
              }
              break;
            case '=':
              // Perform calculations
              try {
                const result = eval(newExpression);
                newDisplayValue = result.toString();
                newExpression = result.toString();
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
            default:
              // Handle numbers
              if (newDisplayValue === '0' || isOperator(newDisplayValue) || newDisplayValue === 'Error' || endsWithOperator(newExpression)) {
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
    
      
      
      
      const getOperand = expression => {
        const operators = ['+', '-', '*', '/'];
        const expressionParts = expression.split(' ');
      
        for (let i = expressionParts.length - 1; i >= 0; i--) {
          const part = expressionParts[i];
      
          if (part && !operators.includes(part)) {
            return part;
          }
        }
      
        return '';
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