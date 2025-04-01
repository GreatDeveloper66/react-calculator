import { sin, evaluate } from 'mathjs';

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
