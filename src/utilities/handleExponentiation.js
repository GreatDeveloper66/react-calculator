/**
 * Handles the addition of an exponentiation operator ("^") to the calculator's state.
 *
 * This function ensures that the "^" operator is only added to the display and expression
 * if the last character is a number or a closing parenthesis ")". It prevents invalid cases
 * such as starting with "^" or having consecutive "^" operators.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The current mathematical expression being built.
 * @returns {Object} The updated state with the "^" operator added, or the original state
 *                   if the operation is invalid.
 */
export const handleExponentiation = (state) => {
    const { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent starting with "^" and consecutive "^"
    if (displayValue === "0" || displayValue === "" || lastChar === "^") {
        return state; 
    }

    // Allow "^" only if the last character is a number or ")"
    if (/\d|\)/.test(lastChar)) {
        return { 
            displayValue: displayValue + "^", 
            expression: expression + "^" 
        };
    }

    return state; // Ignore invalid cases
};
