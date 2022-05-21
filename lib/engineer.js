const employee = require("./employee")

class Engineer extends employee {
    contructor (name, id, email, github) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = github;
    }
    getRole(){
        return 'Engineer'
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer;