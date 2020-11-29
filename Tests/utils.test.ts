import { serverFaker, stringUtils } from "../Sources/Utils";

test("string utils tests", () => {
    const emptyString = "";
    const stringA = "a";
    const stringB = "b";
    const stringAAA = "aaa";

    expect(stringUtils.includes(stringA, emptyString)).toBe(true);
    expect(stringUtils.includes(stringAAA, stringA)).toBe(true);
    expect(stringUtils.includes(stringAAA, stringB)).toBe(false);
});

test("server faker tests", async () => {
    const fakedServerData = await serverFaker.fakeRequest(5, 0);
    expect(fakedServerData).toBe(5);
});
