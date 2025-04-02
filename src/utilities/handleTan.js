import { tan, evaluate } from 'mathjs';

/**
 * Handles the calculation of the tangent (tan) of the current expression.
 *
 * @function
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The mathematical expression to evaluate.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} prevState.lastAnswer - The last calculated answer.
 * @returns {Object} The updated state of the calculator.
 * @property {string} displayValue - The result of the tangent calculation or "Error" if an error occurs.
 * @property {string} expression - The updated expression, set to the result of the tangent calculation or empty on error.
 * @property {boolean} evaluated - Indicates whether the expression was successfully evaluated.
 * @property {number} lastAnswer - The evaluated value of the expression before applying the tangent function.
 * @throws Will catch and handle any errors that occur during evaluation or tangent calculation.
 */
export const handleTan = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        const tanValue = tan(evaluatedValue);
        const displayValue = tanValue.toString();

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
