

export const handleModulo = (state) => {
    const { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent % at the start or repeating %
    if (displayValue === "0" || displayValue === "" || lastChar === "%") {
        return state;
    }

    // Add % if the last character is a number or a closing parenthesis
    if (/\d|\)/.test(lastChar)) {
        return {
            displayValue: displayValue + "%",
            expression: expression + "%",
        };
    }

    // Default: If none of the conditions are met, return the state unchanged
    return state;
};
