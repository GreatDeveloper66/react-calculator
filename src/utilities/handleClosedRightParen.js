/**
 * Handles the addition of a closing right parenthesis ")" to the expression.
 * Ensures that a closing parenthesis is only added if there is a matching 
 * opening parenthesis "(" in the expression.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The current mathematical expression.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @returns {Object} The updated state with the modified expression and display value.
 * @throws Will catch and handle any errors that occur during the operation.
 */
export const handleClosedRightParen = (prevState) => {
    try {
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
    } catch (e) {
        return {
            displayValue: "Error",
            expression: "",
            evaluated: false,
        };
    }
};
