var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../compose/compose"], function (require, exports, compose_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    compose_1 = __importDefault(compose_1);
    var log = function (string) {
        var formatters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            formatters[_i - 1] = arguments[_i];
        }
        var toLog = string;
        if (formatters.length)
            toLog = compose_1.default.apply(void 0, formatters.reverse())(string);
        console.log(toLog);
    };
    exports.default = log;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZy9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUVBLElBQU0sR0FBRyxHQUFHLFVBQUMsTUFBYztRQUFFLG9CQUFpQzthQUFqQyxVQUFpQyxFQUFqQyxxQkFBaUMsRUFBakMsSUFBaUM7WUFBakMsbUNBQWlDOztRQUMxRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7UUFFbkIsSUFBSSxVQUFVLENBQUMsTUFBTTtZQUFFLEtBQUssR0FBRyxpQkFBTyxlQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV4RSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztJQUVGLGtCQUFlLEdBQUcsQ0FBQyJ9