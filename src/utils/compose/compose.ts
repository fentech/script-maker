// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compose = (...functions: Function[]) => (...args: any[]): any =>
  functions.reduceRight((arg, fn) => fn(arg), args);
