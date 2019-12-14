#!/usr/bin/env ts-node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var commander_1 = __importDefault(require("commander"));
var executeCmd_1 = __importDefault(require("../../utils/executeCmd/executeCmd"));
var consoleFormat_1 = require("../../utils/consoleFormat/consoleFormat");
var capitalize_1 = __importDefault(require("../../utils/capitalize/capitalize"));
var escapeQuotes_1 = __importDefault(require("../../utils/escapeQuotes/escapeQuotes"));
var createFile_1 = __importDefault(require("../../utils/createFile/createFile"));
var executeUnlessFileExists_1 = __importDefault(require("../../utils/executeUnlessFileExists/executeUnlessFileExists"));
var compose_1 = __importDefault(require("../../utils/compose/compose"));
var consoleWarn = function (string) { return console.log(compose_1.default(consoleFormat_1.boldConsoleText, consoleFormat_1.redConsoleText)(string)); };
var readFile = function (fileName) {
    return fs_1.default.readFileSync(path_1.default.resolve(__dirname + ("/boilerplate/" + fileName + ".boilerplate")), 'utf8');
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
commander_1.default
    .version('0.1.0')
    .arguments('<componentName>')
    .option('-S, --sub-directory <string>', 'Use NPM as the package manager.')
    .action(function (componentName, cmd) {
    var component = capitalize_1.default(componentName);
    var boilerplate = fillTemplates(component);
    var componentFolderSubPath = "/" + component;
    var componentDirPath = pathBuilder(componentFolderSubPath);
    var filePathBuilder = function (fileExtension) {
        return "" + COMPONENTS_DIR_PATH + (cmd.subDirectory ? "/" + (cmd.subDirectory.charAt(0) + capitalize_1.default(cmd.subDirectory.slice(1))) : '') + "/" + component + "/" + component + (fileExtension ? "." + fileExtension : '') + ".tsx";
    };
    if (cmd.subDirectory) {
        if (cmd.subDirectory.charAt(0) !== '/')
            return consoleWarn('The value passed to the --sub-directory option should start with a "/".');
        var parentDirPath_1 = pathBuilder("/" + (cmd.subDirectory.charAt(0) + capitalize_1.default(cmd.subDirectory.slice(1))));
        componentDirPath = parentDirPath_1 + componentFolderSubPath;
        executeUnlessFileExists_1.default(parentDirPath_1, function () {
            executeCmd_1.default("mkdir " + parentDirPath_1);
        });
    }
    executeUnlessFileExists_1.default(componentDirPath, function () {
        executeCmd_1.default("mkdir " + componentDirPath);
    });
    if (fs_1.default.existsSync(filePathBuilder()))
        return consoleWarn('Component already exists.');
    createFile_1.default("\"" + escapeQuotes_1.default(boilerplate.component) + "\"", filePathBuilder());
    createFile_1.default("\"" + escapeQuotes_1.default(boilerplate.stories) + "\"", filePathBuilder('stories'));
    createFile_1.default("\"" + escapeQuotes_1.default(boilerplate.test) + "\"", filePathBuilder('test'));
});
commander_1.default.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRvcnMvY29tcG9uZW50L2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSwwQ0FBb0I7QUFDcEIsOENBQXdCO0FBQ3hCLHdEQUFnQztBQUNoQyxpRkFBMkQ7QUFDM0QseUVBQTBGO0FBQzFGLGlGQUEyRDtBQUMzRCx1RkFBaUU7QUFDakUsaUZBQTJEO0FBQzNELHdIQUFrRztBQUNsRyx3RUFBa0Q7QUFFbEQsSUFBTSxXQUFXLEdBQUcsVUFBQyxNQUFjLElBQVcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsK0JBQWUsRUFBRSw4QkFBYyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBN0QsQ0FBNkQsQ0FBQztBQUM1RyxJQUFNLFFBQVEsR0FBRyxVQUFDLFFBQWdCO0lBQzlCLE9BQUEsWUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBRyxrQkFBZ0IsUUFBUSxpQkFBYyxDQUFBLENBQUMsRUFBRSxNQUFNLENBQUM7QUFBekYsQ0FBeUYsQ0FBQztBQUU5RixJQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDO0FBQy9DLElBQU0sV0FBVyxHQUFHLFVBQUMsSUFBWSxJQUFhLE9BQUEsbUJBQW1CLEdBQUcsSUFBSSxFQUExQixDQUEwQixDQUFDO0FBQ3pFLElBQU0scUJBQXFCLEdBQUc7SUFDMUIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUM7SUFDaEMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztJQUN0QyxJQUFJLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDO0NBQ25DLENBQUM7QUFDRixJQUFNLGFBQWEsR0FBRyxVQUFDLGVBQXVCO0lBQzFDLElBQU0sWUFBWSxHQUFHLFVBQUMsUUFBMEM7UUFDNUQsT0FBQSxxQkFBcUIsQ0FBQyxRQUFR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