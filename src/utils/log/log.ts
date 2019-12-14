import { compose } from '../compose/compose';

const log = (string: string, ...formatters: LoggingFormatter[]): void => {
    let toLog = string;

    if (formatters.length) toLog = compose(...formatters.reverse())(string);

    console.log(toLog);
};

export default log;
