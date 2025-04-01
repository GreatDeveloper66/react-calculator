export const handleOpenLeftParen = (prevState) => {
    const newExpression = prevState.displayValue === "0" ? "(" : prevState.expression + "(";
    const newDisplayValue = prevState.displayValue === "0" ? "(" : prevState.displayValue + "(";

    return {
        ...prevState,
        expression: newExpression,
        displayValue: newDisplayValue,
        evaluated: false
    };
};
