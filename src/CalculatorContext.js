import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

const CalculatorProvider = ({ children }) => {
  const initialState = {
    displayValue: '0',
    answer: ''
  };

  const [state, setState] = useState(initialState);

  const handleButtonClick = value => {
    // Update the state based on the button value
    // Perform calculations, update displayValue and answer accordingly
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