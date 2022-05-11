const employee = require("./employee")

class Manager extends employee {
    contructor (name, id, email, officeNumber) {
        super(name,id,email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Engineer'
    }
    getofficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;