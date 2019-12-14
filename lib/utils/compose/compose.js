"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (args) { return functions.reduceRight(function (args, fn) { return fn(args); }, args); };
};
exports.default = compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21wb3NlL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4REFBOEQ7QUFDOUQsSUFBTSxPQUFPLEdBQUc7SUFBQyxtQkFBd0I7U0FBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1FBQXhCLDhCQUF3Qjs7SUFBSyxPQUFBLFVBQUMsSUFBUyxJQUFVLE9BQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFDLElBQUksRUFBRSxFQUFFLElBQUssT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUSxFQUFFLElBQUksQ0FBQyxFQUFuRCxDQUFtRDtBQUF2RSxDQUF1RSxDQUFDO0FBRXRILGtCQUFlLE9BQU8sQ0FBQyJ9