import { pow, evaluate } from "mathjs";

/**
 * Handles the cubing operation for a calculator's state.
 *
 * This function modifies the `displayValue` and `expression` properties of the calculator's state
 * by cubing the appropriate number or expression based on the current input.
 *
 * @param {Object} state - The current state of the calculator.
 * @param {string} state.displayValue - The current value displayed on the calculator.
 * @param {string} state.expression - The full mathematical expression being built.
 * @returns {Object} The updated state with the cubed value, or the original state if the operation is invalid.
 *
 * Rules:
 * - If the `displayValue` ends with an operator or is empty, the state is returned unchanged.
 * - If the `displayValue` ends with a number, the last number is cubed.
 * - If the `displayValue` ends with a closing parenthesis, the expression inside the parentheses is evaluated and cubed.
 */
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
