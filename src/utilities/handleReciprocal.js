import { endsWithNumber, findNumber } from "../helpers/helperFunctions.js";

export const handleReciprocal = (prevState) => {
    let { displayValue, expression } = prevState;
    if (endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = (1 / number).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression,
    };
    }

