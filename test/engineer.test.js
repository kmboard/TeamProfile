const Engineer = require('../lib/engineer');

describe('engineer class'), () => {
    it('should have name, id, email and github', () => {
    const engineer = new Engineer ('Bobby', '987', 'bobbyw@test.com', 'bobby');

    expect(engineer.name).toBe('Bobby');
    expect(engineer.id).toBe('987');
    expect(engineer.email).toBe('bobbyw@text.com');
    expect(engineer.github).toBe('bobby'); 
    });

    it('should return property values via methods', () => {
        const engineer = new Engineer ('Bobby', '987', 'bobbyw@test.com', 'bobby');
        const name = engineer.getName();
        const id = engineer.getID();
        const email = engineer.getEmail();
        const github = engineer.getGithub();

        expect(name).toBe('Bobby');
        expect(id).toBe('987');
        expect(email).toBe('bobbyw@text.com');
        expect(github).toBe('bobby'); 
    })

    it('role should return "Enginner"', () => {
        const engineer = new Engineer ('Bobby', '987', 'bobbyw@test.com', 'bobby')
        const role = engineer.getRole();

        expect(role).toBe('Engineer');
    });

};