import log from './log';

describe('log', () => {
    it('should call with first argument as the text to be logged', (): void => {
        const text = 'test';
        const logStub = jest.fn();
        console.log = logStub;

        log(text);
        expect(logStub).toHaveBeenCalledWith(text);
    });

    it('should call with first argument as the text to be logged', (): void => {
        const text = 'test';
        const formatter1 = jest.fn((str: string): string => str + '1');
        const formatter2 = jest.fn((str: string): string => str + '2');
        const logStub = jest.fn();
        console.log = logStub;

        log(text, formatter1, formatter2);
        expect(logStub).toHaveBeenCalledWith(text + '12');
    });
});
