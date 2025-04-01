const math = require("mathjs");
const { pow, evaluate } = math; // Import the pow function and evaluate from mathjs


export const handleSquare = (state) => {
    let { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent squaring an operator or empty display
    if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
        return state;
    }

    // Case 1: Last character is a number → find full number and square it
    if (/\d/.test(lastChar)) {
        const match = displayValue.match(/(\d+\.?\d*)$/);
        if (match) {
            const number = match[1];
            const squared = pow(parseFloat(number), 2);
            return {
                displayValue: displayValue.replace(/(\d+\.?\d*)$/, squared.toString()),
                expression: expression.replace(/(\d+\.?\d*)$/, squared.toString()),
            };
        }
    }

    // Case 2: Last character is a closing parenthesis → square the entire expression inside
    if (lastChar === ")") {
        let openIndex = displayValue.lastIndexOf("(");
        if (openIndex !== -1) {
            const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
            const squared = pow(evaluate(insideExpr), 2); // Evaluate and square
            return {
                displayValue: displayValue.slice(0, openIndex) + squared,
                expression: expression.slice(0, openIndex) + squared,
            };
        }
    }

    // Default: If nothing matches, return unchanged
    return state;
};
