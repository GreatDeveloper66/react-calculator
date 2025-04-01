import { handleC } from "../utilities/handleC";

describe("handleC", () => {
    it("should reset displayValue to '0'", () => {
        const initialState = { displayValue: "123", expression: "123+456" };
        const result = handleC(initialState);
        expect(result.displayValue).toBe("0");
    });

    it("should reset expression to '0'", () => {
        const initialState = { displayValue: "123", expression: "123+456" };
        const result = handleC(initialState);
        expect(result.expression).toBe("0");
    });

    it("should not modify the input state object", () => {
        const initialState = { displayValue: "123", expression: "123+456" };
        const result = handleC(initialState);
        expect(initialState).toEqual({ displayValue: "123", expression: "123+456" });
        expect(result).not.toBe(initialState); // Ensure a new object is returned
    });
});