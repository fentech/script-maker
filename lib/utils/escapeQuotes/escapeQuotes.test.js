var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./escapeQuotes"], function (require, exports, escapeQuotes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    escapeQuotes_1 = __importDefault(escapeQuotes_1);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlUXVvdGVzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXNjYXBlUXVvdGVzL2VzY2FwZVF1b3Rlcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFFQSxRQUFRLENBQUMsY0FBYyxFQUFFO1FBQ3JCLEVBQUUsQ0FBQywyRUFBMkUsRUFBRTtZQUM1RSxJQUFNLFVBQVUsR0FBRywwQkFBMEIsQ0FBQztZQUM5Qyw2Q0FBNkM7WUFDakQsSUFBTSxpQkFBaUIsR0FBRyw4QkFBOEIsQ0FBQztZQUVyRCxNQUFNLENBQUMsc0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDJFQUEyRSxFQUFFO1lBQzVFLElBQU0sVUFBVSxHQUFHLDBCQUEwQixDQUFDO1lBQzlDLDZDQUE2QztZQUNqRCxJQUFNLGlCQUFpQixHQUFHLDhCQUE4QixDQUFDO1lBRXJELE1BQU0sQ0FBQyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyJ9