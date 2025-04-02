import { evaluate, factorial } from 'mathjs';

/**
 * Handles the calculation of the factorial of a given number from the current state.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The current mathematical expression.
 * @param {string} prevState.displayValue - The value currently displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} prevState.lastAnswer - The last calculated answer.
 * @returns {Object} The updated state of the calculator.
 * @throws {Error} Throws an error if the input is not a non-negative integer.
 */
export const handleFactorial = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        if (!Number.isInteger(evaluatedValue) || evaluatedValue < 0) throw new Error("Invalid input");

        const factorialValue = factorial(evaluatedValue);
        const displayValue = factorialValue.toString();

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
