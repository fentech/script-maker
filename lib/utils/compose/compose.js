define(["require", "exports"], function (require, exports) {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21wb3NlL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsOERBQThEO0lBQzlELElBQU0sT0FBTyxHQUFHO1FBQUMsbUJBQXdCO2FBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtZQUF4Qiw4QkFBd0I7O1FBQUssT0FBQSxVQUFDLElBQVMsSUFBVSxPQUFBLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJLEVBQUUsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsRUFBRSxJQUFJLENBQUMsRUFBbkQsQ0FBbUQ7SUFBdkUsQ0FBdUUsQ0FBQztJQUV0SCxrQkFBZSxPQUFPLENBQUMifQ==