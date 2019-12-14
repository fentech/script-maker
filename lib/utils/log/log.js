"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = __importDefault(require("../compose/compose"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZy9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrREFBeUM7QUFFekMsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFjO0lBQUUsb0JBQWlDO1NBQWpDLFVBQWlDLEVBQWpDLHFCQUFpQyxFQUFqQyxJQUFpQztRQUFqQyxtQ0FBaUM7O0lBQzFELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUVuQixJQUFJLFVBQVUsQ0FBQyxNQUFNO1FBQUUsS0FBSyxHQUFHLGlCQUFPLGVBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsR0FBRyxDQUFDIn0=