import executeUnlessFileExists from './executeUnlessFileExists';
import fs from 'fs';
jest.mock('fs');
describe('executeUnlessExists()', function () {
    it('should execute callback if asset exists', function () {
        fs.existsSync.mockReturnValue(true);
        var testCallback = jest.fn();
        executeUnlessFileExists('test.ts', testCallback);
        expect(testCallback).not.toBeCalled();
    });
    it("should not execute callback if asset doesn't exist", function () {
        fs.existsSync.mockReturnValue(false);
        var testCallback = jest.fn();
        executeUnlessFileExists('test.ts', testCallback);
        expect(testCallback).toBeCalledTimes(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVVubGVzc0ZpbGVFeGlzdHMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy9leGVjdXRlVW5sZXNzRmlsZUV4aXN0cy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sdUJBQXVCLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEIsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBQzlCLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtRQUN6QyxFQUFFLENBQUMsVUFBd0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRS9CLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUVqRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1FBQ3BELEVBQUUsQ0FBQyxVQUF3QixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFL0IsdUJBQXVCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWpELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9