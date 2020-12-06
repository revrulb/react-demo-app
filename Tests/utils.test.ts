import { stringUtils } from "../Sources/Utils";

test("string utils tests", () => {
    const emptyString = "";
    const stringA = "a";
    const stringB = "b";
    const stringAAA = "aaa";

    expect(stringUtils.includes(stringA, emptyString)).toBe(true);
    expect(stringUtils.includes(stringAAA, stringA)).toBe(true);
    expect(stringUtils.includes(stringAAA, stringB)).toBe(false);
});
