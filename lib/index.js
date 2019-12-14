#!/usr/bin/env ts-node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("utils/capitalize/capitalize", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var capitalize = function (string) { return string.charAt(0).toUpperCase() + string.slice(1); };
    exports.default = capitalize;
});
define("utils/compose/compose", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var compose = function () {
        var functions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            functions[_i] = arguments[_i];
        }
        return function (args) { return functions.reduceRight(function (args, fn) { return fn(args); }, args); };
    };
    exports.default = compose;
});
define("utils/consoleFormat/consoleFormat", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.redConsoleText = function (string) { return "\u001B[31m" + string + "\u001B[0m"; };
    exports.greenConsoleText = function (string) { return "\u001B[32m" + string + "\u001B[0m"; };
    exports.yellowConsoleText = function (string) { return "\u001B[33m" + string + "\u001B[0m"; };
    exports.boldConsoleText = function (string) { return "\u001B[1m" + string + "\u001B[0m"; };
});
define("utils/executeCmd/executeCmd", ["require", "exports", "child_process"], function (require, exports, child_process_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var executeCmd = function (cmd) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        try {
                            child_process_1.execSync(cmd, { stdio: 'inherit' });
                            resolve();
                        }
                        catch (err) {
                            reject(err);
                        }
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    exports.default = executeCmd;
});
define("utils/createFile/createFile", ["require", "exports", "utils/executeCmd/executeCmd"], function (require, exports, executeCmd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeCmd_1 = __importDefault(executeCmd_1);
    var createFile = function (content, path) {
        executeCmd_1.default("printf " + content + " >> " + path);
    };
    exports.default = createFile;
});
define("utils/escapeQuotes/escapeQuotes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var escapeQuotes = function (string) { return string.replace(/("|')/gm, "\\$1"); };
    exports.default = escapeQuotes;
});
define("utils/executeIfFileExists/executeIfFileExists", ["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_1 = __importDefault(fs_1);
    var executeIfFileExists = function (assetPathToCheck, callback) {
        if (fs_1.default.existsSync(assetPathToCheck))
            return callback();
    };
    exports.default = executeIfFileExists;
});
define("utils/executeUnlessFileExists/executeUnlessFileExists", ["require", "exports", "fs"], function (require, exports, fs_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_2 = __importDefault(fs_2);
    var executeUnlessFileExists = function (assetPathToCheck, callback) {
        if (!fs_2.default.existsSync(assetPathToCheck))
            return callback();
    };
    exports.default = executeUnlessFileExists;
});
define("utils/log/log", ["require", "exports", "utils/compose/compose"], function (require, exports, compose_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    compose_1 = __importDefault(compose_1);
    var log = function (string) {
        var formatters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            formatters[_i - 1] = arguments[_i];
        }
        var toLog = string;
        if (formatters.length)
            toLog = compose_1.default.apply(void 0, formatters.reverse())(string);
        console.log(toLog);
    };
    exports.default = log;
});
define("utils/stringify/stringify", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var stringify = function (string) { return JSON.stringify(string).replace(/("|')/gm, "$1"); };
    exports.default = stringify;
});
define("utils/warn/warn", ["require", "exports", "utils/consoleFormat/consoleFormat", "utils/log/log"], function (require, exports, consoleFormat_1, log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    log_1 = __importDefault(log_1);
    var warn = function (string) { return log_1.default(string, consoleFormat_1.boldConsoleText, consoleFormat_1.redConsoleText); };
    exports.default = warn;
});
define("index", ["require", "exports", "utils/capitalize/capitalize", "utils/compose/compose", "utils/consoleFormat/consoleFormat", "utils/createFile/createFile", "utils/escapeQuotes/escapeQuotes", "utils/executeCmd/executeCmd", "utils/executeIfFileExists/executeIfFileExists", "utils/executeUnlessFileExists/executeUnlessFileExists", "utils/log/log", "utils/stringify/stringify", "utils/warn/warn"], function (require, exports, capitalize_1, compose_2, consoleFormat_2, createFile_1, escapeQuotes_1, executeCmd_2, executeIfFileExists_1, executeUnlessFileExists_1, log_2, stringify_1, warn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    capitalize_1 = __importDefault(capitalize_1);
    compose_2 = __importDefault(compose_2);
    createFile_1 = __importDefault(createFile_1);
    escapeQuotes_1 = __importDefault(escapeQuotes_1);
    executeCmd_2 = __importDefault(executeCmd_2);
    executeIfFileExists_1 = __importDefault(executeIfFileExists_1);
    executeUnlessFileExists_1 = __importDefault(executeUnlessFileExists_1);
    log_2 = __importDefault(log_2);
    stringify_1 = __importDefault(stringify_1);
    warn_1 = __importDefault(warn_1);
    exports.capitalize = capitalize_1.default;
    exports.compose = compose_2.default;
    exports.boldConsoleText = consoleFormat_2.boldConsoleText;
    exports.greenConsoleText = consoleFormat_2.greenConsoleText;
    exports.redConsoleText = consoleFormat_2.redConsoleText;
    exports.yellowConsoleText = consoleFormat_2.yellowConsoleText;
    exports.createFile = createFile_1.default;
    exports.escapeQuotes = escapeQuotes_1.default;
    exports.executeCmd = executeCmd_2.default;
    exports.executeIfFileExists = executeIfFileExists_1.default;
    exports.executeUnlessFileExists = executeUnlessFileExists_1.default;
    exports.log = log_2.default;
    exports.stringify = stringify_1.default;
    exports.warn = warn_1.default;
});
define("generators/component/component", ["require", "exports", "fs", "path", "commander", "utils/executeCmd/executeCmd", "utils/consoleFormat/consoleFormat", "utils/capitalize/capitalize", "utils/escapeQuotes/escapeQuotes", "utils/createFile/createFile", "utils/executeUnlessFileExists/executeUnlessFileExists", "utils/compose/compose"], function (require, exports, fs_3, path_1, commander_1, executeCmd_3, consoleFormat_3, capitalize_2, escapeQuotes_2, createFile_2, executeUnlessFileExists_2, compose_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_3 = __importDefault(fs_3);
    path_1 = __importDefault(path_1);
    commander_1 = __importDefault(commander_1);
    executeCmd_3 = __importDefault(executeCmd_3);
    capitalize_2 = __importDefault(capitalize_2);
    escapeQuotes_2 = __importDefault(escapeQuotes_2);
    createFile_2 = __importDefault(createFile_2);
    executeUnlessFileExists_2 = __importDefault(executeUnlessFileExists_2);
    compose_3 = __importDefault(compose_3);
    var consoleWarn = function (string) { return console.log(compose_3.default(consoleFormat_3.boldConsoleText, consoleFormat_3.redConsoleText)(string)); };
    var readFile = function (fileName) {
        return fs_3.default.readFileSync(path_1.default.resolve(__dirname + ("/boilerplate/" + fileName + ".boilerplate")), 'utf8');
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
        var component = capitalize_2.default(componentName);
        var boilerplate = fillTemplates(component);
        var componentFolderSubPath = "/" + component;
        var componentDirPath = pathBuilder(componentFolderSubPath);
        var filePathBuilder = function (fileExtension) {
            return "" + COMPONENTS_DIR_PATH + (cmd.subDirectory ? "/" + (cmd.subDirectory.charAt(0) + capitalize_2.default(cmd.subDirectory.slice(1))) : '') + "/" + component + "/" + component + (fileExtension ? "." + fileExtension : '') + ".tsx";
        };
        if (cmd.subDirectory) {
            if (cmd.subDirectory.charAt(0) !== '/')
                return consoleWarn('The value passed to the --sub-directory option should start with a "/".');
            var parentDirPath_1 = pathBuilder("/" + (cmd.subDirectory.charAt(0) + capitalize_2.default(cmd.subDirectory.slice(1))));
            componentDirPath = parentDirPath_1 + componentFolderSubPath;
            executeUnlessFileExists_2.default(parentDirPath_1, function () {
                executeCmd_3.default("mkdir " + parentDirPath_1);
            });
        }
        executeUnlessFileExists_2.default(componentDirPath, function () {
            executeCmd_3.default("mkdir " + componentDirPath);
        });
        if (fs_3.default.existsSync(filePathBuilder()))
            return consoleWarn('Component already exists.');
        createFile_2.default("\"" + escapeQuotes_2.default(boilerplate.component) + "\"", filePathBuilder());
        createFile_2.default("\"" + escapeQuotes_2.default(boilerplate.stories) + "\"", filePathBuilder('stories'));
        createFile_2.default("\"" + escapeQuotes_2.default(boilerplate.test) + "\"", filePathBuilder('test'));
    });
    commander_1.default.parse(process.argv);
});
define("utils/capitalize/capitalize.test", ["require", "exports", "utils/capitalize/capitalize"], function (require, exports, capitalize_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    capitalize_3 = __importDefault(capitalize_3);
    describe('capitalize()', function () {
        it('should return the same string that was passed in  with the first letter upper-case', function () {
            var testString = 'test';
            expect(capitalize_3.default(testString)).toEqual('Test');
        });
    });
});
define("utils/compose/compose.test", ["require", "exports", "utils/compose/compose"], function (require, exports, compose_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    compose_4 = __importDefault(compose_4);
    describe('compose', function () {
        it('should call all but the last function with the return of the latter function', function () {
            var testFunc1 = jest.fn(function (string) { return string + '1'; });
            var testFunc2 = jest.fn(function (string) { return string + '2'; });
            var testArg = 'this';
            compose_4.default(testFunc1, testFunc2)(testArg);
            expect(testFunc1).toBeCalledWith(testArg + '2');
            expect(testFunc2).toBeCalledWith(testArg);
        });
    });
});
define("utils/consoleFormat/consoleFormat.test", ["require", "exports", "utils/consoleFormat/consoleFormat"], function (require, exports, consoleFormat_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('boldConsoleText', function () {
        it('should return the original string with bold bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_4.boldConsoleText(testString)).toEqual("\u001B[1m" + testString + "\u001B[0m");
        });
    });
    describe('greenConsoleText', function () {
        it('should return the original string with green bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_4.greenConsoleText(testString)).toEqual("\u001B[32m" + testString + "\u001B[0m");
        });
    });
    describe('redConsoleText', function () {
        it('should return the original string with red bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_4.redConsoleText(testString)).toEqual("\u001B[31m" + testString + "\u001B[0m");
        });
    });
    describe('yellowConsoleText', function () {
        it('should return the original string with yellow bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_4.yellowConsoleText(testString)).toEqual("\u001B[33m" + testString + "\u001B[0m");
        });
    });
});
define("utils/createFile/createFile.test", ["require", "exports", "child_process", "utils/createFile/createFile"], function (require, exports, child_process_2, createFile_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    createFile_3 = __importDefault(createFile_3);
    jest.mock('child_process');
    describe('createFile()', function () {
        it('should initiate a child process to print a string to a file', function () {
            child_process_2.execSync.mockReturnValue(function (arg) { return arg; });
            var testFileContentString = 'this';
            var testFilePath = '/test/test.ts';
            createFile_3.default(testFileContentString, testFilePath);
            expect(child_process_2.execSync).toHaveBeenCalledWith("printf " + testFileContentString + " >> " + testFilePath, {
                stdio: 'inherit',
            });
        });
    });
});
define("utils/escapeQuotes/escapeQuotes.test", ["require", "exports", "utils/escapeQuotes/escapeQuotes"], function (require, exports, escapeQuotes_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    escapeQuotes_3 = __importDefault(escapeQuotes_3);
    describe('escapeQuotes', function () {
        it('should escape quote single quotes by prepending them with a forward slash', function () {
            var testString = "This is called a 'test'.";
            // eslint-disable-next-line prettier/prettier
            var escapedTestString = "This is called a \\'test\\'.";
            expect(escapeQuotes_3.default(testString)).toEqual(escapedTestString);
        });
        it('should escape quote double quotes by prepending them with a forward slash', function () {
            var testString = 'This is called a "test".';
            // eslint-disable-next-line prettier/prettier
            var escapedTestString = 'This is called a \\"test\\".';
            expect(escapeQuotes_3.default(testString)).toEqual(escapedTestString);
        });
    });
});
define("utils/executeCmd/executeCmd.test", ["require", "exports", "child_process", "utils/executeCmd/executeCmd"], function (require, exports, child_process_3, executeCmd_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeCmd_4 = __importDefault(executeCmd_4);
    jest.mock('child_process');
    describe('executeCmd', function () {
        it('should resolve if command is valid', function () { return __awaiter(void 0, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        child_process_3.execSync.mockReturnValue(true);
                        error = '';
                        return [4 /*yield*/, executeCmd_4.default('test').catch(function (e) {
                                error = e;
                            })];
                    case 1:
                        _a.sent();
                        expect(error).toEqual('');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should reject with an error if command is invalid', function () { return __awaiter(void 0, void 0, void 0, function () {
            var testError, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testError = new Error('there was an error');
                        child_process_3.execSync.mockImplementation(function () {
                            throw testError;
                        });
                        error = '';
                        return [4 /*yield*/, executeCmd_4.default('test').catch(function (e) {
                                error = e;
                            })];
                    case 1:
                        _a.sent();
                        expect(error).toEqual(testError);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
define("utils/executeIfFileExists/executeIfFileExists.test", ["require", "exports", "utils/executeIfFileExists/executeIfFileExists", "fs"], function (require, exports, executeIfFileExists_2, fs_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeIfFileExists_2 = __importDefault(executeIfFileExists_2);
    fs_4 = __importDefault(fs_4);
    jest.mock('fs');
    describe('executeIfExists()', function () {
        it('should execute callback if asset exists', function () {
            fs_4.default.existsSync.mockReturnValue(true);
            var testCallback = jest.fn();
            executeIfFileExists_2.default('test.ts', testCallback);
            expect(testCallback).toBeCalledTimes(1);
        });
        it("should not execute callback if asset doesn't exist", function () {
            fs_4.default.existsSync.mockReturnValue(false);
            var testCallback = jest.fn();
            executeIfFileExists_2.default('test.ts', testCallback);
            expect(testCallback).not.toBeCalled();
        });
    });
});
define("utils/executeUnlessFileExists/executeUnlessFileExists.test", ["require", "exports", "utils/executeUnlessFileExists/executeUnlessFileExists", "fs"], function (require, exports, executeUnlessFileExists_3, fs_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeUnlessFileExists_3 = __importDefault(executeUnlessFileExists_3);
    fs_5 = __importDefault(fs_5);
    jest.mock('fs');
    describe('executeUnlessExists()', function () {
        it('should execute callback if asset exists', function () {
            fs_5.default.existsSync.mockReturnValue(true);
            var testCallback = jest.fn();
            executeUnlessFileExists_3.default('test.ts', testCallback);
            expect(testCallback).not.toBeCalled();
        });
        it("should not execute callback if asset doesn't exist", function () {
            fs_5.default.existsSync.mockReturnValue(false);
            var testCallback = jest.fn();
            executeUnlessFileExists_3.default('test.ts', testCallback);
            expect(testCallback).toBeCalledTimes(1);
        });
    });
});
define("utils/log/log.test", ["require", "exports", "utils/log/log"], function (require, exports, log_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    log_3 = __importDefault(log_3);
    describe('log', function () {
        it('should call with first argument as the text to be logged', function () {
            var text = 'test';
            var logStub = jest.fn();
            console.log = logStub;
            log_3.default(text);
            expect(logStub).toHaveBeenCalledWith(text);
        });
        it('should call with first argument as the text to be logged', function () {
            var text = 'test';
            var formatter1 = jest.fn(function (str) { return str + '1'; });
            var formatter2 = jest.fn(function (str) { return str + '2'; });
            var logStub = jest.fn();
            console.log = logStub;
            log_3.default(text, formatter1, formatter2);
            expect(logStub).toHaveBeenCalledWith(text + '12');
        });
    });
});
define("utils/stringify/stringify.test", ["require", "exports", "utils/stringify/stringify"], function (require, exports, stringify_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    stringify_2 = __importDefault(stringify_2);
    describe('stringify', function () {
        it('should returns a stringified object with escaped quotes', function () {
            var string = 'test';
            expect(stringify_2.default(string)).toEqual(JSON.stringify(string).replace(/("|')/gm, "$1"));
        });
    });
});
define("utils/warn/warn.test", ["require", "exports", "utils/warn/warn", "utils/consoleFormat/consoleFormat", "utils/compose/compose"], function (require, exports, warn_2, consoleFormat_5, compose_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    warn_2 = __importDefault(warn_2);
    compose_5 = __importDefault(compose_5);
    // jest.mock('../log/log');
    describe('warn', function () {
        it('should log text formatted as a warning', function () {
            var text = 'test';
            var logStub = jest.fn();
            console.log = logStub;
            warn_2.default(text);
            expect(logStub).toHaveBeenCalledWith(compose_5.default(consoleFormat_5.redConsoleText, consoleFormat_5.boldConsoleText)(text));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMvY2FwaXRhbGl6ZS9jYXBpdGFsaXplLnRzIiwiLi4vc3JjL3V0aWxzL2NvbXBvc2UvY29tcG9zZS50cyIsIi4uL3NyYy91dGlscy9jb25zb2xlRm9ybWF0L2NvbnNvbGVGb3JtYXQudHMiLCIuLi9zcmMvdXRpbHMvZXhlY3V0ZUNtZC9leGVjdXRlQ21kLnRzIiwiLi4vc3JjL3V0aWxzL2NyZWF0ZUZpbGUvY3JlYXRlRmlsZS50cyIsIi4uL3NyYy91dGlscy9lc2NhcGVRdW90ZXMvZXNjYXBlUXVvdGVzLnRzIiwiLi4vc3JjL3V0aWxzL2V4ZWN1dGVJZkZpbGVFeGlzdHMvZXhlY3V0ZUlmRmlsZUV4aXN0cy50cyIsIi4uL3NyYy91dGlscy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy50cyIsIi4uL3NyYy91dGlscy9sb2cvbG9nLnRzIiwiLi4vc3JjL3V0aWxzL3N0cmluZ2lmeS9zdHJpbmdpZnkudHMiLCIuLi9zcmMvdXRpbHMvd2Fybi93YXJuLnRzIiwiLi4vc3JjL2luZGV4LnRzIiwiLi4vc3JjL2dlbmVyYXRvcnMvY29tcG9uZW50L2NvbXBvbmVudC50cyIsIi4uL3NyYy91dGlscy9jYXBpdGFsaXplL2NhcGl0YWxpemUudGVzdC50cyIsIi4uL3NyYy91dGlscy9jb21wb3NlL2NvbXBvc2UudGVzdC50cyIsIi4uL3NyYy91dGlscy9jb25zb2xlRm9ybWF0L2NvbnNvbGVGb3JtYXQudGVzdC50cyIsIi4uL3NyYy91dGlscy9jcmVhdGVGaWxlL2NyZWF0ZUZpbGUudGVzdC50cyIsIi4uL3NyYy91dGlscy9lc2NhcGVRdW90ZXMvZXNjYXBlUXVvdGVzLnRlc3QudHMiLCIuLi9zcmMvdXRpbHMvZXhlY3V0ZUNtZC9leGVjdXRlQ21kLnRlc3QudHMiLCIuLi9zcmMvdXRpbHMvZXhlY3V0ZUlmRmlsZUV4aXN0cy9leGVjdXRlSWZGaWxlRXhpc3RzLnRlc3QudHMiLCIuLi9zcmMvdXRpbHMvZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMvZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMudGVzdC50cyIsIi4uL3NyYy91dGlscy9sb2cvbG9nLnRlc3QudHMiLCIuLi9zcmMvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS50ZXN0LnRzIiwiLi4vc3JjL3V0aWxzL3dhcm4vd2Fybi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQSxJQUFNLFVBQVUsR0FBRyxVQUFDLE1BQWMsSUFBYSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQztJQUVoRyxrQkFBZSxVQUFVLENBQUM7Ozs7O0lDRjFCLDhEQUE4RDtJQUM5RCxJQUFNLE9BQU8sR0FBRztRQUFDLG1CQUF3QjthQUF4QixVQUF3QixFQUF4QixxQkFBd0IsRUFBeEIsSUFBd0I7WUFBeEIsOEJBQXdCOztRQUFLLE9BQUEsVUFBQyxJQUFTLElBQVUsT0FBQSxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSyxPQUFBLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBUixDQUFRLEVBQUUsSUFBSSxDQUFDLEVBQW5ELENBQW1EO0lBQXZFLENBQXVFLENBQUM7SUFFdEgsa0JBQWUsT0FBTyxDQUFDOzs7OztJQ0NWLFFBQUEsY0FBYyxHQUFxQixVQUFBLE1BQU0sSUFBSSxPQUFBLGVBQVcsTUFBTSxjQUFTLEVBQTFCLENBQTBCLENBQUM7SUFDeEUsUUFBQSxnQkFBZ0IsR0FBcUIsVUFBQSxNQUFNLElBQUksT0FBQSxlQUFXLE1BQU0sY0FBUyxFQUExQixDQUEwQixDQUFDO0lBQzFFLFFBQUEsaUJBQWlCLEdBQXFCLFVBQUEsTUFBTSxJQUFJLE9BQUEsZUFBVyxN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