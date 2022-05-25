const fs = require('fs');
// const path = require('path')
const inquirer = require('inquirer');
const generateTeam = require('./assets/generate');


const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require('./lib/employee');


// const outputFolder = path.resolve(__dirname, 'output')
// const htmlName = path.join(outputFolder, "team.html")

const teamArr = [];



function questions() {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Whats your name?',
        name: "name",
    },
    {
        type: 'list',
        message: 'Whats your role?',
        name: "role",
        choices: ["Manager", "Intern", "Engineer"]
    },
 
    {
        type:'input',
        message:'Whats your ID',
        name:'ID',
    },
    {
        type:'input',
        name:'email',
        message:'Input your email?',
    },
])

.then ((answers) => {

 if (answers.role === "Manager") {
    createManager()


} else if (answers.role === "Engineer") {
    createEngineer()


} else if (answers.role === "Intern") {
    createIntern()
}
})
}
function main() {
    return inquirer.prompt({
        {
            type: 'confirm',
            message: 'Would you like to add another team member',
        }
    })
}
function createManager() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
    },
    ])
    .then(data => {
        var manager = new Manager (data.name, data.id, data.email, data.officeNumber)
        teamArr.push(manager)
       main()
    })
};

function createEngineer() {
    inquirer.prompt ([
        {
            type:'input',
            name:'github',
            message:'Github link?',
        }
    ])
    .then(data => {
        var engineer = new Engineer (data.name, data.id, data.email, data.github)
        teamArr.push(engineer)
        main()
    })
};

function createIntern() {
    inquirer.prompt([
        {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        }
    ])
    .then(data => {
        var intern = new Intern (data.name, data.id, data.email, data.school)
        Intern = createIntern(Employee)
        teamArr.push(intern)
        main()
    })
};
        
   
 

function writeHTML() {
 fs.writeFileSync("index.html", generateTeam(teamArr), 'utf-8');
}

function init() {
    questions()
    .then(function(userInput) {
        writeHTML("index.html", generateTeam(userInput))
    }
)};

init()


