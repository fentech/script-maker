"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = __importDefault(require("./compose"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbXBvc2UvY29tcG9zZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQWdDO0FBRWhDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDaEIsRUFBRSxDQUFDLDhFQUE4RSxFQUFFO1FBQy9FLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBQyxNQUFjLElBQWEsT0FBQSxNQUFNLEdBQUcsR0FBRyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ3BFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBQyxNQUFjLElBQWEsT0FBQSxNQUFNLEdBQUcsR0FBRyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ3BFLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUV2QixpQkFBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==