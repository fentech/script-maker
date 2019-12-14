const escapeQuotes = (string: string): string => string.replace(/("|')/gm, `\\$1`);

export default escapeQuotes;
