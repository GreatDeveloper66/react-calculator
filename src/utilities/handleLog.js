import { evaluate, log10 } from 'mathjs';

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
