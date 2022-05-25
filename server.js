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


//          teamArr.push(employee);

//          if (confirmAddEmployee) {
//              return addEmployee(teamArr); 
//           } else  {
//                     return teamArr;
//              }
//     })
// }

function createManager() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
    },
    ])
    .then(answers => {
        var manager = new Manager (answers.name, anwsers.id, answers.email, answers.officenumber)
        Manager = createManager(Employee)
        teamArr.push(manager)
       questions()
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
    .then(answers => {
        var engineer = new Engineer (answers.name, anwsers.id, answers.email, answers.github)
        Engineer = createEngineer(Employee)
        teamArr.push(engineer)
        questions()
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
    .then(answers => {
        var intern = new Intern (answers.name, anwsers.id, answers.email, answers.school)
        Intern = createIntern(Employee)
        teamArr.push(intern)
        questions()
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


