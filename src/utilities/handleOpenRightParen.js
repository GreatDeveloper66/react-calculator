import { endsWithNumber } from "../helpers/helperFunctions.js";

export const handleOpenRightParen = (prevState) => {
    let { displayValue, expression } = prevState;
    expression = expression + ')';
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression,
    };
    }