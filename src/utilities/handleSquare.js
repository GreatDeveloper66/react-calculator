import { endsWithNumber, findNumber } from '../helpers/helperFunctions.js';

export const handleSquare = (prevState) => {
  let { displayValue, expression } = prevState;
    if(endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = Math.pow(number, 2).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    
  
  return {
    ...prevState,
    displayValue: displayValue,
    expression: expression
  };
}



