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
  