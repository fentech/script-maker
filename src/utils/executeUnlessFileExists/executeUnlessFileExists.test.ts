import executeUnlessFileExists from './executeUnlessFileExists';
import fs from 'fs';

jest.mock('fs');

describe('executeUnlessExists()', (): void => {
    it('should execute callback if asset exists', (): void => {
        (fs.existsSync as jest.Mock).mockReturnValue(true);

        const testCallback = jest.fn();

        executeUnlessFileExists('test.ts', testCallback);

        expect(testCallback).not.toBeCalled();
    });

    it("should not execute callback if asset doesn't exist", (): void => {
        (fs.existsSync as jest.Mock).mockReturnValue(false);

        const testCallback = jest.fn();

        executeUnlessFileExists('test.ts', testCallback);

        expect(testCallback).toBeCalledTimes(1);
    });
});
