"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var executeUnlessFileExists_1 = __importDefault(require("./executeUnlessFileExists"));
var fs_1 = __importDefault(require("fs"));
jest.mock('fs');
describe('executeUnlessExists()', function () {
    it('should execute callback if asset exists', function () {
        fs_1.default.existsSync.mockReturnValue(true);
        var testCallback = jest.fn();
        executeUnlessFileExists_1.default('test.ts', testCallback);
        expect(testCallback).not.toBeCalled();
    });
    it("should not execute callback if asset doesn't exist", function () {
        fs_1.default.existsSync.mockReturnValue(false);
        var testCallback = jest.fn();
        executeUnlessFileExists_1.default('test.ts', testCallback);
        expect(testCallback).toBeCalledTimes(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0ZBQWdFO0FBQ2hFLDBDQUFvQjtBQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhCLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUM5QixFQUFFLENBQUMseUNBQXlDLEVBQUU7UUFDekMsWUFBRSxDQUFDLFVBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUvQixpQ0FBdUIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFakQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvREFBb0QsRUFBRTtRQUNwRCxZQUFFLENBQUMsVUFBd0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLGlDQUF1QixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVqRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==