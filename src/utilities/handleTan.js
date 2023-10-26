import helperFunctions from "../helpers/helperFunctions.js";
const { endsWithNumber, findNumber } = helperFunctions;

export const handleTan = (prevState) => {
    let { displayValue, expression } = prevState;
    if(endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = Math.tan(number).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
};


