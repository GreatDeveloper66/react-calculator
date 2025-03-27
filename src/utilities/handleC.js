export const handleC = (prevState) => {
    let { displayValue, expression } = prevState;
    displayValue = '0';
    expression = '0';
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
};