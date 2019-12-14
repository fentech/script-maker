var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./capitalize"], function (require, exports, capitalize_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    capitalize_1 = __importDefault(capitalize_1);
    describe('capitalize()', function () {
        it('should return the same string that was passed in  with the first letter upper-case', function () {
            var testString = 'test';
            expect(capitalize_1.default(testString)).toEqual('Test');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwaXRhbGl6ZS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NhcGl0YWxpemUvY2FwaXRhbGl6ZS50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFFQSxRQUFRLENBQUMsY0FBYyxFQUFFO1FBQ3JCLEVBQUUsQ0FBQyxvRkFBb0YsRUFBRTtZQUNyRixJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFFMUIsTUFBTSxDQUFDLG9CQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyJ9