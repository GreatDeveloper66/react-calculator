import { handleTan } from '../utilities/handleTan';
import { evaluate, tan } from 'mathjs';

jest.mock('mathjs', () => ({
    evaluate: jest.fn(),
    tan: jest.fn()
}));

describe('handleTan', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should calculate the tangent of the evaluated expression and update the state', () => {
        const prevState = {
            expression: "45",
            displayValue: "",
            evaluated: false,
            lastAnswer: null
        };

        evaluate.mockReturnValue(45);
        tan.mockReturnValue(1);

        const result = handleTan(prevState);

        expect(evaluate).toHaveBeenCalledWith("45");
        expect(tan).toHaveBeenCalledWith(45);
        expect(result).toEqual({
            ...prevState,
            displayValue: "1",
            expression: "1",
            evaluated: true,
            lastAnswer: 45
        });
    });

    it('should handle errors and return an error state', () => {
        const prevState = {
            expression: "invalid",
            displayValue: "",
            evaluated: false,
            lastAnswer: null
        };

        evaluate.mockImplementation(() => {
            throw new Error("Invalid expression");
        });

        const result = handleTan(prevState);

        expect(evaluate).toHaveBeenCalledWith("invalid");
        expect(result).toEqual({
            ...prevState,
            displayValue: "Error",
            expression: "",
            evaluated: false
        });
    });
});