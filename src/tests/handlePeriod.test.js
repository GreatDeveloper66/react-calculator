import { handlePeriod } from '../utilities/handlePeriod';

describe('handlePeriod', () => {
    it('should start fresh with "0." if the previous state was evaluated', () => {
        const prevState = { displayValue: "123", expression: "123", evaluated: true };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual({
            displayValue: "0.",
            expression: "0.",
            evaluated: false,
        });
    });

    it('should prevent multiple periods in the current number', () => {
        const prevState = { displayValue: "12.3", expression: "12.3", evaluated: false };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual(prevState);
    });

    it('should change "0" to "0." when pressing "."', () => {
        const prevState = { displayValue: "0", expression: "0", evaluated: false };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual({
            displayValue: "0.",
            expression: "0.",
            evaluated: false,
        });
    });

    it('should append "0." if no digits have been entered after the last operator', () => {
        const prevState = { displayValue: "12+", expression: "12+", evaluated: false };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual({
            displayValue: "12+0.",
            expression: "12+0.",
            evaluated: false,
        });
    });

    it('should append the period to the current number', () => {
        const prevState = { displayValue: "12", expression: "12", evaluated: false };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual({
            displayValue: "12.",
            expression: "12.",
            evaluated: false,
        });
    });

    it('should handle periods correctly after an operator', () => {
        const prevState = { displayValue: "12+", expression: "12+", evaluated: false };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual({
            displayValue: "12+0.",
            expression: "12+0.",
            evaluated: false,
        });
    });

    it('should handle periods correctly when there is no operator', () => {
        const prevState = { displayValue: "123", expression: "123", evaluated: false };
        const result = handlePeriod(prevState, ".");
        expect(result).toEqual({
            displayValue: "123.",
            expression: "123.",
            evaluated: false,
        });
    });
});