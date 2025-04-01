import { handleOpenLeftParen } from "../utilities/handleOpenLeftParen.js";
import { needsImplicitMultiplication } from "../helpers/helperFunctions.js";

jest.mock("../helpers/helperFunctions.js", () => ({
    needsImplicitMultiplication: jest.fn(),
}));

describe("handleOpenLeftParen", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return '(' when the expression is '0'", () => {
        const result = handleOpenLeftParen("0");
        expect(result).toBe("(");
    });

    it("should append '*(' when needsImplicitMultiplication returns true", () => {
        needsImplicitMultiplication.mockReturnValue(true);
        const result = handleOpenLeftParen("2");
        expect(result).toBe("2*(");
        expect(needsImplicitMultiplication).toHaveBeenCalledWith("2");
    });

    it("should append '(' when needsImplicitMultiplication returns false", () => {
        needsImplicitMultiplication.mockReturnValue(false);
        const result = handleOpenLeftParen("2");
        expect(result).toBe("2(");
        expect(needsImplicitMultiplication).toHaveBeenCalledWith("2");
    });
});