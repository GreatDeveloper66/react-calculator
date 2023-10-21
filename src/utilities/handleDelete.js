export const handleDelete = (prevState) => {
    let { displayValue, expression } = prevState;
    displayValue = displayValue.slice(0, -1);
    expression = expression.slice(0, -1);
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
}