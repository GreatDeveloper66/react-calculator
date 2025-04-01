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
  