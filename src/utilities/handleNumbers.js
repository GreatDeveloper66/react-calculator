import { endsWithOperator, endsWithLeftParen } from '../helpers/helperFunctions.js';

export const handleNumbers = (prevState, value) => {
    let { displayValue, expression } = prevState;
    if (displayValue === '0') {
        displayValue = value;
        expression = value;
    } else if(endsWithOperator(expression) || endsWithLeftParen(expression)){
        displayValue = value;
        expression += value;
    }
    else {
        displayValue += value;
        expression += value;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
}


