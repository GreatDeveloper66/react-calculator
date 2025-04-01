import { handleNumbers } from '../utilities/handleNumbers';

describe('handleNumbers', () => {
    it('should replace displayValue and expression with the number if displayValue is "0"', () => {
        const state = { displayValue: '0', expression: '0', evaluated: false };
        const result = handleNumbers(state, '5');
        expect(result).toEqual({
            displayValue: '5',
            expression: '5',
            evaluated: false,
        });
    });

    it('should replace displayValue and expression with the number if evaluated is true', () => {
        const state = { displayValue: '123', expression: '123', evaluated: true };
        const result = handleNumbers(state, '7');
        expect(result).toEqual({
            displayValue: '7',
            expression: '7',
            evaluated: false,
        });
    });

    it('should append the number to displayValue and expression if the last character is a digit', () => {
        const state = { displayValue: '12', expression: '12', evaluated: false };
        const result = handleNumbers(state, '3');
        expect(result).toEqual({
            displayValue: '123',
            expression: '123',
            evaluated: false,
        });
    });

    it('should append the number to displayValue and expression if the last character is a period', () => {
        const state = { displayValue: '12.', expression: '12.', evaluated: false };
        const result = handleNumbers(state, '3');
        expect(result).toEqual({
            displayValue: '12.3',
            expression: '12.3',
            evaluated: false,
        });
    });

    it('should append the number to displayValue and expression if the last character is a right parenthesis', () => {
        const state = { displayValue: '12)', expression: '12)', evaluated: false };
        const result = handleNumbers(state, '3');
        expect(result).toEqual({
            displayValue: '12)3',
            expression: '12)3',
            evaluated: false,
        });
    });

    it('should append the number to displayValue and expression if the last character is an operator', () => {
        const state = { displayValue: '12+', expression: '12+', evaluated: false };
        const result = handleNumbers(state, '3');
        expect(result).toEqual({
            displayValue: '12+3',
            expression: '12+3',
            evaluated: false,
        });
    });

    it('should append the number to displayValue and expression if the last character is a left parenthesis', () => {
        const state = { displayValue: '(12', expression: '(12', evaluated: false };
        const result = handleNumbers(state, '3');
        expect(result).toEqual({
            displayValue: '(123',
            expression: '(123',
            evaluated: false,
        });
    });

    it('should append a decimal point if it does not already exist in the current number', () => {
        const state = { displayValue: '12', expression: '12', evaluated: false };
        const result = handleNumbers(state, '.');
        expect(result).toEqual({
            displayValue: '12.',
            expression: '12.',
            evaluated: false,
        });
    });
});
// Add more test cases as needed to cover all scenarios
