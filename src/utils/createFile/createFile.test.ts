import { execSync } from "child_process";
import createFile from "./createFile";

jest.mock("child_process");

describe("createFile()", (): void => {
  it("should initiate a child process to print a string to a file", (): void => {
    (execSync as jest.Mock).mockReturnValue((arg: string): string => arg);

    const testFileContentString = "this";
    const testFilePath = "/test/test.ts";

    createFile(testFileContentString, testFilePath);

    expect(execSync).toHaveBeenCalledWith(
      `printf ${testFileContentString} >> ${testFilePath}`,
      { stdio: "inherit" }
    );
  });
});
