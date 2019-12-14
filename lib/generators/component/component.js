#!/usr/bin/env ts-node
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "fs", "path", "commander", "../../utils/executeCmd/executeCmd", "../../utils/consoleFormat/consoleFormat", "../../utils/capitalize/capitalize", "../../utils/escapeQuotes/escapeQuotes", "../../utils/createFile/createFile", "../../utils/executeUnlessFileExists/executeUnlessFileExists", "../../utils/compose/compose"], function (require, exports, fs_1, path_1, commander_1, executeCmd_1, consoleFormat_1, capitalize_1, escapeQuotes_1, createFile_1, executeUnlessFileExists_1, compose_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_1 = __importDefault(fs_1);
    path_1 = __importDefault(path_1);
    commander_1 = __importDefault(commander_1);
    executeCmd_1 = __importDefault(executeCmd_1);
    capitalize_1 = __importDefault(capitalize_1);
    escapeQuotes_1 = __importDefault(escapeQuotes_1);
    createFile_1 = __importDefault(createFile_1);
    executeUnlessFileExists_1 = __importDefault(executeUnlessFileExists_1);
    compose_1 = __importDefault(compose_1);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dlbmVyYXRvcnMvY29tcG9uZW50L2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBYUEsSUFBTSxXQUFXLEdBQUcsVUFBQyxNQUFjLElBQVcsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsK0JBQWUsRUFBRSw4QkFBYyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBN0QsQ0FBNkQsQ0FBQztJQUM1RyxJQUFNLFFBQVEsR0FBRyxVQUFDLFFBQWdCO1FBQzlCLE9BQUEsWUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBRyxrQkFBZ0IsUUFBUSxpQkFBYyxDQUFBLENBQUMsRUFBRSxNQUFNLENBQUM7SUFBekYsQ0FBeUYsQ0FBQztJQUU5RixJQUFNLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDO0lBQy9DLElBQU0sV0FBVyxHQUFHLFVBQUMsSUFBWSxJQUFhLE9BQUEsbUJBQW1CLEdBQUcsSUFBSSxFQUExQixDQUEwQixDQUFDO0lBQ3pFLElBQU0scUJBQXFCLEdBQUc7UUFDMUIsU0FBUyxFQUFFLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDaEMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUN0QyxJQUFJLEVBQUUsUUFBUSxDQUFDLGdCQUFnQixDQUFDO0tBQ25DLENBQUM7SUFDRixJQUFNLGFBQWEsR0FBRyxVQUFDLGVBQXVCO1FBQzFDLElBQU0sWUFBWSxHQUFHLFVBQUMsUUFBMEM7WUFDNUQsT0FBQSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztRQUF2RSxDQUF1RSxDQUFDO1FBRTVFLE9BQU87WUFDSCxTQUFTLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQztZQUNwQyxPQUFPLEVBQUUs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