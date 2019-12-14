"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var executeCmd_1 = __importDefault(require("../executeCmd/executeCmd"));
var createFile = function (content, path) {
    executeCmd_1.default("printf " + content + " >> " + path);
};
exports.default = createFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jcmVhdGVGaWxlL2NyZWF0ZUZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3RUFBa0Q7QUFFbEQsSUFBTSxVQUFVLEdBQUcsVUFBQyxPQUFlLEVBQUUsSUFBWTtJQUM3QyxvQkFBVSxDQUFDLFlBQVUsT0FBTyxZQUFPLElBQU0sQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQyJ9