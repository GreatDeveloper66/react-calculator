export const handleC = (prevState) => {
    let { displayValue, expression } = prevState;
    displayValue = '0';
    expression = '';
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
};