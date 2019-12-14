"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stringify_1 = __importDefault(require("./stringify"));
describe('stringify', function () {
    it('should returns a stringified object with escaped quotes', function () {
        var string = 'test';
        expect(stringify_1.default(string)).toEqual(JSON.stringify(string).replace(/("|')/gm, "$1"));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMERBQW9DO0FBRXBDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbEIsRUFBRSxDQUFDLHlEQUF5RCxFQUFFO1FBQzFELElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUV0QixNQUFNLENBQUMsbUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=