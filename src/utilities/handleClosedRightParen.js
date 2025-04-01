export const handleClosedRightParen = (prevState) => {
    const { expression, displayValue } = prevState;

    // Count left and right parentheses
    const leftParenCount = (expression.match(/\(/g) || []).length;
    const rightParenCount = (expression.match(/\)/g) || []).length;

    // Prevent adding ")" if there's no matching "("
    if (rightParenCount >= leftParenCount) {
        return prevState;
    }

    const newExpression = displayValue === "0" ? ")" : expression + ")";
    const newDisplayValue = displayValue === "0" ? ")" : displayValue + ")";

    return {
        ...prevState,
        expression: newExpression,
        displayValue: newDisplayValue,
        evaluated: false
    };
};
