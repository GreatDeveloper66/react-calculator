import { evaluate, log10 } from 'mathjs';

/**
 * Handles the calculation of the logarithm (base 10) of the evaluated expression.
 * Updates the state with the result or an error if the input is invalid.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The mathematical expression to evaluate.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} prevState.lastAnswer - The last calculated answer.
 * @returns {Object} The updated state of the calculator.
 * @throws {Error} If the evaluated value is less than or equal to 0.
 */
export const handleLog = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        if (evaluatedValue <= 0) throw new Error("Invalid input");
        
        const logValue = log10(evaluatedValue);
        const displayValue = logValue.toString();

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
