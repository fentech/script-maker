import { execSync } from 'child_process';
import createFile from './createFile';
jest.mock('child_process');
describe('createFile()', function () {
    it('should initiate a child process to print a string to a file', function () {
        execSync.mockReturnValue(function (arg) { return arg; });
        var testFileContentString = 'this';
        var testFilePath = '/test/test.ts';
        createFile(testFileContentString, testFilePath);
        expect(execSync).toHaveBeenCalledWith("printf " + testFileContentString + " >> " + testFilePath, {
            stdio: 'inherit',
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRmlsZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NyZWF0ZUZpbGUvY3JlYXRlRmlsZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxVQUFVLE1BQU0sY0FBYyxDQUFDO0FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFM0IsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUNyQixFQUFFLENBQUMsNkRBQTZELEVBQUU7UUFDN0QsUUFBc0IsQ0FBQyxlQUFlLENBQUMsVUFBQyxHQUFXLElBQWEsT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7UUFFdEUsSUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUM7UUFDckMsSUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBRXJDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVoRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLENBQUMsWUFBVSxxQkFBcUIsWUFBTyxZQUFjLEVBQUU7WUFDeEYsS0FBSyxFQUFFLFNBQVM7U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9