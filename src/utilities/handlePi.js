const math = require("mathjs");
const pi = math.pi; // Get the value of π from mathjs

export const handlePi = (state) => {
  let { displayValue, expression, evaluated } = state;
  const lastChar = displayValue.slice(-1);

  // Prevent consecutive "π"
  if (lastChar === "π") {
    return state;
  }

  // If evaluated, start fresh with π
  if (evaluated) {
    return {
      ...state,
      displayValue: "π",
      expression: pi.toString(),
      evaluated: false,
    };
  }

  // If display is empty or "0", replace with π
  if (displayValue === "0" || displayValue === "") {
    return {
      ...state,
      displayValue: "π",
      expression: pi.toString(),
    };
  }

  // If last character is a number or closing parenthesis, assume multiplication
  if (/\d/.test(lastChar) || lastChar === ')') {
    return {
      ...state,
      displayValue: displayValue + "×π",
      expression: expression + "*" + pi.toString(),
    };
  }

  // Otherwise, just append π
  return {
    ...state,
    displayValue: displayValue + "π",
    expression: expression + pi.toString(),
  };
};
