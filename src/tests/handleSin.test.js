import { handleSin } from '../utilities/handleSin';
import { evaluate, sin } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    sin: jest.fn(),
}));

describe('handleSin', () => {
    it('should correctly calculate the sine of the evaluated expression', () => {
        const prevState = {
            expression: "30",
            displayValue: "",
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockReturnValue(30);
        sin.mockReturnValue(0.5);

        const result = handleSin(prevState);

        expect(evaluate).toHaveBeenCalledWith("30");
        expect(sin).toHaveBeenCalledWith(30);
        expect(result).toEqual({
            ...prevState,
            displayValue: "0.5",
            expression: "0.5",
            evaluated: true,
            lastAnswer: 30,
        });
    });

    it('should handle errors and return an error state', () => {
        const prevState = {
            expression: "invalid",
            displayValue: "",
            evaluated: false,
            lastAnswer: null,
        };

        evaluate.mockImplementation(() => {
            throw new Error("Invalid expression");
        });

        const result = handleSin(prevState);

        expect(result).toEqual({
            ...prevState,
            displayValue: "Error",
            expression: "",
            evaluated: false,
        });
    });
});