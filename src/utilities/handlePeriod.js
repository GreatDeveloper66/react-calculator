export const handlePeriod = (prevState, value) => {
  let { displayValue, expression } = prevState;
    if (!displayValue.includes('.')) {
        displayValue += value;
        expression += value;
      }
      return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
        };
    }