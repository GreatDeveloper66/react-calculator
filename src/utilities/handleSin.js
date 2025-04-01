const math = require("mathjs");
const { sin, evaluate } = math; // Import the sin function and evaluate from mathjs

export const handleSin = (state) => {
  let { displayValue, expression } = state;

  // Prevent applying sine if display is empty or invalid
  if (displayValue === '0' || displayValue === '' || /[\+\-\*\/\^%]/.test(displayValue.slice(-1))) {
    return state;
  }

  // Case 1: Last character is a number → Apply sin to the number
  if (/\d/.test(displayValue.slice(-1))) {
    const match = displayValue.match(/(\d+\.?\d*)$/);
    if (match) {
      const number = match[1];
      const sinValue = sin(parseFloat(number));  // math.js sin expects radians
      return {
        displayValue: displayValue.replace(/(\d+\.?\d*)$/, sinValue.toString()),
        expression: expression.replace(/(\d+\.?\d*)$/, sinValue.toString()),
      };
    }
  }

  // Case 2: If display ends with a closing parenthesis, apply sin to the expression inside
  if (displayValue.slice(-1) === ')') {
    let openIndex = displayValue.lastIndexOf('(');
    if (openIndex !== -1) {
      const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
      const sinValue = sin(evaluate(insideExpr)); // Evaluate the expression inside the parentheses and apply sin
      return {
        displayValue: displayValue.slice(0, openIndex) + sinValue,
        expression: expression.slice(0, openIndex) + sinValue
      };
    }
  }

  // Default case: Do nothing if no valid input
  return state;
};

