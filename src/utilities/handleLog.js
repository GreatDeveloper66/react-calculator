
import { endsWithNumber, findNumber } from '../helpers/helperFunctions.js';

export const handleLog = (prevState) => {
    let { displayValue, expression } = prevState;
    if(endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = Math.log10(number).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
};
// Path: src/utilities/handleSquare.js
// Compare this snippet from src/utilities/handleSquareRoot.js:
// import { endsWithNumber, findNumber } from '../helpers/helperFunctions.js';