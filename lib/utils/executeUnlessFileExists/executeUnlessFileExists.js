var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fs_1 = __importDefault(fs_1);
    var executeUnlessFileExists = function (assetPathToCheck, callback) {
        if (!fs_1.default.existsSync(assetPathToCheck))
            return callback();
    };
    exports.default = executeUnlessFileExists;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMvZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUdBLElBQU0sdUJBQXVCLEdBQUcsVUFBQyxnQkFBd0IsRUFBRSxRQUFvQjtRQUMzRSxJQUFJLENBQUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFFLE9BQU8sUUFBUSxFQUFFLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0lBRUYsa0JBQWUsdUJBQXVCLENBQUMifQ==