import { tan, evaluate } from 'mathjs';

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
