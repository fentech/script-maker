"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var escapeQuotes_1 = __importDefault(require("./escapeQuotes"));
describe('escapeQuotes', function () {
    it('should escape quote single quotes by prepending them with a forward slash', function () {
        var testString = "This is called a 'test'.";
        // eslint-disable-next-line prettier/prettier
        var escapedTestString = "This is called a \\'test\\'.";
        expect(escapeQuotes_1.default(testString)).toEqual(escapedTestString);
    });
    it('should escape quote double quotes by prepending them with a forward slash', function () {
        var testString = 'This is called a "test".';
        // eslint-disable-next-line prettier/prettier
        var escapedTestString = 'This is called a \\"test\\".';
        expect(escapeQuotes_1.default(testString)).toEqual(escapedTestString);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlUXVvdGVzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXNjYXBlUXVvdGVzL2VzY2FwZVF1b3Rlcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0VBQTBDO0FBRTFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDckIsRUFBRSxDQUFDLDJFQUEyRSxFQUFFO1FBQzVFLElBQU0sVUFBVSxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLDZDQUE2QztRQUNqRCxJQUFNLGlCQUFpQixHQUFHLDhCQUE4QixDQUFDO1FBRXJELE1BQU0sQ0FBQyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkVBQTJFLEVBQUU7UUFDNUUsSUFBTSxVQUFVLEdBQUcsMEJBQTBCLENBQUM7UUFDOUMsNkNBQTZDO1FBQ2pELElBQU0saUJBQWlCLEdBQUcsOEJBQThCLENBQUM7UUFFckQsTUFBTSxDQUFDLHNCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=