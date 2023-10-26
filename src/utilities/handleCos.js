export const handleCos = (prevState) => {
    let { displayValue, expression } = prevState;
    if(endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = Math.cos(number).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
};

const endsWithNumber = (displayValue) => {
    const regex = /[0-9]$/;
    return regex.test(displayValue);
}

const findNumber = (displayValue) => {
    const regex = /[0-9]+$/;
    return displayValue.match(regex)[0];
}
