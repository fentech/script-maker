"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = __importDefault(require("./log"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvbG9nL2xvZy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXdCO0FBRXhCLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDWixFQUFFLENBQUMsMERBQTBELEVBQUU7UUFDM0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUV0QixhQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMERBQTBELEVBQUU7UUFDM0QsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBQyxHQUFXLElBQWEsT0FBQSxHQUFHLEdBQUcsR0FBRyxFQUFULENBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBQyxHQUFXLElBQWEsT0FBQSxHQUFHLEdBQUcsR0FBRyxFQUFULENBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUV0QixhQUFHLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==