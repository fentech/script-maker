#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import program from "commander";
import executeCmd from "../../utils/executeCmd/executeCmd";
import {
  boldConsoleText,
  composeConsoleFormatting,
  redConsoleText
} from "../../utils/consoleFormat/consoleFormat";
import capitalize from "../../utils/capitalize/capitalize";
import escapeQuotes from "../../utils/escapeQuotes/escapeQuotes";
import createFile from "../../utils/createFile/createFile";
import executeUnlessExists from "../../utils/executeUnlessExists/executeUnlessExists";

const consoleWarn = (string: string): void =>
  console.log(
    composeConsoleFormatting(boldConsoleText, redConsoleText)(string)
  );
const readFile = (fileName: string): string =>
  fs.readFileSync(
    path.resolve(__dirname + `/boilerplate/${fileName}.boilerplate`),
    "utf8"
  );

const COMPONENTS_DIR_PATH = "./src/components";
const pathBuilder = (path: string): string => COMPONENTS_DIR_PATH + path;
const BOILERPLATE_TEMPLATES = {
  COMPONENT: readFile("component"),
  STORIES: readFile("component.stories"),
  TEST: readFile("component.test")
};
const fillTemplates = (
  componentString: string
): { component: string; stories: string; test: string } => {
  const fillTemplate = (template: "COMPONENT" | "STORIES" | "TEST"): string =>
    BOILERPLATE_TEMPLATES[template].replace(/COMPONENT/gm, componentString);

  return {
    component: fillTemplate("COMPONENT"),
    stories: fillTemplate("STORIES"),
    test: fillTemplate("TEST")
  };
};

program
  .version("0.1.0")
  .arguments("<componentName>")
  .option("-S, --sub-directory <string>", "Use NPM as the package manager.")
  .action(function(componentName: string, cmd: { subDirectory: string }): void {
    const component = capitalize(componentName);

    const boilerplate = fillTemplates(component);

    const componentFolderSubPath = `/${component}`;
    let componentDirPath = pathBuilder(componentFolderSubPath);

    const filePathBuilder = (fileExtension?: string): string =>
      `${COMPONENTS_DIR_PATH}${
        cmd.subDirectory
          ? `/${cmd.subDirectory.charAt(0) +
              capitalize(cmd.subDirectory.slice(1))}`
          : ""
      }/${component}/${component}${
        fileExtension ? `.${fileExtension}` : ""
      }.tsx`;

    if (cmd.subDirectory) {
      if (cmd.subDirectory.charAt(0) !== "/")
        return consoleWarn(
          'The value passed to the --sub-directory option should start with a "/".'
        );

      const parentDirPath = pathBuilder(
        `/${cmd.subDirectory.charAt(0) + capitalize(cmd.subDirectory.slice(1))}`
      );
      componentDirPath = parentDirPath + componentFolderSubPath;

      executeUnlessExists(parentDirPath, (): void => {
        executeCmd(`mkdir ${parentDirPath}`);
      });
    }

    executeUnlessExists(componentDirPath, (): void => {
      executeCmd(`mkdir ${componentDirPath}`);
    });

    if (fs.existsSync(filePathBuilder()))
      return consoleWarn("Component already exists.");

    createFile(`"${escapeQuotes(boilerplate.component)}"`, filePathBuilder());
    createFile(
      `"${escapeQuotes(boilerplate.stories)}"`,
      filePathBuilder("stories")
    );
    createFile(`"${escapeQuotes(boilerplate.test)}"`, filePathBuilder("test"));
  });

program.parse(process.argv);
