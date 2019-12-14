var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./executeUnlessFileExists", "fs"], function (require, exports, executeUnlessFileExists_1, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeUnlessFileExists_1 = __importDefault(executeUnlessFileExists_1);
    fs_1 = __importDefault(fs_1);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBR0EsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQixRQUFRLENBQUMsdUJBQXVCLEVBQUU7UUFDOUIsRUFBRSxDQUFDLHlDQUF5QyxFQUFFO1lBQ3pDLFlBQUUsQ0FBQyxVQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVuRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFFL0IsaUNBQXVCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRWpELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUU7WUFDcEQsWUFBRSxDQUFDLFVBQXdCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXBELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUUvQixpQ0FBdUIsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFakQsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=