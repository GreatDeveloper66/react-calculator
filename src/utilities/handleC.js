

export const handleC = (prevState,value) => {
    let newDisplayValue = '0';
    let newExpression = '';
    return {
        ...prevState,
        displayValue: newDisplayValue,
        expression: newExpression
    };
};