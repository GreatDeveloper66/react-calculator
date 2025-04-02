/**
 * Handles the logic for appending an open parenthesis "(" to the calculator's expression and display value.
 * If the current display value is "0", it replaces it with "("; otherwise, it appends "(" to the existing values.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {string} prevState.expression - The current mathematical expression being built.
 * @param {boolean} prevState.evaluated - Indicates whether the last operation was evaluated.
 * @returns {Object} The updated state with the new expression, display value, and evaluated flag set to false.
 * @throws Will catch and handle any errors that occur during the operation.
 */
export const handleOpenLeftParen = (prevState) => {
    try {
        const newExpression = prevState.displayValue === "0" ? "(" : prevState.expression + "(";
        const newDisplayValue = prevState.displayValue === "0" ? "(" : prevState.displayValue + "(";
    
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
