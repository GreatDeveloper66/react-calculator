import { endsWithNumber } from "../helpers/helperFunctions.js";


export const handleOpenLeftParen = (prevState) => {
    let { displayValue, expression } = prevState;
    if (endsWithNumber(expression)) {
        expression = expression + '*('
    } else {
        expression = expression + '(';
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression,
    };
    }