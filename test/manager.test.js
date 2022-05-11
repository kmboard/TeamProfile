const Manager = require('../lib/manager');

describe('Manager class', () => {
    it('should have name, id, email, and office number', () => {
        const manager = new Manager ('Phil', '123', 'PhilWill@test.com', '1');

        expect(manager.name).toBe('Phil')
        expect(manager.id).toBe('123')
        expect(manager.email).toBe('PhilWill@test.com')
        expect(manager.officeNumber).toBe('1')
    });

    it('should return property values via methods', () => {
        const manager = new Manager ('Phil', '123', 'PhilWill@test.com', '1');
        const name = manager.getName();
        const id = manager.getID();
        const email = manager.getEmail();
        const officeNumber = manager.getofficeNumber();

        expect(name).toBe('Phil');
        expect(id).toBe('123');
        expect(email).toBe('PhillWill@test.com');
        expect(officeNumber).toBe('1');
    });

    it('role should return "Manager', () => {
        const manager = new Manager ('Phil', '123', 'PhilWill@test.com', '1');
        const role = manager.getRole();

        expect(role).toBe('Manager');
        
    });
})