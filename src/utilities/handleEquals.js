import { evaluate } from 'mathjs'; // Importing evaluate function from mathjs

export const handleEquals = (state) => {
  let { expression } = state;

  try {
    // Evaluate the current expression
    const result = evaluate(expression);

    // Store the result for the "ANS" button
    return {
      ...state,
      displayValue: result.toString(),  // Show the result on the display
      expression: result.toString(),   // Optionally reset expression to the result
      lastAnswer: result,              // Store result for "ANS"
      evaluated: true,                 // Mark that evaluation has occurred
    };
  } catch (error) {
    // Handle invalid expressions gracefully
    return {
      ...state,
      displayValue: 'Error',  // Show error message on the display
      expression: '',        // Clear the expression to indicate an error
      lastAnswer: null,      // Clear previous answer
      evaluated: false,      // Mark that the expression wasn't successfully evaluated
    };
  }
};
