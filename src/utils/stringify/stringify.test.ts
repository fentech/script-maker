import stringify from './stringify';

describe('stringify', (): void => {
    it('should returns a stringified object with escaped quotes', (): void => {
        const string = 'test';

        expect(stringify(string)).toEqual(JSON.stringify(string).replace(/("|')/gm, `\$1`));
    });
});
