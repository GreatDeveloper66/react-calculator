import { cos, evaluate } from 'mathjs';

/**
 * Handles the calculation of the cosine of the current expression in the calculator's state.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The mathematical expression to evaluate.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} [prevState.lastAnswer] - The last evaluated answer (if any).
 * @returns {Object} The updated state of the calculator after computing the cosine.
 * @throws {Error} If the evaluation of the expression fails.
 */
export const handleCos = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        const cosValue = cos(evaluatedValue);
        const displayValue = cosValue.toString();

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
