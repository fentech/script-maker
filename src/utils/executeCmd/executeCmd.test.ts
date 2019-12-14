import { execSync } from 'child_process';
import executeCmd from './executeCmd';

jest.mock('child_process');

describe('executeCmd', (): void => {
    it('should resolve if command is valid', async (): Promise<void> => {
        (execSync as jest.Mock).mockReturnValue(true);
        let error: Error | string = '';

        await executeCmd('test').catch((e: Error): void => {
            error = e;
        });

        expect(error).toEqual('');
    });

    it('should reject with an error if command is invalid', async (): Promise<void> => {
        const testError = new Error('there was an error');
        (execSync as jest.Mock).mockImplementation((): void => {
            throw testError;
        });
        let error: Error | string = '';

        await executeCmd('test').catch((e: Error): void => {
            error = e;
        });

        expect(error).toEqual(testError);
    });
});
