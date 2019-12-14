"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var warn_1 = __importDefault(require("./warn"));
var consoleFormat_1 = require("../consoleFormat/consoleFormat");
var compose_1 = __importDefault(require("../compose/compose"));
// jest.mock('../log/log');
describe('warn', function () {
    it('should log text formatted as a warning', function () {
        var text = 'test';
        var logStub = jest.fn();
        console.log = logStub;
        warn_1.default(text);
        expect(logStub).toHaveBeenCalledWith(compose_1.default(consoleFormat_1.redConsoleText, consoleFormat_1.boldConsoleText)(text));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhcm4vd2Fybi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLGdFQUFpRjtBQUNqRiwrREFBeUM7QUFFekMsMkJBQTJCO0FBRTNCLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFDYixFQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDekMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUV0QixjQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsaUJBQU8sQ0FBQyw4QkFBYyxFQUFFLCtCQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==