/**
 * Handles the "CE" (Clear Entry) functionality for a calculator.
 * 
 * This function updates the calculator's state by removing the last character
 * from both the `displayValue` and `expression`. If the `displayValue` is "0",
 * the state remains unchanged.
 * 
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The current mathematical expression being built.
 * @returns {Object} The updated state with the last character removed from 
 *                   `displayValue` and `expression`, or the original state if 
 *                   `displayValue` is "0".
 */
export const handleCE = (state) => {
    let { displayValue, expression } = state;
  
    // Case 1: If the display is "0", do nothing
    if (displayValue === "0") {
      return state;
    }
  
    // Case 2: Remove the last character from the display and expression
    return {
      displayValue: displayValue.slice(0, -1) || "0", // Remove the last character or reset to "0" if empty
      expression: expression.slice(0, -1) || "0", // Remove the last character or reset to "0" if empty
    };
  };
  