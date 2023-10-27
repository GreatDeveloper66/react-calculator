export const handleAns = (prevState) => {
    let { displayValue, expression } = prevState;
    try {
        if (expression.endsWith('Math.sqrt(')) {
          // If the expression ends with 'Math.sqrt(', it means the square root operation is not complete
          displayValue = 'Error';
          expression = '';
        } else {
          // Append a closing parenthesis before evaluating to complete any pending square root operation
          if (expression.includes('Math.sqrt(')) {
            expression += ')';
          }
          let result = Function('return ' + expression)().toString();
          displayValue = result;
          expression = result;
        }
      } catch (error) {
        displayValue = 'Error';
        expression = '';
      }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
}