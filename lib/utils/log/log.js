import compose from '../compose/compose';
var log = function (string) {
    var formatters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        formatters[_i - 1] = arguments[_i];
    }
    var toLog = string;
    if (formatters.length)
        toLog = compose.apply(void 0, formatters.reverse())(string);
    console.log(toLog);
};
export default log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZy9sb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFFekMsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFjO0lBQUUsb0JBQWlDO1NBQWpDLFVBQWlDLEVBQWpDLHFCQUFpQyxFQUFqQyxJQUFpQztRQUFqQyxtQ0FBaUM7O0lBQzFELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUVuQixJQUFJLFVBQVUsQ0FBQyxNQUFNO1FBQUUsS0FBSyxHQUFHLE9BQU8sZUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUM7QUFFRixlQUFlLEdBQUcsQ0FBQyJ9