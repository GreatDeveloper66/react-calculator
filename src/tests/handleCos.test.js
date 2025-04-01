import { handleCos } from '../utilities/handleCos';
import { evaluate, cos } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    cos: jest.fn(),
}));

describe('handleCos', () => {
    it('should calculate the cosine of the evaluated expression and update the state', () => {
        const prevState = {
            expression: '0',
            displayValue: '',
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockReturnValue(0); // Mock evaluate to return 0
        cos.mockReturnValue(1); // Mock cos to return 1

        const result = handleCos(prevState);

        expect(evaluate).toHaveBeenCalledWith('0');
        expect(cos).toHaveBeenCalledWith(0);
        expect(result).toEqual({
            ...prevState,
            displayValue: '1',
            expression: '1',
            evaluated: true,
            lastAnswer: 0,
        });
    });

    it('should handle errors and return an error state', () => {
        const prevState = {
            expression: 'invalid',
            displayValue: '',
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockImplementation(() => {
            throw new Error('Invalid expression');
        });

        const result = handleCos(prevState);

        expect(evaluate).toHaveBeenCalledWith('invalid');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false,
        });
    });
});