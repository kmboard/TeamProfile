const Employee = require("./employee")

class Manager extends Employee {
    contructor (name, id, email, officeNumber) {
       this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Engineer'
    }
    getofficeNumber() {
        return this.officeNumber
    }
}

module.exports = new Manager;