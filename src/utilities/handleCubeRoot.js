import { evaluate, cbrt } from 'mathjs';

/**
 * Handles the calculation of the cube root of the current expression.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The current mathematical expression.
 * @param {string} prevState.displayValue - The value currently displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} prevState.lastAnswer - The last evaluated result.
 * @returns {Object} The updated state of the calculator.
 * @property {string} displayValue - The updated display value after calculating the cube root.
 * @property {string} expression - The updated expression after calculating the cube root.
 * @property {boolean} evaluated - Indicates whether the cube root calculation was successful.
 * @property {number} lastAnswer - The evaluated value before calculating the cube root.
 */
export const handleCubeRoot = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        const cubeRootValue = cbrt(evaluatedValue);
        const displayValue = cubeRootValue.toString();

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
