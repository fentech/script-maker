var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./compose"], function (require, exports, compose_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    compose_1 = __importDefault(compose_1);
    describe('compose', function () {
        it('should call all but the last function with the return of the latter function', function () {
            var testFunc1 = jest.fn(function (string) { return string + '1'; });
            var testFunc2 = jest.fn(function (string) { return string + '2'; });
            var testArg = 'this';
            compose_1.default(testFunc1, testFunc2)(testArg);
            expect(testFunc1).toBeCalledWith(testArg + '2');
            expect(testFunc2).toBeCalledWith(testArg);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbXBvc2UvY29tcG9zZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFFQSxRQUFRLENBQUMsU0FBUyxFQUFFO1FBQ2hCLEVBQUUsQ0FBQyw4RUFBOEUsRUFBRTtZQUMvRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsTUFBYyxJQUFhLE9BQUEsTUFBTSxHQUFHLEdBQUcsRUFBWixDQUFZLENBQUMsQ0FBQztZQUNwRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsTUFBYyxJQUFhLE9BQUEsTUFBTSxHQUFHLEdBQUcsRUFBWixDQUFZLENBQUMsQ0FBQztZQUNwRSxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFFdkIsaUJBQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=