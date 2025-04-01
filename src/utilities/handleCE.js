export const handleCE = (state) => {
    let { displayValue, expression } = state;
  
    // Case 1: If the display is "0", do nothing
    if (displayValue === "0") {
      return state;
    }
  
    // Case 2: Remove the last character from the display and expression
    return {
      displayValue: displayValue.slice(0, -1) || "0", // Remove the last character or reset to "0" if empty
      expression: expression.slice(0, -1) || "0", // Remove the last character or reset to "0" if empty
    };
  };
  