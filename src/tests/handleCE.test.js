import { handleCE } from '../utilities/handleCE';

describe('handleCE', () => {
    it('should return the same state if displayValue is "0"', () => {
        const state = { displayValue: "0", expression: "0" };
        const result = handleCE(state);
        expect(result).toEqual(state);
    });

    it('should remove the last character from displayValue and expression', () => {
        const state = { displayValue: "123", expression: "123+" };
        const result = handleCE(state);
        expect(result).toEqual({ displayValue: "12", expression: "123" });
    });

    it('should reset displayValue and expression to "0" if they become empty', () => {
        const state = { displayValue: "1", expression: "1" };
        const result = handleCE(state);
        expect(result).toEqual({ displayValue: "0", expression: "0" });
    });

    it('should handle cases where displayValue or expression is already empty', () => {
        const state = { displayValue: "", expression: "" };
        const result = handleCE(state);
        expect(result).toEqual({ displayValue: "0", expression: "0" });
    });
});