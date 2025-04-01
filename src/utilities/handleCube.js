import { pow, evaluate } from "mathjs";

export const handleCube = (state) => {
    let { displayValue, expression } = state;
    const lastChar = displayValue.slice(-1);

    // Prevent cubing an operator or empty display
    if (displayValue === "0" || displayValue === "" || /[\+\-\*\/\^%]/.test(lastChar)) {
        return state;
    }

    // Case 1: Last character is a number → find full number and cube it
    if (/\d/.test(lastChar)) {
        const match = displayValue.match(/(\d+\.?\d*)$/);
        if (match) {
            const number = match[1];
            const cubed = pow(parseFloat(number), 3); // Cube the number
            return {
                displayValue: displayValue.replace(/(\d+\.?\d*)$/, cubed.toString()),
                expression: expression.replace(/(\d+\.?\d*)$/, cubed.toString()),
            };
        }
    }

    // Case 2: Last character is a closing parenthesis → cube the entire expression inside
    if (lastChar === ")") {
        let openIndex = displayValue.lastIndexOf("(");
        if (openIndex !== -1) {
            const insideExpr = displayValue.slice(openIndex + 1, -1); // Extract inside expression
            const cubed = pow(evaluate(insideExpr), 3); // Evaluate and cube
            return {
                displayValue: displayValue.slice(0, openIndex) + cubed,
                expression: expression.slice(0, openIndex) + cubed,
            };
        }
    }

    // Default: If nothing matches, return unchanged
    return state;
};
