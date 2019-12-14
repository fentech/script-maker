import compose from './compose';

describe('compose', (): void => {
    it('should call all but the last function with the return of the latter function', (): void => {
        const testFunc1 = jest.fn((string: string): string => string + '1');
        const testFunc2 = jest.fn((string: string): string => string + '2');
        const testArg = 'this';

        compose(testFunc1, testFunc2)(testArg);

        expect(testFunc1).toBeCalledWith(testArg + '2');
        expect(testFunc2).toBeCalledWith(testArg);
    });
});
