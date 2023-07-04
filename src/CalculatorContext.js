import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
    const initialState = {
        displayValue: '',
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
                case '=':
                    // Perform calculations
                    try {
                        const result = eval(newExpression);
                        newExpression = result.toString();
                        newDisplayValue = result.toString(); // Set the current number as display value
                    } catch (error) {
                        // Handle calculation errors
                        newDisplayValue = 'Error';
                        newExpression = '';
                    }
                    // ...logic for '=' case as shown above...
                    break;
                case 'DEL':
                    // Delete the last character from the display and expression
                    newDisplayValue = newDisplayValue.slice(0, -1);
                    newExpression = newExpression.slice(0, -1);
                    break;
                default:
                    // Update the display and expression with the button value
                    newDisplayValue = prevState.displayValue === '0' ? value : newDisplayValue + value;
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