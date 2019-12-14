import warn from './warn';
import { boldConsoleText, redConsoleText } from '../consoleFormat/consoleFormat';
import compose from '../compose/compose';
// jest.mock('../log/log');
describe('warn', function () {
    it('should log text formatted as a warning', function () {
        var text = 'test';
        var logStub = jest.fn();
        console.log = logStub;
        warn(text);
        expect(logStub).toHaveBeenCalledWith(compose(redConsoleText, boldConsoleText)(text));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhcm4vd2Fybi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQUMxQixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pGLE9BQU8sT0FBTyxNQUFNLG9CQUFvQixDQUFDO0FBRXpDLDJCQUEyQjtBQUUzQixRQUFRLENBQUMsTUFBTSxFQUFFO0lBQ2IsRUFBRSxDQUFDLHdDQUF3QyxFQUFFO1FBQ3pDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=