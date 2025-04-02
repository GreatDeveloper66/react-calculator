import { pi } from "mathjs";
// Importing pi constant from mathjs

/**
 * Handles the insertion of the mathematical constant π (pi) into the calculator's state.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The mathematical expression being built.
 * @param {boolean} state.evaluated - Indicates if the last operation was evaluated.
 * @returns {Object} The updated state of the calculator after handling π.
 *
 * The function performs the following:
 * - Prevents consecutive "π" from being added.
 * - If the last operation was evaluated, starts fresh with "π".
 * - Replaces "0" or an empty display with "π".
 * - Assumes multiplication if the last character is a number or a closing parenthesis.
 * - Appends "π" to the display and expression otherwise.
 */
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
