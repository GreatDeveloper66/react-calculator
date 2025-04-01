import { handlePi } from "../utilities/handlePi";
import { pi } from "mathjs";

describe("handlePi", () => {
    it("should prevent consecutive 'π'", () => {
        const state = {
            displayValue: "π",
            expression: "3.141592653589793",
            evaluated: false,
        };
        const result = handlePi(state);
        expect(result).toEqual(state);
    });

    it("should start fresh with 'π' if evaluated is true", () => {
        const state = {
            displayValue: "123",
            expression: "123",
            evaluated: true,
        };
        const result = handlePi(state);
        expect(result).toEqual({
            displayValue: "π",
            expression: pi.toString(),
            evaluated: false,
        });
    });

    it("should replace '0' or empty display with 'π'", () => {
        const state1 = {
            displayValue: "0",
            expression: "",
            evaluated: false,
        };
        const result1 = handlePi(state1);
        expect(result1).toEqual({
            displayValue: "π",
            expression: pi.toString(),
            evaluated: false,
        });

        const state2 = {
            displayValue: "",
            expression: "",
            evaluated: false,
        };
        const result2 = handlePi(state2);
        expect(result2).toEqual({
            displayValue: "π",
            expression: pi.toString(),
            evaluated: false,
        });
    });

    it("should append '×π' and update expression if last character is a number", () => {
        const state = {
            displayValue: "123",
            expression: "123",
            evaluated: false,
        };
        const result = handlePi(state);
        expect(result).toEqual({
            displayValue: "123×π",
            expression: "123*" + pi.toString(),
            evaluated: false,
        });
    });

    it("should append '×π' and update expression if last character is a closing parenthesis", () => {
        const state = {
            displayValue: "123)",
            expression: "123)",
            evaluated: false,
        };
        const result = handlePi(state);
        expect(result).toEqual({
            displayValue: "123)×π",
            expression: "123)*" + pi.toString(),
            evaluated: false,
        });
    });

    it("should append 'π' and update expression otherwise", () => {
        const state = {
            displayValue: "+",
            expression: "+",
            evaluated: false,
        };
        const result = handlePi(state);
        expect(result).toEqual({
            displayValue: "+π",
            expression: "+" + pi.toString(),
            evaluated: false,
        });
    });
});