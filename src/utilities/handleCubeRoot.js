import { evaluate, cbrt } from 'mathjs';

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
