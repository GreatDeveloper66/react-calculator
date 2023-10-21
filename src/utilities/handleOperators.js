export const handleOperators = (prevState, value) => {
    let { displayValue, expression } = prevState;

    const endsWithOperator = expression => {
        const operators = ['+', '-', '*', '/'];
        return operators.some(operator => expression.endsWith(operator));
    };

    if (endsWithOperator(expression)) {
        // Replace the last operator with the new one
       expression = expression.slice(0, -1) + value;
    } else {
        expression += value;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
}