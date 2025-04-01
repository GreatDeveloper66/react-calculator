import { handleModulo } from "../utilities/handleModulo";

describe("handleModulo", () => {
    it("should return the same state if displayValue is '0'", () => {
        const state = { displayValue: "0", expression: "" };
        const result = handleModulo(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if displayValue is empty", () => {
        const state = { displayValue: "", expression: "" };
        const result = handleModulo(state);
        expect(result).toEqual(state);
    });

    it("should return the same state if the last character is '%'", () => {
        const state = { displayValue: "5%", expression: "5%" };
        const result = handleModulo(state);
        expect(result).toEqual(state);
    });

    it("should append '%' to displayValue and expression if the last character is a number", () => {
        const state = { displayValue: "5", expression: "5" };
        const result = handleModulo(state);
        expect(result).toEqual({
            displayValue: "5%",
            expression: "5%",
        });
    });

    it("should append '%' to displayValue and expression if the last character is a closing parenthesis", () => {
        const state = { displayValue: "(5)", expression: "(5)" };
        const result = handleModulo(state);
        expect(result).toEqual({
            displayValue: "(5)%",
            expression: "(5)%",
        });
    });

    it("should return the same state if none of the conditions are met", () => {
        const state = { displayValue: "+", expression: "+" };
        const result = handleModulo(state);
        expect(result).toEqual(state);
    });
});