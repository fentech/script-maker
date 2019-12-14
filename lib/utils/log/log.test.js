import log from './log';
describe('log', function () {
    it('should call with first argument as the text to be logged', function () {
        var text = 'test';
        var logStub = jest.fn();
        console.log = logStub;
        log(text);
        expect(logStub).toHaveBeenCalledWith(text);
    });
    it('should call with first argument as the text to be logged', function () {
        var text = 'test';
        var formatter1 = jest.fn(function (str) { return str + '1'; });
        var formatter2 = jest.fn(function (str) { return str + '2'; });
        var logStub = jest.fn();
        console.log = logStub;
        log(text, formatter1, formatter2);
        expect(logStub).toHaveBeenCalledWith(text + '12');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvbG9nL2xvZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQztBQUV4QixRQUFRLENBQUMsS0FBSyxFQUFFO0lBQ1osRUFBRSxDQUFDLDBEQUEwRCxFQUFFO1FBQzNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFFdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFO1FBQzNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsR0FBVyxJQUFhLE9BQUEsR0FBRyxHQUFHLEdBQUcsRUFBVCxDQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsR0FBVyxJQUFhLE9BQUEsR0FBRyxHQUFHLEdBQUcsRUFBVCxDQUFTLENBQUMsQ0FBQztRQUMvRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFFdEIsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=