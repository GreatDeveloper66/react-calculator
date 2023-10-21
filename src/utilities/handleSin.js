export const handleSin = (prevState) => {
    let { displayValue, expression } = prevState;
    if(endsWithNumber(displayValue)) {
        const number = findNumber(displayValue);
        displayValue = Math.sin(number).toString();
        expression = expression.slice(0, -number.length) + displayValue;
    }
    return {
        ...prevState,
        displayValue: displayValue,
        expression: expression
    };
};


function endsWithNumber(displayValue) {
    const regex = /[0-9]$/;
    return regex.test(displayValue);
}

function findNumber(displayValue) {
    const regex = /[0-9]+$/;
    return displayValue.match(regex)[0];
}
