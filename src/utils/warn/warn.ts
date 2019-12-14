import { boldConsoleText, redConsoleText } from '../consoleFormat/consoleFormat';
import log from '../log/log';

const warn = (string: string): void => log(string, boldConsoleText, redConsoleText);

export default warn;
