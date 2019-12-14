var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./stringify"], function (require, exports, stringify_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    stringify_1 = __importDefault(stringify_1);
    describe('stringify', function () {
        it('should returns a stringified object with escaped quotes', function () {
            var string = 'test';
            expect(stringify_1.default(string)).toEqual(JSON.stringify(string).replace(/("|')/gm, "$1"));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5naWZ5LnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvc3RyaW5naWZ5L3N0cmluZ2lmeS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFFQSxRQUFRLENBQUMsV0FBVyxFQUFFO1FBQ2xCLEVBQUUsQ0FBQyx5REFBeUQsRUFBRTtZQUMxRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFdEIsTUFBTSxDQUFDLG1CQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEYsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyJ9