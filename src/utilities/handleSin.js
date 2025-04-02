import { sin, evaluate } from 'mathjs';

/**
 * Handles the calculation of the sine of the current expression in the calculator.
 *
 * @param {Object} prevState - The previous state of the calculator.
 * @param {string} prevState.expression - The current mathematical expression as a string.
 * @param {string} prevState.displayValue - The current value displayed on the calculator.
 * @param {boolean} prevState.evaluated - Indicates whether the expression has been evaluated.
 * @param {number} prevState.lastAnswer - The last evaluated answer.
 * @returns {Object} The updated state of the calculator after calculating the sine.
 * @throws Will return an error state if the evaluation of the expression fails.
 */
export const handleSin = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        const sinValue = sin(evaluatedValue);
        const displayValue = sinValue.toString();

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
