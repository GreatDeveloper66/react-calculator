import { handleClosedRightParen } from "../utilities/handleClosedRightParen.js";
import { countUnmatchedLeftParens, endsWithOperator } from "../helpers/helperFunctions.js";

// Mock the helper functions
jest.mock("../helpers/helperFunctions.js", () => ({
    countUnmatchedLeftParens: jest.fn(),
    endsWithOperator: jest.fn(),
}));


describe("handleClosedRightParen", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return the expression unchanged if there are no unmatched '('", () => {
        countUnmatchedLeftParens.mockReturnValue(0);
        const expression = "5+3";
        const result = handleClosedRightParen(expression);
        expect(result).toBe(expression);
        expect(countUnmatchedLeftParens).toHaveBeenCalledWith(expression);
        expect(endsWithOperator).not.toHaveBeenCalled();
    });

    it("should return the expression unchanged if it ends with an operator", () => {
        countUnmatchedLeftParens.mockReturnValue(1);
        endsWithOperator.mockReturnValue(true);
        const expression = "5+";
        const result = handleClosedRightParen(expression);
        expect(result).toBe(expression);
        expect(countUnmatchedLeftParens).toHaveBeenCalledWith(expression);
        expect(endsWithOperator).toHaveBeenCalledWith(expression);
    });

    it("should append ')' to the expression if there are unmatched '(' and it does not end with an operator", () => {
        countUnmatchedLeftParens.mockReturnValue(1);
        endsWithOperator.mockReturnValue(false);
        const expression = "5+3(";
        const result = handleClosedRightParen(expression);
        expect(result).toBe(expression + ")");
        expect(countUnmatchedLeftParens).toHaveBeenCalledWith(expression);
        expect(endsWithOperator).toHaveBeenCalledWith(expression);
    });
});