import { evaluate, log } from 'mathjs';

export const handleln = (prevState) => {
    try {
        const evaluatedValue = evaluate(prevState.expression);
        if (evaluatedValue <= 0) throw new Error("Invalid input");
        
        const lnValue = log(evaluatedValue);
        const displayValue = lnValue.toString();

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
