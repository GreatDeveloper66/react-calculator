import { cos, evaluate } from 'mathjs';

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
