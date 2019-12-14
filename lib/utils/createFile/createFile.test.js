var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "child_process", "./createFile"], function (require, exports, child_process_1, createFile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    createFile_1 = __importDefault(createFile_1);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRmlsZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NyZWF0ZUZpbGUvY3JlYXRlRmlsZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFHQSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTNCLFFBQVEsQ0FBQyxjQUFjLEVBQUU7UUFDckIsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO1lBQzdELHdCQUFzQixDQUFDLGVBQWUsQ0FBQyxVQUFDLEdBQVcsSUFBYSxPQUFBLEdBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztZQUV0RSxJQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQztZQUNyQyxJQUFNLFlBQVksR0FBRyxlQUFlLENBQUM7WUFFckMsb0JBQVUsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUVoRCxNQUFNLENBQUMsd0JBQVEsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLFlBQVUscUJBQXFCLFlBQU8sWUFBYyxFQUFFO2dCQUN4RixLQUFLLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=