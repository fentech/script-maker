var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "child_process", "./executeCmd"], function (require, exports, child_process_1, executeCmd_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    executeCmd_1 = __importDefault(executeCmd_1);
    jest.mock('child_process');
    describe('executeCmd', function () {
        it('should resolve if command is valid', function () { return __awaiter(void 0, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        child_process_1.execSync.mockReturnValue(true);
                        error = '';
                        return [4 /*yield*/, executeCmd_1.default('test').catch(function (e) {
                                error = e;
                            })];
                    case 1:
                        _a.sent();
                        expect(error).toEqual('');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should reject with an error if command is invalid', function () { return __awaiter(void 0, void 0, void 0, function () {
            var testError, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        testError = new Error('there was an error');
                        child_process_1.execSync.mockImplementation(function () {
                            throw testError;
                        });
                        error = '';
                        return [4 /*yield*/, executeCmd_1.default('test').catch(function (e) {
                                error = e;
                            })];
                    case 1:
                        _a.sent();
                        expect(error).toEqual(testError);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUNtZC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2V4ZWN1dGVDbWQvZXhlY3V0ZUNtZC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHQSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRTNCLFFBQVEsQ0FBQyxZQUFZLEVBQUU7UUFDbkIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFOzs7Ozt3QkFDcEMsd0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxLQUFLLEdBQW1CLEVBQUUsQ0FBQzt3QkFFL0IscUJBQU0sb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFRO2dDQUNwQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOzRCQUNkLENBQUMsQ0FBQyxFQUFBOzt3QkFGRixTQUVFLENBQUM7d0JBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzs7OzthQUM3QixDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUU7Ozs7O3dCQUM5QyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDakQsd0JBQXNCLENBQUMsa0JBQWtCLENBQUM7NEJBQ3ZDLE1BQU0sU0FBUyxDQUFDO3dCQUNwQixDQUFDLENBQUMsQ0FBQzt3QkFDQyxLQUFLLEdBQW1CLEVBQUUsQ0FBQzt3QkFFL0IscUJBQU0sb0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFRO2dDQUNwQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOzRCQUNkLENBQUMsQ0FBQyxFQUFBOzt3QkFGRixTQUVFLENBQUM7d0JBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7OzthQUNwQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyJ9