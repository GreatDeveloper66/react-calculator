export const handleCE = (prevState) => {
    let { displayValue, expression } = prevState;
    displayValue =
        displayValue === 'Error' || displayValue.length <= 1
            ? '0'
            : displayValue.slice(0, -1);
    expression = expression.slice(0, -1);
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
}