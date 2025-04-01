import { evaluate, factorial } from 'mathjs';

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
