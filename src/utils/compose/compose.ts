// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compose = (...functions: Function[]) => (...args: any): any =>
    functions.reduceRight((args, fn) => fn(args), args);
