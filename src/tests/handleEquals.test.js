import { handleEquals } from '../utilities/handleEquals';
import { evaluate } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
}));

describe('handleEquals', () => {
    it('should evaluate a valid expression and update the state', () => {
        const initialState = {
            expression: '2 + 2',
            displayValue: '',
            lastAnswer: null,
            evaluated: false,
        };

        evaluate.mockReturnValue(4);

        const newState = handleEquals(initialState);

        expect(evaluate).toHaveBeenCalledWith('2 + 2');
        expect(newState).toEqual({
            ...initialState,
            displayValue: '4',
            expression: '4',
            lastAnswer: 4,
            evaluated: true,
        });
    });

    it('should handle invalid expressions gracefully', () => {
        const initialState = {
            expression: '2 / 0',
            displayValue: '',
            lastAnswer: null,
            evaluated: false,
        };

        evaluate.mockImplementation(() => {
            throw new Error('Invalid expression');
        });

        const newState = handleEquals(initialState);

        expect(evaluate).toHaveBeenCalledWith('2 / 0');
        expect(newState).toEqual({
            ...initialState,
            displayValue: 'Error',
            expression: '',
            lastAnswer: null,
            evaluated: false,
        });
    });

    it('should handle empty expressions gracefully', () => {
        const initialState = {
            expression: '',
            displayValue: '',
            lastAnswer: null,
            evaluated: false,
        };

        evaluate.mockImplementation(() => {
            throw new Error('Invalid expression');
        });

        const newState = handleEquals(initialState);

        expect(evaluate).toHaveBeenCalledWith('');
        expect(newState).toEqual({
            ...initialState,
            displayValue: 'Error',
            expression: '',
            lastAnswer: null,
            evaluated: false,
        });
    });
});