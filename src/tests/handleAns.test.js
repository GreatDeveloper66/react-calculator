//write tests for handleAns.js using jest framework
import { handleAns } from '../utilities/handleAns.js';

describe('handleAns', () => {
    it('should return the current state if displayValue is "0"', () => {
        const initialState = { displayValue: "0", lastAnswer: 42 };
        const result = handleAns(initialState);
        expect(result).toBe(initialState);
    });

    it('should update displayValue to lastAnswer if lastAnswer is defined', () => {
        const initialState = { displayValue: "123", lastAnswer: 42 };
        const expectedState = { displayValue: "42", lastAnswer: 42 };
        const result = handleAns(initialState);
        expect(result).toEqual(expectedState);
    });

    it('should return the current state if no previous answer is stored', () => {
        const initialState = { displayValue: "456", lastAnswer: undefined };
        const result = handleAns(initialState);
        expect(result).toBe(initialState);
    });

    it('should not mutate the original state', () => {
        const initialState = { displayValue: "789", lastAnswer: 100 };
        const result = handleAns(initialState);
        expect(initialState.displayValue).toBe("789");
        expect(initialState.lastAnswer).toBe(100);
        expect(result).not.toBe(initialState);
    });
});
// Test cases for handleAns function