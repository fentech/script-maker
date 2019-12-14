const stringify = (string: string): string =>
  JSON.stringify(string).replace(/("|')/gm, `\$1`);

export default stringify;
