import { handleFactorial } from '../utilities/handleFactorial';
import { evaluate, factorial } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    factorial: jest.fn(),
}));

describe('handleFactorial', () => {
    it('should return the factorial of a valid integer expression', () => {
        const prevState = { expression: '5', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockReturnValue(5);
        factorial.mockReturnValue(120);

        const result = handleFactorial(prevState);

        expect(evaluate).toHaveBeenCalledWith('5');
        expect(factorial).toHaveBeenCalledWith(5);
        expect(result).toEqual({
            ...prevState,
            displayValue: '120',
            expression: '120',
            evaluated: true,
            lastAnswer: 5,
        });
    });

    it('should return an error for a non-integer expression', () => {
        const prevState = { expression: '5.5', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockReturnValue(5.5);

        const result = handleFactorial(prevState);

        expect(evaluate).toHaveBeenCalledWith('5.5');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false,
        });
    });

    it('should return an error for a negative integer expression', () => {
        const prevState = { expression: '-3', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockReturnValue(-3);

        const result = handleFactorial(prevState);

        expect(evaluate).toHaveBeenCalledWith('-3');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false,
        });
    });

    it('should return an error if evaluate throws an exception', () => {
        const prevState = { expression: 'invalid', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockImplementation(() => {
            throw new Error('Invalid input');
        });

        const result = handleFactorial(prevState);

        expect(evaluate).toHaveBeenCalledWith('invalid');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false,
        });
    });
});