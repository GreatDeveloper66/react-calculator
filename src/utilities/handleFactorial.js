import { endsWithNumber, findNumber, factorial } from "../helpers/helperFunctions.js";

export const handleFactorial = prevState => {
    let { displayValue, expression } = prevState;
    if (endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = factorial(number).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
    }