/**
 * Handles the logic for appending a period (".") to the calculator's display and expression.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {string} prevState.expression - The full mathematical expression being constructed.
 * @param {boolean} prevState.evaluated - Indicates whether the previous expression was evaluated.
 * @param {string} value - The value to append (expected to be ".").
 * @returns {Object} - The updated state of the calculator.
 * @returns {string} return.displayValue - The updated value to display on the calculator.
 * @returns {string} return.expression - The updated mathematical expression.
 * @returns {boolean} return.evaluated - Indicates whether the expression has been evaluated.
 */
export const handlePeriod = (prevState, value) => {
  const { displayValue, expression, evaluated } = prevState;
  
  // If the previous state was evaluated, start fresh with "0."
  if (evaluated) {
    return {
      displayValue: "0.",
      expression: "0.",
      evaluated: false,
    };
  }
  
  // Identify the current number being entered.
  // This can be done by extracting the portion after the last operator.
  const lastOperatorIndex = Math.max(
    displayValue.lastIndexOf("+"),
    displayValue.lastIndexOf("-"),
    displayValue.lastIndexOf("*"),
    displayValue.lastIndexOf("/")
  );
  const currentNumber = lastOperatorIndex === -1 
    ? displayValue 
    : displayValue.slice(lastOperatorIndex + 1);
  
  // Prevent multiple periods in the current number.
  if (currentNumber.includes(".")) {
    return prevState;
  }
  
  // If displayValue is "0", pressing "." should change it to "0."
  if (displayValue === "0") {
    return {
      displayValue: "0.",
      expression: "0.",
      evaluated: false,
    };
  }

  // If no digits have been entered after the last operator, default to "0."
if (currentNumber === "") {
  return {
    displayValue: displayValue + "0.",
    expression: expression + "0.",
    evaluated: false,
  };
}
  
  // Otherwise, append the period.
  return {
    displayValue: displayValue + value,
    expression: expression + value,
    evaluated: false,
  };
};
