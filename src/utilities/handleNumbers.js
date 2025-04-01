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
  