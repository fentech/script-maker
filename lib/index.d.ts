#!/usr/bin/env ts-node
declare module 'utils/capitalize/capitalize' {
    const capitalize: (string: string) => string;
    export default capitalize;
}
declare module 'utils/compose/compose' {
    const compose: (...functions: Function[]) => (args: any) => any;
    export default compose;
}
declare module 'utils/consoleFormat/consoleFormat' {
    global {
        type LoggingFormatter = (string: string) => string;
    }
    export const redConsoleText: LoggingFormatter;
    export const greenConsoleText: LoggingFormatter;
    export const yellowConsoleText: LoggingFormatter;
    export const boldConsoleText: LoggingFormatter;
}
declare module 'utils/executeCmd/executeCmd' {
    const executeCmd: (cmd: string) => Promise<void | Error>;
    export default executeCmd;
}
declare module 'utils/createFile/createFile' {
    const createFile: (content: string, path: string) => void;
    export default createFile;
}
declare module 'utils/escapeQuotes/escapeQuotes' {
    const escapeQuotes: (string: string) => string;
    export default escapeQuotes;
}
declare module 'utils/executeIfFileExists/executeIfFileExists' {
    const executeIfFileExists: (assetPathToCheck: string, callback: () => void) => any;
    export default executeIfFileExists;
}
declare module 'utils/executeUnlessFileExists/executeUnlessFileExists' {
    const executeUnlessFileExists: (assetPathToCheck: string, callback: () => void) => any;
    export default executeUnlessFileExists;
}
declare module 'utils/log/log' {
    const log: (string: string, ...formatters: LoggingFormatter[]) => void;
    export default log;
}
declare module 'utils/stringify/stringify' {
    const stringify: (string: string) => string;
    export default stringify;
}
declare module 'utils/warn/warn' {
    const warn: (string: string) => void;
    export default warn;
}
declare module 'index' {
    import capitalize from 'utils/capitalize/capitalize';
    import compose from 'utils/compose/compose';
    import {
        boldConsoleText,
        greenConsoleText,
        redConsoleText,
        yellowConsoleText,
    } from 'utils/consoleFormat/consoleFormat';
    import createFile from 'utils/createFile/createFile';
    import escapeQuotes from 'utils/escapeQuotes/escapeQuotes';
    import executeCmd from 'utils/executeCmd/executeCmd';
    import executeIfFileExists from 'utils/executeIfFileExists/executeIfFileExists';
    import executeUnlessFileExists from 'utils/executeUnlessFileExists/executeUnlessFileExists';
    import log from 'utils/log/log';
    import stringify from 'utils/stringify/stringify';
    import warn from 'utils/warn/warn';
    export {
        boldConsoleText,
        capitalize,
        compose,
        createFile,
        escapeQuotes,
        executeCmd,
        executeIfFileExists,
        executeUnlessFileExists,
        greenConsoleText,
        log,
        redConsoleText,
        stringify,
        warn,
        yellowConsoleText,
    };
}
declare module 'generators/component/component' {}
declare module 'utils/capitalize/capitalize.test' {}
declare module 'utils/compose/compose.test' {}
declare module 'utils/consoleFormat/consoleFormat.test' {}
declare module 'utils/createFile/createFile.test' {}
declare module 'utils/escapeQuotes/escapeQuotes.test' {}
declare module 'utils/executeCmd/executeCmd.test' {}
declare module 'utils/executeIfFileExists/executeIfFileExists.test' {}
declare module 'utils/executeUnlessFileExists/executeUnlessFileExists.test' {}
declare module 'utils/log/log.test' {}
declare module 'utils/stringify/stringify.test' {}
declare module 'utils/warn/warn.test' {}
