declare global {
  type LoggingFormatter = (string: string) => string;
}

export const redConsoleText: LoggingFormatter = (string) =>
  `\x1b[31m${string}\x1b[0m`;
export const greenConsoleText: LoggingFormatter = (string) =>
  `\x1b[32m${string}\x1b[0m`;
export const yellowConsoleText: LoggingFormatter = (string) =>
  `\x1b[33m${string}\x1b[0m`;
export const boldConsoleText: LoggingFormatter = (string) =>
  `\x1b[1m${string}\x1b[0m`;
