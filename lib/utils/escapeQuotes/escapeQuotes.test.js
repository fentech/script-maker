import escapeQuotes from './escapeQuotes';
describe('escapeQuotes', function () {
    it('should escape quote single quotes by prepending them with a forward slash', function () {
        var testString = "This is called a 'test'.";
        // eslint-disable-next-line prettier/prettier
        var escapedTestString = "This is called a \\'test\\'.";
        expect(escapeQuotes(testString)).toEqual(escapedTestString);
    });
    it('should escape quote double quotes by prepending them with a forward slash', function () {
        var testString = 'This is called a "test".';
        // eslint-disable-next-line prettier/prettier
        var escapedTestString = 'This is called a \\"test\\".';
        expect(escapeQuotes(testString)).toEqual(escapedTestString);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNjYXBlUXVvdGVzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXNjYXBlUXVvdGVzL2VzY2FwZVF1b3Rlcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFDckIsRUFBRSxDQUFDLDJFQUEyRSxFQUFFO1FBQzVFLElBQU0sVUFBVSxHQUFHLDBCQUEwQixDQUFDO1FBQzlDLDZDQUE2QztRQUNqRCxJQUFNLGlCQUFpQixHQUFHLDhCQUE4QixDQUFDO1FBRXJELE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNoRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyRUFBMkUsRUFBRTtRQUM1RSxJQUFNLFVBQVUsR0FBRywwQkFBMEIsQ0FBQztRQUM5Qyw2Q0FBNkM7UUFDakQsSUFBTSxpQkFBaUIsR0FBRyw4QkFBOEIsQ0FBQztRQUVyRCxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9