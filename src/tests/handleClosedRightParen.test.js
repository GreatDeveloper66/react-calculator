import { handleClosedRightParen } from "../utilities/handleClosedRightParen";

describe("handleClosedRightParen", () => {
    it("should not add ')' if there are no matching '('", () => {
        const prevState = {
            expression: "1+2",
            displayValue: "3",
            evaluated: false
        };
        const result = handleClosedRightParen(prevState);
        expect(result).toEqual(prevState);
    });

    it("should add ')' if there is a matching '('", () => {
        const prevState = {
            expression: "(1+2",
            displayValue: "3",
            evaluated: false
        };
        const result = handleClosedRightParen(prevState);
        expect(result.expression).toBe("(1+2)");
        expect(result.displayValue).toBe("3)");
        expect(result.evaluated).toBe(false);
    });

    

    it("should handle multiple parentheses correctly", () => {
        const prevState = {
            expression: "((1+2)",
            displayValue: "3",
            evaluated: false
        };
        const result = handleClosedRightParen(prevState);
        expect(result.expression).toBe("((1+2))");
        expect(result.displayValue).toBe("3)");
        expect(result.evaluated).toBe(false);
    });

    it("should not modify state if right parentheses count equals left parentheses count", () => {
        const prevState = {
            expression: "(1+2)",
            displayValue: "3",
            evaluated: false
        };
        const result = handleClosedRightParen(prevState);
        expect(result).toEqual(prevState);
    });
});