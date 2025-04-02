import { evaluate } from 'mathjs'; // Importing evaluate function from mathjs

/**
 * Handles the evaluation of a mathematical expression in the calculator's state.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.expression - The mathematical expression to evaluate.
 * @param {string} [state.displayValue] - The current value displayed on the calculator.
 * @param {number|null} [state.lastAnswer] - The last evaluated result, used for the "ANS" button.
 * @param {boolean} [state.evaluated] - Indicates whether the expression has been evaluated.
 * @returns {Object} The updated state of the calculator after evaluation.
 * @property {string} displayValue - The result of the evaluation or an error message.
 * @property {string} expression - The updated expression, typically the result or cleared on error.
 * @property {number|null} lastAnswer - The result of the evaluation or null on error.
 * @property {boolean} evaluated - Indicates whether the evaluation was successful.
 */
export const handleEquals = (state) => {
  let { expression } = state;

  try {
    // Evaluate the current expression
    const result = evaluate(expression);

    // Store the result for the "ANS" button
    return {
      ...state,
      displayValue: result.toString(),  // Show the result on the display
      expression: result.toString(),   // Optionally reset expression to the result
      lastAnswer: result,              // Store result for "ANS"
      evaluated: true,                 // Mark that evaluation has occurred
    };
  } catch (error) {
    // Handle invalid expressions gracefully
    return {
      ...state,
      displayValue: 'Error',  // Show error message on the display
      expression: '',        // Clear the expression to indicate an error
      lastAnswer: null,      // Clear previous answer
      evaluated: false,      // Mark that the expression wasn't successfully evaluated
    };
  }
};
