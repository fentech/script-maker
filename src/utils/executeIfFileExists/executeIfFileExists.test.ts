import executeIfFileExists from './executeIfFileExists';
import fs from 'fs';

jest.mock('fs');

describe('executeIfExists()', (): void => {
    it('should execute callback if asset exists', (): void => {
        (fs.existsSync as jest.Mock).mockReturnValue(true);

        const testCallback = jest.fn();

        executeIfFileExists('test.ts', testCallback);

        expect(testCallback).toBeCalledTimes(1);
    });

    it("should not execute callback if asset doesn't exist", (): void => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);

        const testCallback = jest.fn();

        executeIfFileExists('test.ts', testCallback);

        expect(testCallback).not.toBeCalled();
    });
});
