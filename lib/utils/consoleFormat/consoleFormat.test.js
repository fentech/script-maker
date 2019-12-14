define(["require", "exports", "./consoleFormat"], function (require, exports, consoleFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('boldConsoleText', function () {
        it('should return the original string with bold bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_1.boldConsoleText(testString)).toEqual("\u001B[1m" + testString + "\u001B[0m");
        });
    });
    describe('greenConsoleText', function () {
        it('should return the original string with green bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_1.greenConsoleText(testString)).toEqual("\u001B[32m" + testString + "\u001B[0m");
        });
    });
    describe('redConsoleText', function () {
        it('should return the original string with red bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_1.redConsoleText(testString)).toEqual("\u001B[31m" + testString + "\u001B[0m");
        });
    });
    describe('yellowConsoleText', function () {
        it('should return the original string with yellow bash markup', function () {
            var testString = 'test';
            expect(consoleFormat_1.yellowConsoleText(testString)).toEqual("\u001B[33m" + testString + "\u001B[0m");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUZvcm1hdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbnNvbGVGb3JtYXQvY29uc29sZUZvcm1hdC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtRQUN4QixFQUFFLENBQUMseURBQXlELEVBQUU7WUFDMUQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBRTFCLE1BQU0sQ0FBQywrQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQVUsVUFBVSxjQUFTLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBQ3pCLEVBQUUsQ0FBQywwREFBMEQsRUFBRTtZQUMzRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFFMUIsTUFBTSxDQUFDLGdDQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQVcsVUFBVSxjQUFTLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1FBQ3ZCLEVBQUUsQ0FBQyx3REFBd0QsRUFBRTtZQUN6RCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFFMUIsTUFBTSxDQUFDLDhCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBVyxVQUFVLGNBQVMsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7UUFDMUIsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO1lBQzVELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUUxQixNQUFNLENBQUMsaUNBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBVyxVQUFVLGNBQVMsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMifQ==