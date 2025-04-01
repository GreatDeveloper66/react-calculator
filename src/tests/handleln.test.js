import { handleln } from '../utilities/handleln.js';
import { evaluate, log } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    log: jest.fn()
}));

describe('handleLn', () => {
    it('should calculate the natural logarithm of a positive number', () => {
        const prevState = { expression: '10', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockReturnValue(10);
        log.mockReturnValue(2.302585);

        const result = handleln(prevState);

        expect(evaluate).toHaveBeenCalledWith('10');
        expect(log).toHaveBeenCalledWith(10);
        expect(result).toEqual({
            ...prevState,
            displayValue: '2.302585',
            expression: '2.302585',
            evaluated: true,
            lastAnswer: 10
        });
    });

    it('should return an error for non-positive numbers', () => {
        const prevState = { expression: '-5', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockReturnValue(-5);

        const result = handleln(prevState);

        expect(evaluate).toHaveBeenCalledWith('-5');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false
        });
    });

    it('should return an error for invalid expressions', () => {
        const prevState = { expression: 'invalid', displayValue: '', evaluated: false, lastAnswer: null };
        evaluate.mockImplementation(() => {
            throw new Error('Invalid expression');
        });

        const result = handleln(prevState);

        expect(evaluate).toHaveBeenCalledWith('invalid');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false
        });
    });
});