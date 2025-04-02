import { sqrt, evaluate } from "mathjs";
// Import the sqrt function and evaluate from mathjs

/**
 * Handles the square root operation for a calculator's state.
 *
 * This function processes the current `displayValue` and `expression` in the calculator's state
 * to compute the square root of a number or an expression, depending on the context.
 * It ensures that invalid operations (e.g., square root of an operator or negative number) 
 * do not modify the state.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The full mathematical expression being evaluated.
 * @returns {Object} The updated state with the square root operation applied, or the original state if invalid.
 * @throws Will catch and handle any errors that occur during calculation.
 */
export const handleSquareRoot = (state) => {
  let { displayValue, expression } = state;
  const lastChar = displayValue.slice(-1);

  // Prevent taking the square root of an operator or empty display
  if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
      return state;
  }

  // Case 1: Last character is a number → find full number and calculate its square root
  if (/\d/.test(lastChar)) {
     try {
        const match = displayValue.match(/(\d+\.?\d*)$/);
        if (match) {
            const number = match[1];
            const squareRoot = sqrt(parseFloat(number));
            // If the result is NaN (negative number), return unchanged state
            if (isNaN(squareRoot)) {
                return state; // You can handle this as an error state if desired
            }
            return {
                displayValue: displayValue.replace(/(\d+\.?\d*)$/, squareRoot.toString()),
                expression: expression.replace(/(\d+\.?\d*)$/, squareRoot.toString()),
            };
        }
     } catch (e) {
        return {
            displayValue: "Error",
            expression: "",
            evaluated: false,
        }
    }
  }

  // Case 2: Last character is a closing parenthesis → square root of the entire expression inside
  if (lastChar === ")") {
      let openIndex = displayValue.lastIndexOf("(");
      if (openIndex !== -1) {
          const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
          try {
              const squareRoot = sqrt(evaluate(insideExpr)); // Evaluate and take square root
              // If result is NaN (negative number), return unchanged state
              if (isNaN(squareRoot)) {
                  return state; // You can handle this as an error state if desired
              }
              return {
                  displayValue: displayValue.slice(0, openIndex) + squareRoot,
                  expression: expression.slice(0, openIndex) + squareRoot,
              };
          } catch (e) {
              return state; // Error during evaluation, return unchanged state
          }
      }
  }

  // Default: If nothing matches, return unchanged
  return state;
  };
