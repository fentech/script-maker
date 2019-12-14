"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var fs_1 = __importDefault(require("fs"));
var executeUnlessFileExists = function (assetPathToCheck, callback) {
    if (!fs_1.default.existsSync(assetPathToCheck))
        return callback();
};
exports.default = executeUnlessFileExists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMvZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx1REFBdUQ7QUFDdkQsMENBQW9CO0FBRXBCLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxnQkFBd0IsRUFBRSxRQUFvQjtJQUMzRSxJQUFJLENBQUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUFFLE9BQU8sUUFBUSxFQUFFLENBQUM7QUFDNUQsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsdUJBQXVCLENBQUMifQ==