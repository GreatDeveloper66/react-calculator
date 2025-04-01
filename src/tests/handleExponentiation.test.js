import { handleExponentiation } from '../utilities/handleExponentiation';

describe('handleExponentiation', () => {
    it('should prevent starting with "^"', () => {
        const state = { displayValue: "", expression: "" };
        const result = handleExponentiation(state);
        expect(result).toEqual(state);
    });

    it('should prevent consecutive "^"', () => {
        const state = { displayValue: "2^", expression: "2^" };
        const result = handleExponentiation(state);
        expect(result).toEqual(state);
    });

    it('should allow "^" if the last character is a number', () => {
        const state = { displayValue: "2", expression: "2" };
        const result = handleExponentiation(state);
        expect(result).toEqual({
            displayValue: "2^",
            expression: "2^"
        });
    });

    it('should allow "^" if the last character is ")"', () => {
        const state = { displayValue: "2)", expression: "2)" };
        const result = handleExponentiation(state);
        expect(result).toEqual({
            displayValue: "2)^",
            expression: "2)^"
        });
    });

    it('should ignore invalid cases where the last character is not a number or ")"', () => {
        const state = { displayValue: "2+", expression: "2+" };
        const result = handleExponentiation(state);
        expect(result).toEqual(state);
    });
});