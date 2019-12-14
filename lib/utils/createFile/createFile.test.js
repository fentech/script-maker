"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var createFile_1 = __importDefault(require("./createFile"));
jest.mock('child_process');
describe('createFile()', function () {
    it('should initiate a child process to print a string to a file', function () {
        child_process_1.execSync.mockReturnValue(function (arg) { return arg; });
        var testFileContentString = 'this';
        var testFilePath = '/test/test.ts';
        createFile_1.default(testFileContentString, testFilePath);
        expect(child_process_1.execSync).toHaveBeenCalledWith("printf " + testFileContentString + " >> " + testFilePath, {
            stdio: 'inherit',
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRmlsZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NyZWF0ZUZpbGUvY3JlYXRlRmlsZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQXlDO0FBQ3pDLDREQUFzQztBQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTNCLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDckIsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1FBQzdELHdCQUFzQixDQUFDLGVBQWUsQ0FBQyxVQUFDLEdBQVcsSUFBYSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztRQUV0RSxJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQztRQUNyQyxJQUFNLFlBQVksR0FBRyxlQUFlLENBQUM7UUFFckMsb0JBQVUsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsd0JBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFlBQVUscUJBQXFCLFlBQU8sWUFBYyxFQUFFO1lBQ3hGLEtBQUssRUFBRSxTQUFTO1NBQ25CLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==