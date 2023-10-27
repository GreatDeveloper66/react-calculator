export const handlePi = (prevState) => {
    let { displayValue, expression } = prevState;
    if (endsWithNumber(displayValue)) {
        displayValue = Math.PI.toString();
        expression = expression + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression,
    };
    }
    