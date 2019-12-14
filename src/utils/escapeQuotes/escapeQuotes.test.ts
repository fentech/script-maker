import escapeQuotes from './escapeQuotes';

describe('escapeQuotes', (): void => {
    it('should escape quote single quotes by prepending them with a forward slash', (): void => {
        const testString = "This is called a 'test'.";
        // eslint-disable-next-line prettier/prettier
    const escapedTestString = "This is called a \\'test\\'.";

        expect(escapeQuotes(testString)).toEqual(escapedTestString);
    });

    it('should escape quote double quotes by prepending them with a forward slash', (): void => {
        const testString = 'This is called a "test".';
        // eslint-disable-next-line prettier/prettier
    const escapedTestString = 'This is called a \\"test\\".';

        expect(escapeQuotes(testString)).toEqual(escapedTestString);
    });
});
