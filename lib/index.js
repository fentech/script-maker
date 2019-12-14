var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./utils/capitalize/capitalize", "./utils/compose/compose", "./utils/consoleFormat/consoleFormat", "./utils/createFile/createFile", "./utils/escapeQuotes/escapeQuotes", "./utils/executeCmd/executeCmd", "./utils/executeIfFileExists/executeIfFileExists", "./utils/executeUnlessFileExists/executeUnlessFileExists", "./utils/log/log", "./utils/stringify/stringify", "./utils/warn/warn"], function (require, exports, capitalize_1, compose_1, consoleFormat_1, createFile_1, escapeQuotes_1, executeCmd_1, executeIfFileExists_1, executeUnlessFileExists_1, log_1, stringify_1, warn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    capitalize_1 = __importDefault(capitalize_1);
    compose_1 = __importDefault(compose_1);
    createFile_1 = __importDefault(createFile_1);
    escapeQuotes_1 = __importDefault(escapeQuotes_1);
    executeCmd_1 = __importDefault(executeCmd_1);
    executeIfFileExists_1 = __importDefault(executeIfFileExists_1);
    executeUnlessFileExists_1 = __importDefault(executeUnlessFileExists_1);
    log_1 = __importDefault(log_1);
    stringify_1 = __importDefault(stringify_1);
    warn_1 = __importDefault(warn_1);
    exports.capitalize = capitalize_1.default;
    exports.compose = compose_1.default;
    exports.boldConsoleText = consoleFormat_1.boldConsoleText;
    exports.greenConsoleText = consoleFormat_1.greenConsoleText;
    exports.redConsoleText = consoleFormat_1.redConsoleText;
    exports.yellowConsoleText = consoleFormat_1.yellowConsoleText;
    exports.createFile = createFile_1.default;
    exports.escapeQuotes = escapeQuotes_1.default;
    exports.executeCmd = executeCmd_1.default;
    exports.executeIfFileExists = executeIfFileExists_1.default;
    exports.executeUnlessFileExists = executeUnlessFileExists_1.default;
    exports.log = log_1.default;
    exports.stringify = stringify_1.default;
    exports.warn = warn_1.default;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQW1CSSxxQkFuQkcsb0JBQVUsQ0FtQkg7SUFDVixrQkFuQkcsaUJBQU8sQ0FtQkg7SUFGUCwwQkFmQSwrQkFBZSxDQWVBO0lBUWYsMkJBdEJBLGdDQUFnQixDQXNCQTtJQUVoQix5QkF2QkEsOEJBQWMsQ0F1QkE7SUFHZCw0QkF6QkEsaUNBQWlCLENBeUJBO0lBVmpCLHFCQWJHLG9CQUFVLENBYUg7SUFDVix1QkFiRyxzQkFBWSxDQWFIO0lBQ1oscUJBYkcsb0JBQVUsQ0FhSDtJQUNWLDhCQWJHLDZCQUFtQixDQWFIO0lBQ25CLGtDQWJHLGlDQUF1QixDQWFIO0lBRXZCLGNBZEcsYUFBRyxDQWNIO0lBRUgsb0JBZkcsbUJBQVMsQ0FlSDtJQUNULGVBZkcsY0FBSSxDQWVIIn0=