var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./warn", "../consoleFormat/consoleFormat", "../compose/compose"], function (require, exports, warn_1, consoleFormat_1, compose_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    warn_1 = __importDefault(warn_1);
    compose_1 = __importDefault(compose_1);
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3dhcm4vd2Fybi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBSUEsMkJBQTJCO0lBRTNCLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDYixFQUFFLENBQUMsd0NBQXdDLEVBQUU7WUFDekMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUV0QixjQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsaUJBQU8sQ0FBQyw4QkFBYyxFQUFFLCtCQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUMifQ==