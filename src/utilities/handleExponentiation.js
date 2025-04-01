export const handleExponentiation = (state) => {
    const { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent starting with "^" and consecutive "^"
    if (displayValue === "0" || displayValue === "" || lastChar === "^") {
        return state; 
    }

    // Allow "^" only if the last character is a number or ")"
    if (/\d|\)/.test(lastChar)) {
        return { 
            displayValue: displayValue + "^", 
            expression: expression + "^" 
        };
    }

    return state; // Ignore invalid cases
};
