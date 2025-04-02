import { evaluate, log } from 'mathjs';

/**
 * Handles the calculation of the natural logarithm (ln) of the evaluated expression
 * from the previous state. Updates the state with the result or an error if the input
 * is invalid (e.g., non-positive values).
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The current mathematical expression as a string.
 * @param {string} prevState.displayValue - The value currently displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} prevState.lastAnswer - The last evaluated answer.
 * @returns {Object} - The updated state of the calculator.
 * @throws {Error} - Throws an error if the evaluated value is less than or equal to 0.
 */
export const handleln = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        if (evaluatedValue <= 0) throw new Error("Invalid input");
        
        const lnValue = log(evaluatedValue);
        const displayValue = lnValue.toString();

        return {
            ...prevState,
            displayValue: displayValue,
            expression: displayValue,
            evaluated: true,
            lastAnswer: evaluatedValue
        };
    } catch (error) {
        return {
            ...prevState,
            displayValue: "Error",
            expression: "",
            evaluated: false
        };
    }
};
