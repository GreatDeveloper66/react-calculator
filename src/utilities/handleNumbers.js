/**
 * Handles the logic for appending a number or decimal point to the calculator's display and expression.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The current mathematical expression being built.
 * @param {boolean} state.evaluated - A flag indicating if the last operation was evaluated.
 * @param {string} number - The number or decimal point to be appended.
 * @returns {Object} The updated state of the calculator.
 *
 * The function handles the following cases:
 * 1. If the display is "0" or the last operation was evaluated, replace the display with the new number.
 * 2. If the display ends with a number or a decimal point, append the new number.
 * 3. If the display ends with a right parenthesis or an operator, treat the new number as implied multiplication.
 * 4. If the display ends with a left parenthesis, treat the new number as multiplication.
 * 5. If the input is a decimal point, ensure only one decimal point is allowed per number.
 * 6. If none of the above cases apply, return the unchanged state.
 */
export const handleNumbers = (state, number) => {
    let { displayValue, expression, evaluated } = state;
    const lastChar = displayValue.slice(-1);
  
    // Case 1: If display is "0" or evaluated, replace with number
    if (displayValue === '0' || evaluated) {
      return {
        ...state,
        displayValue: number,
        expression: number,
        evaluated: false,
      };
    }
  
    // Case 2: If display ends with a number or period, simply add the number
    if (/\d/.test(lastChar) || lastChar === '.') {
      return {
        ...state,
        displayValue: displayValue + number,
        expression: expression + number,
      };
    }
  
    // Case 3: If display ends with a right parenthesis or an operator, treat as implied multiplication
    if (lastChar === ')' || /[\+\-\*\/\^%]/.test(lastChar)) {
      return {
        ...state,
        displayValue: displayValue + number,
        expression: expression + number,
      };
    }
  
    // Case 4: If display ends with a left parenthesis, treat it as multiplication
    if (lastChar === '(') {
      return {
        ...state,
        displayValue: displayValue + number,
        expression: expression + number,
      };
    }
  
    // Case 5: Handle decimal points in numbers (only one decimal per number)
    if (number === '.' && !/\./.test(displayValue.split(/[\+\-\*\/\^%]/).pop())) {
      return {
        ...state,
        displayValue: displayValue + number,
        expression: expression + number,
      };
    }
  
    // Default: If none of the above, return unchanged state
    return state;
  };
  