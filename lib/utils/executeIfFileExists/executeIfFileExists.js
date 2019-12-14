var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_1 = __importDefault(fs_1);
    var executeIfFileExists = function (assetPathToCheck, callback) {
        if (fs_1.default.existsSync(assetPathToCheck))
            return callback();
    };
    exports.default = executeIfFileExists;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUlmRmlsZUV4aXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9leGVjdXRlSWZGaWxlRXhpc3RzL2V4ZWN1dGVJZkZpbGVFeGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUdBLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxnQkFBd0IsRUFBRSxRQUFvQjtRQUN2RSxJQUFJLFlBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7WUFBRSxPQUFPLFFBQVEsRUFBRSxDQUFDO0lBQzNELENBQUMsQ0FBQztJQUVGLGtCQUFlLG1CQUFtQixDQUFDIn0=