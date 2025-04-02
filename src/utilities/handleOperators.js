/**
 * Handles the addition of operators to the calculator's state.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {string} prevState.expression - The current mathematical expression being built.
 * @param {boolean} prevState.evaluated - Indicates if the previous state was the result of an evaluation.
 * @param {string} operator - The operator to be added to the expression (e.g., "+", "-", "*", "/").
 * @returns {Object} The updated state of the calculator.
 * @returns {string} return.displayValue - The updated value to display on the calculator.
 * @returns {string} return.expression - The updated mathematical expression.
 * @returns {boolean} return.evaluated - Indicates if the expression has been evaluated (always false after this function).
 */
export const handleOperators = (prevState, operator) => {
    let { displayValue, expression, evaluated } = prevState;
  
    // If the previous state was a result of evaluation, start a new expression by appending the operator to the result.
    if (evaluated) {
      evaluated = false;
      return {
        displayValue: displayValue + operator,
        expression: displayValue + operator,
        evaluated: false,
      };
    }
  
    // Get the last character of the displayValue.
    const lastChar = displayValue.slice(-1);
  
    // If the display already ends with an operator, replace it with the new operator.
    if (["+", "-", "*", "/"].includes(lastChar)) {
      return {
        displayValue: displayValue.slice(0, -1) + operator,
        expression: expression.slice(0, -1) + operator,
        evaluated: false,
      };
    }
  
    // Otherwise, append the operator.
    return {
      displayValue: displayValue + operator,
      expression: expression + operator,
      evaluated: false,
    };
  };
  