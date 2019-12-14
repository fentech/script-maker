declare global {
    type LoggingFormatter = (string: string) => string;
}
export declare const redConsoleText: LoggingFormatter;
export declare const greenConsoleText: LoggingFormatter;
export declare const yellowConsoleText: LoggingFormatter;
export declare const boldConsoleText: LoggingFormatter;
