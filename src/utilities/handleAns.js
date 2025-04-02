/**
 * Handles the logic for updating the display value with the last stored answer.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {number|undefined} state.lastAnswer - The last calculated answer, if available.
 * @returns {Object} The updated state of the calculator.
 *
 * - Case 1: If the display value is "0", the state remains unchanged.
 * - Case 2: If a lastAnswer is available, it updates the display value to the lastAnswer.
 * - Case 3: If no lastAnswer is available, the state remains unchanged.
 */
export const handleAns = (state) => {
    let { displayValue, lastAnswer } = state;
  
    // Case 1: If display is "0", return the current state
    if (displayValue === "0") {
      return state;
    }
  
    // Case 2: If there's a stored answer (lastAnswer), display it
    if (lastAnswer !== undefined) {
      return {
        ...state,
        displayValue: lastAnswer.toString(),
      };
    }
  
    // Case 3: If no previous answer is stored, return the current state
    return state;
  };
  