import {
  boldConsoleText,
  greenConsoleText,
  redConsoleText,
  yellowConsoleText
} from "./consoleFormat";

describe("boldConsoleText", (): void => {
  it("should return the original string with bold bash markup", (): void => {
    const testString = "test";

    expect(boldConsoleText(testString)).toEqual(`\x1b[1m${testString}\x1b[0m`);
  });
});

describe("greenConsoleText", (): void => {
  it("should return the original string with green bash markup", (): void => {
    const testString = "test";

    expect(greenConsoleText(testString)).toEqual(
      `\x1b[32m${testString}\x1b[0m`
    );
  });
});

describe("redConsoleText", (): void => {
  it("should return the original string with red bash markup", (): void => {
    const testString = "test";

    expect(redConsoleText(testString)).toEqual(`\x1b[31m${testString}\x1b[0m`);
  });
});

describe("yellowConsoleText", (): void => {
  it("should return the original string with yellow bash markup", (): void => {
    const testString = "test";

    expect(yellowConsoleText(testString)).toEqual(
      `\x1b[33m${testString}\x1b[0m`
    );
  });
});
