// eslint-disable-next-line @typescript-eslint/no-explicit-any
var compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (args) { return functions.reduceRight(function (args, fn) { return fn(args); }, args); };
};
export default compose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9jb21wb3NlL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOERBQThEO0FBQzlELElBQU0sT0FBTyxHQUFHO0lBQUMsbUJBQXdCO1NBQXhCLFVBQXdCLEVBQXhCLHFCQUF3QixFQUF4QixJQUF3QjtRQUF4Qiw4QkFBd0I7O0lBQUssT0FBQSxVQUFDLElBQVMsSUFBVSxPQUFBLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJLEVBQUUsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFSLENBQVEsRUFBRSxJQUFJLENBQUMsRUFBbkQsQ0FBbUQ7QUFBdkUsQ0FBdUUsQ0FBQztBQUV0SCxlQUFlLE9BQU8sQ0FBQyJ9