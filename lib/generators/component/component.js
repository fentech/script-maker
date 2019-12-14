#!/usr/bin/env ts-node
import fs from 'fs';
import path from 'path';
import program from 'commander';
import executeCmd from '../../utils/executeCmd/executeCmd';
import { boldConsoleText, redConsoleText } from '../../utils/consoleFormat/consoleFormat';
import capitalize from '../../utils/capitalize/capitalize';
import escapeQuotes from '../../utils/escapeQuotes/escapeQuotes';
import createFile from '../../utils/createFile/createFile';
import executeUnlessFileExists from '../../utils/executeUnlessFileExists/executeUnlessFileExists';
import compose from '../../utils/compose/compose';
var consoleWarn = function (string) { return console.log(compose(boldConsoleText, redConsoleText)(string)); };
var readFile = function (fileName) {
    return fs.readFileSync(path.resolve(__dirname + ("/boilerplate/" + fileName + ".boilerplate")), 'utf8');
};
var COMPONENTS_DIR_PATH = './src/components';
var pathBuilder = function (path) { return COMPONENTS_DIR_PATH + path; };
var BOILERPLATE_TEMPLATES = {
    COMPONENT: readFile('component'),
    STORIES: readFile('component.stories'),
    TEST: readFile('component.test'),
};
var fillTemplates = function (componentString) {
    var fillTemplate = function (template) {
        return BOILERPLATE_TEMPLATES[template].replace(/COMPONENT/gm, componentString);
    };
    return {
        component: fillTemplate('COMPONENT'),
        stories: fillTemplate('STORIES'),
        test: fillTemplate('TEST'),
    };
};
program
    .version('0.1.0')
    .arguments('<componentName>')
    .option('-S, --sub-directory <string>', 'Use NPM as the package manager.')
    .action(function (componentName, cmd) {
    var component = capitalize(componentName);
    var boilerplate = fillTemplates(component);
    var componentFolderSubPath = "/" + component;
    var componentDirPath = pathBuilder(componentFolderSubPath);
    var filePathBuilder = function (fileExtension) {
        return "" + COMPONENTS_DIR_PATH + (cmd.subDirectory ? "/" + (cmd.subDirectory.charAt(0) + capitalize(cmd.subDirectory.slice(1))) : '') + "/" + component + "/" + component + (fileExtension ? "." + fileExtension : '') + ".tsx";
    };
    if (cmd.subDirectory) {
        if (cmd.subDirectory.charAt(0) !== '/')
            return consoleWarn('The value passed to the --sub-directory option should start with a "/".');
        var parentDirPath_1 = pathBuilder("/" + (cmd.subDirectory.charAt(0) + capitalize(cmd.subDirectory.slice(1))));
        componentDirPath = parentDirPath_1 + componentFolderSubPath;
        executeUnlessFileExists(parentDirPath_1, function () {
            executeCmd("mkdir " + parentDirPath_1);
        });
    }
    executeUnlessFileExists(componentDirPath, function () {
        executeCmd("mkdir " + componentDirPath);
    });
    if (fs.existsSync(filePathBuilder()))
        return consoleWarn('Component already exists.');
    createFile("\"" + escapeQuotes(boilerplate.component) + "\"", filePathBuilder());
    createFile("\"" + escapeQuotes(boilerplate.stories) + "\"", filePathBuilder('stories'));
    createFile("\"" + escapeQuotes(boilerplate.test) + "\"", filePathBuilder('test'));
});
program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRvcnMvY29tcG9uZW50L2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ3BCLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDaEMsT0FBTyxVQUFVLE1BQU0sbUNBQW1DLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMxRixPQUFPLFVBQVUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRCxPQUFPLFlBQVksTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRSxPQUFPLFVBQVUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRCxPQUFPLHVCQUF1QixNQUFNLDZEQUE2RCxDQUFDO0FBQ2xHLE9BQU8sT0FBTyxNQUFNLDZCQUE2QixDQUFDO0FBRWxELElBQU0sV0FBVyxHQUFHLFVBQUMsTUFBYyxJQUFXLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQTdELENBQTZELENBQUM7QUFDNUcsSUFBTSxRQUFRLEdBQUcsVUFBQyxRQUFnQjtJQUM5QixPQUFBLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUcsa0JBQWdCLFFBQVEsaUJBQWMsQ0FBQSxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBQXpGLENBQXlGLENBQUM7QUFFOUYsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQztBQUMvQyxJQUFNLFdBQVcsR0FBRyxVQUFDLElBQVksSUFBYSxPQUFBLG1CQUFtQixHQUFHLElBQUksRUFBMUIsQ0FBMEIsQ0FBQztBQUN6RSxJQUFNLHFCQUFxQixHQUFHO0lBQzFC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