import stringify from "./stringify";

describe("stringify", (): void => {
  it("should returns a stringified object with escaped quotes", (): void => {
    const testObj = {
      test: "test"
    };

    expect(stringify(testObj)).toEqual(
      JSON.stringify(testObj).replace(/("|')/gm, `\$1`)
    );
  });
});
