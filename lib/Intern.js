const employee = require("./employee")

class Intern extends employee {
    contructor (name, id, email, school) {
        super(name,id,email)
        this.school = school
    }
    getRole(){
        return 'Intern'
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;