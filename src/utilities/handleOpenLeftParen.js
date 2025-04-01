import { needsImplicitMultiplication } from "../helpers/helperFunctions.js";


// Handles the "(" button press
export const handleOpenLeftParen = (expression) => {
    if (expression === "0") return "(";
    if (needsImplicitMultiplication(expression)) return expression + "*(";
    return expression + "(";
}
