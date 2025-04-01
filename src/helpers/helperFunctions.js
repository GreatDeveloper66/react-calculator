export const endsWithNumber = (displayValue) => {
    const regex = /[0-9]$/;
    return regex.test(displayValue);
}   

export const findNumber = (displayValue) => {
    const regex = /(\d+(\.\d+)?)$/;
    const match = displayValue.match(regex);
    return match ? match[0] : null;
}


export const endsWithOperator = (str) => {
    return str.endsWith('+') || str.endsWith('-') || str.endsWith('*') || str.endsWith('/');
}

export const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return null; // Factorial is not defined for negative numbers
    }
    if (n === 1 || n === 2) {
        return n;
    }
    if (n > 2) {
        return n * factorial(n - 1);
    }
    // If n is a decimal number, return null or handle it as per your requirement
    return n * factorial(n - 1);
}

export const endsWithLeftParen = (str) => {
    return str.endsWith('(');
}

export const handleExpression = (expression, value) => {
    if (endsWithNumber(expression)) {
        return expression + value;
    } else if (endsWithOperator(expression)) {
        return expression.slice(0, -1) + value;
    } else {
        return expression + value;
    }
}

export const countUnmatchedLeftParens = (expression) =>{
    let count = 0;
    for (let char of expression) {
        if (char === "(") count++;
        else if (char === ")") count--;
    }
    return count > 0; // True if unmatched "(" exists
}


export const needsImplicitMultiplication = (expression) =>{
    return /[\d)]$/.test(expression); // Ends with a number or ")"
}







