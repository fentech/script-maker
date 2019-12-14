var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./executeIfFileExists", "fs"], function (require, exports, executeIfFileExists_1, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeIfFileExists_1 = __importDefault(executeIfFileExists_1);
    fs_1 = __importDefault(fs_1);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUlmRmlsZUV4aXN0cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2V4ZWN1dGVJZkZpbGVFeGlzdHMvZXhlY3V0ZUlmRmlsZUV4aXN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBR0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQixRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDMUIsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO1lBQ3pDLFlBQUUsQ0FBQyxVQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFL0IsNkJBQW1CLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRTdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7WUFDcEQsWUFBRSxDQUFDLFVBQXdCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXBELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUUvQiw2QkFBbUIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFN0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=