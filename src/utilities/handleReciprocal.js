const math = require("mathjs");
const evaluate = math.evaluate; // Import the evaluate function from mathjs

export const handleReciprocal = (state) => {
    let { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent reciprocal when display is empty or ends with an operator
    if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
        return state;
    }

    // Case 1: Last character is a number → find full number and take the reciprocal
    if (/\d/.test(lastChar)) {
        const match = displayValue.match(/(\d+\.?\d*)$/);
        if (match) {
            const number = match[1];
            const reciprocal = 1 / parseFloat(number);
            return {
                displayValue: displayValue.replace(/(\d+\.?\d*)$/, reciprocal.toString()),
                expression: expression.replace(/(\d+\.?\d*)$/, reciprocal.toString()),
            };
        }
    }

    // Case 2: Last character is a closing parenthesis → take reciprocal of the entire expression inside
    if (lastChar === ")") {
        let openIndex = displayValue.lastIndexOf("(");
        if (openIndex !== -1) {
            const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
            const result = evaluate(insideExpr); // Evaluate expression
            if (result === 0) {
                return state; // Return state without modification for division by zero
            }
            const reciprocal = 1 / result;
            return {
                displayValue: displayValue.slice(0, openIndex) + reciprocal,
                expression: expression.slice(0, openIndex) + reciprocal,
            };
        }
    }

    // Default: Return the same state if no applicable number or expression is found
    return state;
};
