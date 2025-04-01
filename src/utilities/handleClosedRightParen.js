import { countUnmatchedLeftParens, endsWithOperator } from "../helpers/helperFunctions.js";

// Handles the ")" button press
export const handleClosedRightParen = (expression) => {
    if (countUnmatchedLeftParens(expression) === 0) return expression; // No unmatched "("
    if (endsWithOperator(expression)) return expression; // Avoids "(5+"
    return expression + ")"; // Otherwise, just append ")"
};
