"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var executeIfFileExists_1 = __importDefault(require("./executeIfFileExists"));
var fs_1 = __importDefault(require("fs"));
jest.mock('fs');
describe('executeIfExists()', function () {
    it('should execute callback if asset exists', function () {
        fs_1.default.existsSync.mockReturnValue(true);
        var testCallback = jest.fn();
        executeIfFileExists_1.default('test.ts', testCallback);
        expect(testCallback).toBeCalledTimes(1);
    });
    it("should not execute callback if asset doesn't exist", function () {
        fs_1.default.existsSync.mockReturnValue(false);
        var testCallback = jest.fn();
        executeIfFileExists_1.default('test.ts', testCallback);
        expect(testCallback).not.toBeCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUlmRmlsZUV4aXN0cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2V4ZWN1dGVJZkZpbGVFeGlzdHMvZXhlY3V0ZUlmRmlsZUV4aXN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOEVBQXdEO0FBQ3hELDBDQUFvQjtBQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhCLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQixFQUFFLENBQUMseUNBQXlDLEVBQUU7UUFDekMsWUFBRSxDQUFDLFVBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5ELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUUvQiw2QkFBbUIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvREFBb0QsRUFBRTtRQUNwRCxZQUFFLENBQUMsVUFBd0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLDZCQUFtQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==