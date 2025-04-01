import { handleReciprocal } from "../utilities/handleReciprocal";
import { evaluate } from "mathjs";

jest.mock("mathjs", () => ({
    evaluate: jest.fn(),
}));

describe("handleReciprocal", () => {
    it("should return the same state if displayValue is '0'", () => {
        const state = { displayValue: "0", expression: "0" };
        const result = handleReciprocal(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if displayValue is empty", () => {
        const state = { displayValue: "", expression: "" };
        const result = handleReciprocal(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if displayValue ends with an operator", () => {
        const state = { displayValue: "5+", expression: "5+" };
        const result = handleReciprocal(state);
        expect(result).toEqual(state);
    });

    it("should calculate the reciprocal of the last number in displayValue", () => {
        const state = { displayValue: "5", expression: "5" };
        const result = handleReciprocal(state);
        expect(result).toEqual({
            displayValue: "0.2",
            expression: "0.2",
        });
    });

    it("should calculate the reciprocal of a decimal number", () => {
        const state = { displayValue: "0.5", expression: "0.5" };
        const result = handleReciprocal(state);
        expect(result).toEqual({
            displayValue: "2",
            expression: "2",
        });
    });

    it("should calculate the reciprocal of the expression inside parentheses", () => {
        evaluate.mockReturnValue(4); // Mock the result of evaluate
        const state = { displayValue: "(4)", expression: "(4)" };
        const result = handleReciprocal(state);
        expect(result).toEqual({
            displayValue: "0.25",
            expression: "0.25",
        });
        expect(evaluate).toHaveBeenCalledWith("4");
    });

    it("should return the same state if the expression inside parentheses evaluates to 0", () => {
        evaluate.mockReturnValue(0); // Mock the result of evaluate
        const state = { displayValue: "(0)", expression: "(0)" };
        const result = handleReciprocal(state);
        expect(result).toEqual(state);
        expect(evaluate).toHaveBeenCalledWith("0");
    });

    it("should handle complex expressions inside parentheses", () => {
        evaluate.mockReturnValue(2); // Mock the result of evaluate
        const state = { displayValue: "(1+1)", expression: "(1+1)" };
        const result = handleReciprocal(state);
        expect(result).toEqual({
            displayValue: "0.5",
            expression: "0.5",
        });
        expect(evaluate).toHaveBeenCalledWith("1+1");
    });

    it("should return the same state if no applicable number or expression is found", () => {
        const state = { displayValue: "abc", expression: "abc" };
        const result = handleReciprocal(state);
        expect(result).toEqual(state);
    });
});