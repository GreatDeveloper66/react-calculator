const math = require('mathjs');
const { tan, abs, evaluate } = math; // Import the tan function and evaluate from mathjs

export const handleTan = (state) => {
  let { displayValue, expression } = state;

  // Prevent applying tan if display is empty or invalid
  if (displayValue === '0' || displayValue === '' || /[\+\-\*\/\^%]/.test(displayValue.slice(-1))) {
    return state;
  }

  // Case 1: Last character is a number → Apply tan to the number
  if (/\d/.test(displayValue.slice(-1))) {
    const match = displayValue.match(/(\d+\.?\d*)$/);
    if (match) {
      const number = match[1];
      const tanValue = tan(parseFloat(number));  // math.js tan expects radians
      
      // Check for vertical asymptotes (tan is undefined at multiples of π/2)
      if (abs(tanValue) === Infinity) {
        return {
          displayValue: displayValue.replace(/(\d+\.?\d*)$/, 'Infinity'),
          expression: expression.replace(/(\d+\.?\d*)$/, 'Infinity'),
        };
      }
      
      return {
        displayValue: displayValue.replace(/(\d+\.?\d*)$/, tanValue.toString()),
        expression: expression.replace(/(\d+\.?\d*)$/, tanValue.toString()),
      };
    }
  }

  // Case 2: If display ends with a closing parenthesis, apply tan to the expression inside
  if (displayValue.slice(-1) === ')') {
    let openIndex = displayValue.lastIndexOf('(');
    if (openIndex !== -1) {
      const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
      const tanValue = tan(evaluate(insideExpr)); // Evaluate the expression inside the parentheses and apply tan
      
      // Check for vertical asymptotes (tan is undefined at multiples of π/2)
      if (Math.abs(tanValue) === Infinity) {
        return {
          displayValue: displayValue.slice(0, openIndex) + 'Infinity',
          expression: expression.slice(0, openIndex) + 'Infinity',
        };
      }
      
      return {
        displayValue: displayValue.slice(0, openIndex) + tanValue,
        expression: expression.slice(0, openIndex) + tanValue,
      };
    }
  }

  // Default case: Do nothing if no valid input
  return state;
};
