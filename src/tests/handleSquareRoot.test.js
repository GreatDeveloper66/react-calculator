import { handleSquareRoot } from "../utilities/handleSquareRoot";
import { sqrt, evaluate } from "mathjs";

jest.mock("mathjs", () => ({
    sqrt: jest.fn(),
    evaluate: jest.fn(),
}));

describe("handleSquareRoot", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return the same state if displayValue is '0'", () => {
        const state = { displayValue: "0", expression: "0" };
        const result = handleSquareRoot(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if displayValue is empty", () => {
        const state = { displayValue: "", expression: "" };
        const result = handleSquareRoot(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if the last character is an operator", () => {
        const state = { displayValue: "5+", expression: "5+" };
        const result = handleSquareRoot(state);
        expect(result).toEqual(state);
    });

    it("should calculate the square root of the last number in displayValue", () => {
        sqrt.mockReturnValue(3);
        const state = { displayValue: "9", expression: "9" };
        const result = handleSquareRoot(state);
        expect(result).toEqual({ displayValue: "3", expression: "3" });
        expect(sqrt).toHaveBeenCalledWith(9);
    });

    it("should return the same state if square root of the number is NaN", () => {
        sqrt.mockReturnValue(NaN);
        const state = { displayValue: "-9", expression: "-9" };
        const result = handleSquareRoot(state);
        expect(result).toEqual(state);
    });

    it("should calculate the square root of the expression inside parentheses", () => {
        sqrt.mockReturnValue(2);
        evaluate.mockReturnValue(4);
        const state = { displayValue: "(4)", expression: "(4)" };
        const result = handleSquareRoot(state);
        expect(result).toEqual({ displayValue: "2", expression: "2" });
        expect(evaluate).toHaveBeenCalledWith("4");
        expect(sqrt).toHaveBeenCalledWith(4);
    });

    it("should return the same state if evaluating the expression inside parentheses throws an error", () => {
        evaluate.mockImplementation(() => {
            throw new Error("Invalid expression");
        });
        const state = { displayValue: "(4+)", expression: "(4+)" };
        const result = handleSquareRoot(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if no conditions are met", () => {
        const state = { displayValue: "abc", expression: "abc" };
        const result = handleSquareRoot(state);
        expect(result).toEqual(state);
    });
});