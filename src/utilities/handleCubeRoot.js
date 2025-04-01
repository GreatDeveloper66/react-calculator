const math = require("mathjs"); // Importing mathjs for mathematical operations
const { evaluate } = math;

export const handleCubeRoot = (state) => {
    let { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent taking the cube root of an operator or empty display
    if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
        return state;
    }

    // Case 1: Last character is a number → find full number and calculate its cube root
    if (/\d/.test(lastChar)) {
        const match = displayValue.match(/(\d+\.?\d*)$/);
        if (match) {
            const number = match[1];
            const cubeRoot = evaluate(parseFloat(number)); // Cube root of the number
            return {
                displayValue: displayValue.replace(/(\d+\.?\d*)$/, cubeRoot.toString()),
                expression: expression.replace(/(\d+\.?\d*)$/, cubeRoot.toString()),
            };
        }
    }

    // Case 2: Last character is a closing parenthesis → cube root of the entire expression inside
    if (lastChar === ")") {
        let openIndex = displayValue.lastIndexOf("(");
        if (openIndex !== -1) {
            const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
            const cubeRoot = evaluate(eval(insideExpr)); // Evaluate and calculate cube root
            return {
                displayValue: displayValue.slice(0, openIndex) + cubeRoot,
                expression: expression.slice(0, openIndex) + cubeRoot,
            };
        }
    }

    // Default: If nothing matches, return unchanged
    return state;
};
