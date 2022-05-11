const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./generate');


const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const questions = 
    inquirer.prompt([
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
        message:'ID',
    },
    {
        type:'input',
        name:'email',
        message:'Input your email?',
    }
]);

if (answers.role === "Manager") {
    const managerAns = inquirer
        .prompt([
            {
            type: "input",
            message: "What is your office number",
            name: "officeNumber",
        },
        ]);


} else if (answer.role === "Engineer") {
    const EngineerAns = inquirer
.prompt ([
    {
        type:'input',
        name:'github',
        message:'Github link?',
    }
])

} else if (answer.role === "Intern") {
    const internAns =  inquirer
    .prompt([
        {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        },
    ])
}

function writeHTML {
    fs.newEmployee ('index.html')
    generateTeam(newEmployee)
 
}

function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
    writeHTML("index.html", generateTeam(userInput))
    }
    )};

init();