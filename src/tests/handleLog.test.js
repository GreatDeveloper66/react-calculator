import { handleLog } from '../utilities/handleLog';
import { evaluate, log10 } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    log10: jest.fn()
}));

describe('handleLn', () => {
    it('should return the correct log10 value for a valid expression', () => {
        const prevState = {
            expression: '100',
            displayValue: '',
            evaluated: false,
            lastAnswer: null
        };

        evaluate.mockReturnValue(100);
        log10.mockReturnValue(2);

        const result = handleLog(prevState);

        expect(evaluate).toHaveBeenCalledWith('100');
        expect(log10).toHaveBeenCalledWith(100);
        expect(result).toEqual({
            ...prevState,
            displayValue: '2',
            expression: '2',
            evaluated: true,
            lastAnswer: 100
        });
    });

    it('should return an error state for invalid input (non-positive value)', () => {
        const prevState = {
            expression: '-10',
            displayValue: '',
            evaluated: false,
            lastAnswer: null
        };

        evaluate.mockReturnValue(-10);

        const result = handleLog(prevState);

        expect(evaluate).toHaveBeenCalledWith('-10');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false
        });
    });

    it('should return an error state if evaluate throws an error', () => {
        const prevState = {
            expression: 'invalid',
            displayValue: '',
            evaluated: false,
            lastAnswer: null
        };

        evaluate.mockImplementation(() => {
            throw new Error('Invalid expression');
        });

        const result = handleLog(prevState);

        expect(evaluate).toHaveBeenCalledWith('invalid');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false
        });
    });
});