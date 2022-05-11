const employee = require("./employee")

class Engineer extends employee {
    contructor (name, id, email, github) {
        super(name,id,email)
        this.github = github
    }
    getRole(){
        return 'Engineer'
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer;