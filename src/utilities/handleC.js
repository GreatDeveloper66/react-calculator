/**
 * Resets the calculator state to its initial values.
 *
 * @param {Object} state - The current state of the calculator (not used in this function).
 * @returns {Object} The updated state with `displayValue` and `expression` reset to "0".
 */
export const handleC = (state) => {
    return {
        displayValue: "0",  // Reset the display to "0"
        expression: "0",     // Reset the expression
    };
};
