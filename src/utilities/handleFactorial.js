import { factorial } from "../helpers/helperFunctions.js";

export const handleFactorial = (state) => {
    let { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);
  
    // Prevent factorial on an operator or empty display
    if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
      return state;
    }
  
    // Case 1: Last character is a number → find full number and calculate factorial
    if (/\d/.test(lastChar)) {
      const match = displayValue.match(/(\d+\.?\d*)$/);
      if (match) {
        const number = match[1];
        const numInt = parseInt(number, 10);
        
        // Ensure number is a non-negative integer
        if (numInt < 0) {
          return state; // Factorial is undefined for negative numbers
        }
  
        // Calculate factorial
        const factorialResult = factorial(numInt);
        return {
          displayValue: displayValue.replace(/(\d+\.?\d*)$/, factorialResult.toString()),
          expression: expression.replace(/(\d+\.?\d*)$/, factorialResult.toString()),
        };
      }
    }
  
    // Case 2: Last character is a closing parenthesis → factorial of the expression inside
    if (lastChar === ")") {
      let openIndex = displayValue.lastIndexOf("(");
      if (openIndex !== -1) {
        const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
        const evaluated = math.evaluate(insideExpr); // Evaluate expression inside parentheses
        const factorialResult = factorial(evaluated);
        return {
          displayValue: displayValue.slice(0, openIndex) + factorialResult,
          expression: expression.slice(0, openIndex) + factorialResult,
        };
      }
    }
  
    // Default: If nothing matches, return unchanged
    return state;
  };
  
