import executeIfFileExists from './executeIfFileExists';
import fs from 'fs';
jest.mock('fs');
describe('executeIfExists()', function () {
    it('should execute callback if asset exists', function () {
        fs.existsSync.mockReturnValue(true);
        var testCallback = jest.fn();
        executeIfFileExists('test.ts', testCallback);
        expect(testCallback).toBeCalledTimes(1);
    });
    it("should not execute callback if asset doesn't exist", function () {
        fs.existsSync.mockReturnValue(false);
        var testCallback = jest.fn();
        executeIfFileExists('test.ts', testCallback);
        expect(testCallback).not.toBeCalled();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUlmRmlsZUV4aXN0cy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2V4ZWN1dGVJZkZpbGVFeGlzdHMvZXhlY3V0ZUlmRmlsZUV4aXN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sbUJBQW1CLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEIsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQzFCLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtRQUN6QyxFQUFFLENBQUMsVUFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1FBQ3BELEVBQUUsQ0FBQyxVQUF3QixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFL0IsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9