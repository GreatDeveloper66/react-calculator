const endsWithNumber = (displayValue) => {
    const regex = /[0-9]$/;
    return regex.test(displayValue);
}   

const findNumber = (displayValue) => {
    const regex = /[0-9]+$/;
    return displayValue.match(regex)[0];
}

export default helperFunctions = {
    endsWithNumber: endsWithNumber,
    findNumber: findNumber
}