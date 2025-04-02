import { pow, evaluate } from "mathjs"; // Import the pow function and evaluate from mathjs


/**
 * Handles the squaring operation for a calculator's state.
 * 
 * This function modifies the `displayValue` and `expression` properties of the 
 * calculator's state based on the current input. It supports squaring a number 
 * or an expression enclosed in parentheses, while preventing invalid operations 
 * such as squaring an operator or an empty display.
 * 
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The full mathematical expression being built.
 * @returns {Object} The updated state with modified `displayValue` and `expression`,
 *                   or the original state if no valid squaring operation is performed.
 */
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
