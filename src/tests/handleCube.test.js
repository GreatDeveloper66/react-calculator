import { handleCube } from "../utilities/handleCube";
import { pow, evaluate } from "mathjs";

jest.mock("mathjs", () => ({
    pow: jest.fn(),
    evaluate: jest.fn(),
}));

describe("handleCube", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return the same state if displayValue is '0'", () => {
        const state = { displayValue: "0", expression: "0" };
        const result = handleCube(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if displayValue is empty", () => {
        const state = { displayValue: "", expression: "" };
        const result = handleCube(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if the last character is an operator", () => {
        const state = { displayValue: "5+", expression: "5+" };
        const result = handleCube(state);
        expect(result).toEqual(state);
    });

    it("should cube the last number in displayValue", () => {
        pow.mockReturnValue(27);
        const state = { displayValue: "3", expression: "3" };
        const result = handleCube(state);
        expect(result).toEqual({ displayValue: "27", expression: "27" });
        expect(pow).toHaveBeenCalledWith(3, 3);
    });

    it("should cube the last floating-point number in displayValue", () => {
        pow.mockReturnValue(8.0);
        const state = { displayValue: "2.0", expression: "2.0" };
        const result = handleCube(state);
        expect(result).toEqual({ displayValue: "8", expression: "8" });
        expect(pow).toHaveBeenCalledWith(2.0, 3);
    });

    it("should cube the expression inside parentheses", () => {
        evaluate.mockReturnValue(2);
        pow.mockReturnValue(8);
        const state = { displayValue: "(2)", expression: "(2)" };
        const result = handleCube(state);
        expect(result).toEqual({ displayValue: "8", expression: "8" });
        expect(evaluate).toHaveBeenCalledWith("2");
        expect(pow).toHaveBeenCalledWith(2, 3);
    });

    it("should return the same state if no match is found", () => {
        const state = { displayValue: "(", expression: "(" };
        const result = handleCube(state);
        expect(result).toEqual(state);
    });
});