export const endsWithNumber = (displayValue) => {
    const regex = /[0-9]$/;
    return regex.test(displayValue);
}   

export const findNumber = (displayValue) => {
    const regex = /[0-9]+$/;
    return displayValue.match(regex)[0];
}

export const endsWithOperator = (str) => {
    return str.endsWith('+') || str.endsWith('-') || str.endsWith('*') || str.endsWith('/');
}

export const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

