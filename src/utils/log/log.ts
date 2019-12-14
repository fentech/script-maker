import { compose } from '../compose/compose';

const log = (string: string, ...formatters: LoggingFormatter[]): void =>
  console.log(
    compose(...formatters)(string)
  );

export default log;
