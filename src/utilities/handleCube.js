import { endsWithNumber, findNumber } from "../helpers/helperFunctions.js";

export const handleCube = (prevState) => {
    let { displayValue, expression } = prevState;
    if (endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = Math.pow(number, 3).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression,
    };
    }