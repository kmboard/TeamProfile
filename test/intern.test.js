const Intern = require('../lib/Intern');

describe('Intern class'), () => {
    it('should have name, id, email and school', () => {
    const intern = new Intern ('Bobby', '987', 'bobbyw@test.com', 'HU');

    expect(intern.name).toBe('Bobby');
    expect(intern.id).toBe('987');
    expect(intern.email).toBe('bobbyw@text.com');
    expect(intern.school).toBe('HU'); 
    });

    it('should return property values via methods', () => {
        const intern = new Intern ('Bobby', '987', 'bobbyw@test.com', 'HU');
        const name = intern.getName();
        const id = intern.getID();
        const email = intern.getEmail();
        const school = intern.getSchool();

        expect(name).toBe('Bobby');
        expect(id).toBe('987');
        expect(email).toBe('bobbyw@text.com');
        expect(school).toBe('HU'); 
    })

    it('role should return "Intern"', () => {
        const intern = new Intern ('Bobby', '987', 'bobbyw@test.com', 'HU')
        const role = intern.getRole();

        expect(role).toBe('Intern');
    });

};