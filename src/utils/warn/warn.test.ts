import warn from './warn';
import { boldConsoleText, redConsoleText } from '../consoleFormat/consoleFormat';
import { compose } from '../compose/compose';

// jest.mock('../log/log');

describe('warn', () => {
    it('should log text formatted as a warning', (): void => {
        const text = 'test';
        const logStub = jest.fn();
        console.log = logStub;

        warn(text);
        expect(logStub).toHaveBeenCalledWith(compose(redConsoleText, boldConsoleText)(text));
    });
});
