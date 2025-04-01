const math = require('mathjs'); // Importing mathjs for mathematical operations
const { log10, evaluate } = math; // Importing log10 function from mathjs

export const handleln = (state) => {
    let { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Case 1: Prevent log operation if the display is "0" or empty
    if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
        return state;
    }

    // Case 2: Last character is a number → calculate log
    if (/\d/.test(lastChar)) {
        const match = displayValue.match(/(\d+\.?\d*)$/); // Match last number
        if (match) {
            const number = match[1];
            if (parseFloat(number) > 0) {
                const logValue = log(parseFloat(number));
                return {
                    displayValue: displayValue.replace(/(\d+\.?\d*)$/, logValue.toString()),
                    expression: expression.replace(/(\d+\.?\d*)$/, logValue.toString()),
                };
            } else {
                // Handle log of non-positive numbers (log of 0 or negative is invalid)
                return state; // Or you can display an error message
            }
        }
    }

    // Case 3: Last character is a closing parenthesis → calculate log of expression inside parentheses
    if (lastChar === ")") {
        let openIndex = displayValue.lastIndexOf("(");
        if (openIndex !== -1) {
            const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
            try {
                const evaluated = evaluate(insideExpr); // Evaluate the expression
                if (evaluated > 0) {
                    const logValue = log10(evaluated); // Calculate log
                    return {
                        displayValue: displayValue.slice(0, openIndex) + logValue.toString(),
                        expression: expression.slice(0, openIndex) + logValue.toString(),
                    };
                }
            } catch (error) {
                // Handle invalid expressions (e.g., invalid syntax inside parentheses)
                return state;
            }
        }
    }

    // Default: If nothing matches, return unchanged
    return state;
};

