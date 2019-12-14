var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../executeCmd/executeCmd"], function (require, exports, executeCmd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeCmd_1 = __importDefault(executeCmd_1);
    var createFile = function (content, path) {
        executeCmd_1.default("printf " + content + " >> " + path);
    };
    exports.default = createFile;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jcmVhdGVGaWxlL2NyZWF0ZUZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUVBLElBQU0sVUFBVSxHQUFHLFVBQUMsT0FBZSxFQUFFLElBQVk7UUFDN0Msb0JBQVUsQ0FBQyxZQUFVLE9BQU8sWUFBTyxJQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDLENBQUM7SUFFRixrQkFBZSxVQUFVLENBQUMifQ==