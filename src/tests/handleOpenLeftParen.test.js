import { handleOpenLeftParen } from "../utilities/handleOpenLeftParen";

describe("handleOpenLeftParen", () => {
    it("should add '(' to an empty expression and set displayValue to '(' when displayValue is '0'", () => {
        const prevState = {
            displayValue: "0",
            expression: "",
            evaluated: true
        };

        const result = handleOpenLeftParen(prevState);

        expect(result.expression).toBe("(");
        expect(result.displayValue).toBe("(");
        expect(result.evaluated).toBe(false);
    });

    it("should append '(' to the existing expression and displayValue when displayValue is not '0'", () => {
        const prevState = {
            displayValue: "5",
            expression: "5",
            evaluated: true
        };

        const result = handleOpenLeftParen(prevState);

        expect(result.expression).toBe("5(");
        expect(result.displayValue).toBe("5(");
        expect(result.evaluated).toBe(false);
    });

    it("should handle appending '(' to a complex expression", () => {
        const prevState = {
            displayValue: "5+3",
            expression: "5+3",
            evaluated: true
        };

        const result = handleOpenLeftParen(prevState);

        expect(result.expression).toBe("5+3(");
        expect(result.displayValue).toBe("5+3(");
        expect(result.evaluated).toBe(false);
    });
});