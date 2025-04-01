const math = require('mathjs');
const { cos, evaluate } = math;

export const handleCos = (state) => {
  let { displayValue, expression } = state;

  // Prevent applying cosine if display is empty or invalid
  if (displayValue === '0' || displayValue === '' || /[\+\-\*\/\^%]/.test(displayValue.slice(-1))) {
    return state;
  }

  // Case 1: Last character is a number → Apply cos to the number
  if (/\d/.test(displayValue.slice(-1))) {
    const match = displayValue.match(/(\d+\.?\d*)$/);
    if (match) {
      const number = match[1];
      const cosValue = cos(parseFloat(number));  // math.js cos expects radians
      return {
        displayValue: displayValue.replace(/(\d+\.?\d*)$/, cosValue.toString()),
        expression: expression.replace(/(\d+\.?\d*)$/, cosValue.toString()),
      };
    }
  }

  // Case 2: If display ends with a closing parenthesis, apply cos to the expression inside
  if (displayValue.slice(-1) === ')') {
    let openIndex = displayValue.lastIndexOf('(');
    if (openIndex !== -1) {
      const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
      const cosValue = cos(evaluate(insideExpr)); // Evaluate the expression inside the parentheses and apply cos
      return {
        displayValue: displayValue.slice(0, openIndex) + cosValue,
        expression: expression.slice(0, openIndex) + cosValue
      };
    }
  }

  // Default case: Do nothing if no valid input
  return state;
};
