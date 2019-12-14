"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consoleFormat_1 = require("./consoleFormat");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZUZvcm1hdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbnNvbGVGb3JtYXQvY29uc29sZUZvcm1hdC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXVHO0FBRXZHLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUN4QixFQUFFLENBQUMseURBQXlELEVBQUU7UUFDMUQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBRTFCLE1BQU0sQ0FBQywrQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQVUsVUFBVSxjQUFTLENBQUMsQ0FBQztJQUMvRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBQ3pCLEVBQUUsQ0FBQywwREFBMEQsRUFBRTtRQUMzRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFFMUIsTUFBTSxDQUFDLGdDQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQVcsVUFBVSxjQUFTLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3ZCLEVBQUUsQ0FBQyx3REFBd0QsRUFBRTtRQUN6RCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFFMUIsTUFBTSxDQUFDLDhCQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBVyxVQUFVLGNBQVMsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO1FBQzVELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUUxQixNQUFNLENBQUMsaUNBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBVyxVQUFVLGNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==