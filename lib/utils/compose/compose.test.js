import compose from './compose';
describe('compose', function () {
    it('should call all but the last function with the return of the latter function', function () {
        var testFunc1 = jest.fn(function (string) { return string + '1'; });
        var testFunc2 = jest.fn(function (string) { return string + '2'; });
        var testArg = 'this';
        compose(testFunc1, testFunc2)(testArg);
        expect(testFunc1).toBeCalledWith(testArg + '2');
        expect(testFunc2).toBeCalledWith(testArg);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbXBvc2UvY29tcG9zZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUVoQyxRQUFRLENBQUMsU0FBUyxFQUFFO0lBQ2hCLEVBQUUsQ0FBQyw4RUFBOEUsRUFBRTtRQUMvRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsTUFBYyxJQUFhLE9BQUEsTUFBTSxHQUFHLEdBQUcsRUFBWixDQUFZLENBQUMsQ0FBQztRQUNwRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsTUFBYyxJQUFhLE9BQUEsTUFBTSxHQUFHLEdBQUcsRUFBWixDQUFZLENBQUMsQ0FBQztRQUNwRSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFdkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==