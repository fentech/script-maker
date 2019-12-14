"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var fs_1 = __importDefault(require("fs"));
var executeIfFileExists = function (assetPathToCheck, callback) {
    if (fs_1.default.existsSync(assetPathToCheck))
        return callback();
};
exports.default = executeIfFileExists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUlmRmlsZUV4aXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9leGVjdXRlSWZGaWxlRXhpc3RzL2V4ZWN1dGVJZkZpbGVFeGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsMENBQW9CO0FBRXBCLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxnQkFBd0IsRUFBRSxRQUFvQjtJQUN2RSxJQUFJLFlBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7UUFBRSxPQUFPLFFBQVEsRUFBRSxDQUFDO0FBQzNELENBQUMsQ0FBQztBQUVGLGtCQUFlLG1CQUFtQixDQUFDIn0=