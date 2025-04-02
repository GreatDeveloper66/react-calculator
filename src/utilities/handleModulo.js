

/**
 * Handles the addition of a modulo (%) operator to the calculator's state.
 *
 * This function ensures that the modulo operator is only added under valid conditions:
 * - It cannot be the first character in the display.
 * - It cannot be repeated consecutively.
 * - It can only be added if the last character is a number or a closing parenthesis.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The current mathematical expression being built.
 * @returns {Object} The updated state with the modulo operator added, or the original state if the operation is invalid.
 */
export const handleModulo = (state) => {
    const { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent % at the start or repeating %
    if (displayValue === "0" || displayValue === "" || lastChar === "%") {
        return state;
    }

    // Add % if the last character is a number or a closing parenthesis
    if (/\d|\)/.test(lastChar)) {
        return {
            displayValue: displayValue + "%",
            expression: expression + "%",
        };
    }

    // Default: If none of the conditions are met, return the state unchanged
    return state;
};
