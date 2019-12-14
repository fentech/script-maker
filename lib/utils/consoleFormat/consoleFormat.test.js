import { boldConsoleText, greenConsoleText, redConsoleText, yellowConsoleText } from './consoleFormat';
describe('boldConsoleText', function () {
    it('should return the original string with bold bash markup', function () {
        var testString = 'test';
        expect(boldConsoleText(testString)).toEqual("\u001B[1m" + testString + "\u001B[0m");
    });
});
describe('greenConsoleText', function () {
    it('should return the original string with green bash markup', function () {
        var testString = 'test';
        expect(greenConsoleText(testString)).toEqual("\u001B[32m" + testString + "\u001B[0m");
    });
});
describe('redConsoleText', function () {
    it('should return the original string with red bash markup', function () {
        var testString = 'test';
        expect(redConsoleText(testString)).toEqual("\u001B[31m" + testString + "\u001B[0m");
    });
});
describe('yellowConsoleText', function () {
    it('should return the original string with yellow bash markup', function () {
        var testString = 'test';
        expect(yellowConsoleText(testString)).toEqual("\u001B[33m" + testString + "\u001B[0m");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUZvcm1hdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbnNvbGVGb3JtYXQvY29uc29sZUZvcm1hdC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdkcsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBQ3hCLEVBQUUsQ0FBQyx5REFBeUQsRUFBRTtRQUMxRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFFMUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFVLFVBQVUsY0FBUyxDQUFDLENBQUM7SUFDL0UsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUN6QixFQUFFLENBQUMsMERBQTBELEVBQUU7UUFDM0QsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFXLFVBQVUsY0FBUyxDQUFDLENBQUM7SUFDakYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN2QixFQUFFLENBQUMsd0RBQXdELEVBQUU7UUFDekQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBVyxVQUFVLGNBQVMsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO1FBQzVELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUUxQixNQUFNLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBVyxVQUFVLGNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==