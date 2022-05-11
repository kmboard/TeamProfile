const employee = require('.lib/employee')

describe('Employee class', () => {
    it('should have employee name, id, and email', () => {
        const employee = new Employee('Lewis', '8765', 'lewis.d@test.com');

        expect(employee.name). toBe('Lewis');
        expect(employee.id).toBe('8765');
        expect(employee.email).toBe('lewis.D@test.come');
});

    it('should return values', () => {
        const employee = newEmployee('Lewis','8765','lewis.D@test.come')
        const name  = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();

        expect(name).toBe('Lewis')
        expect(id).toBe('8765')
        expect(email).toBe('lewis.D@test.come')
    });

    