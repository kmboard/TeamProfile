const employee = require("./employee")

class Manager extends employee {
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