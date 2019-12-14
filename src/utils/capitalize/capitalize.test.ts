import capitalize from "./capitalize";

describe("capitalize()", (): void => {
  it("should return the same string that was passed in  with the first letter upper-case", (): void => {
    const testString = "test";

    expect(capitalize(testString)).toEqual("Test");
  });
});
