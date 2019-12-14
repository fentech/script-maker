var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./log"], function (require, exports, log_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    log_1 = __importDefault(log_1);
    describe('log', function () {
        it('should call with first argument as the text to be logged', function () {
            var text = 'test';
            var logStub = jest.fn();
            console.log = logStub;
            log_1.default(text);
            expect(logStub).toHaveBeenCalledWith(text);
        });
        it('should call with first argument as the text to be logged', function () {
            var text = 'test';
            var formatter1 = jest.fn(function (str) { return str + '1'; });
            var formatter2 = jest.fn(function (str) { return str + '2'; });
            var logStub = jest.fn();
            console.log = logStub;
            log_1.default(text, formatter1, formatter2);
            expect(logStub).toHaveBeenCalledWith(text + '12');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvbG9nL2xvZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFFQSxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ1osRUFBRSxDQUFDLDBEQUEwRCxFQUFFO1lBQzNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFFdEIsYUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDBEQUEwRCxFQUFFO1lBQzNELElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztZQUNwQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsR0FBVyxJQUFhLE9BQUEsR0FBRyxHQUFHLEdBQUcsRUFBVCxDQUFTLENBQUMsQ0FBQztZQUMvRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQUMsR0FBVyxJQUFhLE9BQUEsR0FBRyxHQUFHLEdBQUcsRUFBVCxDQUFTLENBQUMsQ0FBQztZQUMvRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFFdEIsYUFBRyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=