import { handleOperators } from '../utilities/handleOperators';

describe('handleOperators', () => {
    it('should append operator to displayValue and expression if evaluated is true', () => {
        const prevState = {
            displayValue: '123',
            expression: '123',
            evaluated: true,
        };
        const operator = '+';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '123+',
            expression: '123+',
            evaluated: false,
        });
    });

    it('should replace the last operator if displayValue ends with an operator', () => {
        const prevState = {
            displayValue: '123+',
            expression: '123+',
            evaluated: false,
        };
        const operator = '-';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '123-',
            expression: '123-',
            evaluated: false,
        });
    });

    it('should append operator to displayValue and expression if displayValue does not end with an operator', () => {
        const prevState = {
            displayValue: '123',
            expression: '123',
            evaluated: false,
        };
        const operator = '*';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '123*',
            expression: '123*',
            evaluated: false,
        });
    });

    it('should handle empty displayValue and append operator', () => {
        const prevState = {
            displayValue: '',
            expression: '',
            evaluated: false,
        };
        const operator = '+';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '+',
            expression: '+',
            evaluated: false,
        });
    });

    it('should handle multiple consecutive operator replacements', () => {
        const prevState = {
            displayValue: '123+',
            expression: '123+',
            evaluated: false,
        };
        const operator = '/';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '123/',
            expression: '123/',
            evaluated: false,
        });
    });

    it('should handle case where displayValue ends with a number and evaluated is true', () => {
        const prevState = {
            displayValue: '456',
            expression: '456',
            evaluated: true,
        };
        const operator = '-';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '456-',
            expression: '456-',
            evaluated: false,
        });
    });

    it('should handle case where displayValue ends with an operator and evaluated is false', () => {
        const prevState = {
            displayValue: '789*',
            expression: '789*',
            evaluated: false,
        };
        const operator = '+';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '789+',
            expression: '789+',
            evaluated: false,
        });
    });

    it('should handle case where displayValue is empty and evaluated is true', () => {
        const prevState = {
            displayValue: '',
            expression: '',
            evaluated: true,
        };
        const operator = '*';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '*',
            expression: '*',
            evaluated: false,
        });
    });

    it('should handle case where displayValue ends with multiple operators', () => {
        const prevState = {
            displayValue: '123+/',
            expression: '123+/',
            evaluated: false,
        };
        const operator = '-';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '123+-',
            expression: '123+-',
            evaluated: false,
        });
    });

    it('should handle case where operator is appended to a single-digit displayValue', () => {
        const prevState = {
            displayValue: '7',
            expression: '7',
            evaluated: false,
        };
        const operator = '/';
        const result = handleOperators(prevState, operator);

        expect(result).toEqual({
            displayValue: '7/',
            expression: '7/',
            evaluated: false,
        });
    });
});