import { handleDelete } from '../utilities/handleDelete';

describe('handleDelete', () => {
    it('should return the same state if displayValue is "0"', () => {
        const state = { displayValue: "0", expression: "0" };
        const result = handleDelete(state);
        expect(result).toEqual(state);
    });

    it('should return the same state if displayValue is an empty string', () => {
        const state = { displayValue: "", expression: "" };
        const result = handleDelete(state);
        expect(result).toEqual(state);
    });

    it('should remove the last character from displayValue and expression', () => {
        const state = { displayValue: "123", expression: "123+" };
        const result = handleDelete(state);
        expect(result).toEqual({ displayValue: "12", expression: "123" });
    });

    it('should reset displayValue and expression to "0" if displayValue becomes empty after deletion', () => {
        const state = { displayValue: "1", expression: "1" };
        const result = handleDelete(state);
        expect(result).toEqual({ displayValue: "0", expression: "0" });
    });

    it('should handle complex expressions correctly', () => {
        const state = { displayValue: "45", expression: "45*3" };
        const result = handleDelete(state);
        expect(result).toEqual({ displayValue: "4", expression: "45*3".slice(0, -1) });
    });
});