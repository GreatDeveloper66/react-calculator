import { handleCubeRoot } from '../utilities/handleCubeRoot';
import { evaluate, cbrt } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    cbrt: jest.fn(),
}));

describe('handleCubeRoot', () => {
    it('should correctly calculate the cube root of a valid expression', () => {
        const prevState = {
            expression: '27',
            displayValue: '',
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockReturnValue(27);
        cbrt.mockReturnValue(3);

        const result = handleCubeRoot(prevState);

        expect(evaluate).toHaveBeenCalledWith('27');
        expect(cbrt).toHaveBeenCalledWith(27);
        expect(result).toEqual({
            ...prevState,
            displayValue: '3',
            expression: '3',
            evaluated: true,
            lastAnswer: 27,
        });
    });

    it('should handle invalid expressions gracefully', () => {
        const prevState = {
            expression: 'invalid',
            displayValue: '',
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockImplementation(() => {
            throw new Error('Invalid expression');
        });

        const result = handleCubeRoot(prevState);

        expect(evaluate).toHaveBeenCalledWith('invalid');
        expect(result).toEqual({
            ...prevState,
            displayValue: 'Error',
            expression: '',
            evaluated: false,
        });
    });

    it('should handle zero correctly', () => {
        const prevState = {
            expression: '0',
            displayValue: '',
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockReturnValue(0);
        cbrt.mockReturnValue(0);

        const result = handleCubeRoot(prevState);

        expect(evaluate).toHaveBeenCalledWith('0');
        expect(cbrt).toHaveBeenCalledWith(0);
        expect(result).toEqual({
            ...prevState,
            displayValue: '0',
            expression: '0',
            evaluated: true,
            lastAnswer: 0,
        });
    });
});