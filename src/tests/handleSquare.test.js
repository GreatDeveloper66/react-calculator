import { handleSquare } from "../utilities/handleSquare";
import { pow, evaluate } from "mathjs";

jest.mock("mathjs", () => ({
    pow: jest.fn(),
    evaluate: jest.fn(),
}));

describe("handleSquare", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return the same state if displayValue is '0'", () => {
        const state = { displayValue: "0", expression: "0" };
        const result = handleSquare(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if displayValue is empty", () => {
        const state = { displayValue: "", expression: "" };
        const result = handleSquare(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if the last character is an operator", () => {
        const state = { displayValue: "5+", expression: "5+" };
        const result = handleSquare(state);
        expect(result).toEqual(state);
    });

    it("should square the last number in displayValue", () => {
        pow.mockReturnValue(25);
        const state = { displayValue: "5", expression: "5" };
        const result = handleSquare(state);
        expect(result).toEqual({ displayValue: "25", expression: "25" });
        expect(pow).toHaveBeenCalledWith(5, 2);
    });

    it("should square the last number in a longer displayValue", () => {
        pow.mockReturnValue(16);
        const state = { displayValue: "3+4", expression: "3+4" };
        const result = handleSquare(state);
        expect(result).toEqual({ displayValue: "3+16", expression: "3+16" });
        expect(pow).toHaveBeenCalledWith(4, 2);
    });

    it("should square the expression inside parentheses", () => {
        evaluate.mockReturnValue(3);
        pow.mockReturnValue(9);
        const state = { displayValue: "(3)", expression: "(3)" };
        const result = handleSquare(state);
        expect(result).toEqual({ displayValue: "9", expression: "9" });
        expect(evaluate).toHaveBeenCalledWith("3");
        expect(pow).toHaveBeenCalledWith(3, 2);
    });

    it("should square the expression inside parentheses in a longer displayValue", () => {
        evaluate.mockReturnValue(2);
        pow.mockReturnValue(4);
        const state = { displayValue: "5+(2)", expression: "5+(2)" };
        const result = handleSquare(state);
        expect(result).toEqual({ displayValue: "5+4", expression: "5+4" });
        expect(evaluate).toHaveBeenCalledWith("2");
        expect(pow).toHaveBeenCalledWith(2, 2);
    });

    it("should return the same state if no valid case matches", () => {
        const state = { displayValue: "5+", expression: "5+" };
        const result = handleSquare(state);
        expect(result).toEqual(state);
    });
});