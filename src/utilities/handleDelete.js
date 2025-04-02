/**
 * Handles the deletion of the last character from the calculator's display and expression.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The current mathematical expression being built.
 * @returns {Object} The updated state after handling the delete operation.
 */
export const handleDelete = (state) => {
    let { displayValue, expression } = state;
  
    // If the display is "0", nothing to delete
    if (displayValue === "0" || displayValue === "") {
      return state;
    }
  
    // Remove the last character from the display and expression
    const updatedDisplay = displayValue.slice(0, -1);
    const updatedExpression = expression.slice(0, -1);
  
    // If the display becomes empty after deleting, reset to "0"
    if (updatedDisplay === "") {
      return {
        ...state,
        displayValue: "0",
        expression: "0",
      };
    }
  
    return {
      ...state,
      displayValue: updatedDisplay,
      expression: updatedExpression,
    };
  };
  