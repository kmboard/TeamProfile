const fs = require('fs');
// const path = require('path')
const inquirer = require('inquirer');
const generateTeam = require('./assets/generate');


const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const employee = require('./lib/employee');

// const outputFolder = path.resolve(__dirname, 'output')
// const htmlName = path.join(outputFolder, "team.html")

const teamArr = []



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
        inquirer.prompt([
            {
            type: "input",
            message: "What is your office number",
            name: "officeNumber",
        },
        ]);


} else if (answer.role === "Engineer") {
    inquirer.prompt ([
    {
        type:'input',
        name:'github',
        message:'Github link?',
    }
])

} else if (answer.role === "Intern") {
    inquirer.prompt([
        {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        },

        {
            type:'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another Employee?',
            default: false
        }
    ])

    .then(employeeData => {
        let { name, id, email, role, github, officenumber, school, confirmAddEmployee} = employeeData;
    
        if (role === Manager) {
        employee = new Manager (name, id, email, officenumber)

         } else if (role === "Engineer") {
        employee = new Engineer (name, id, email, github)

         } else if (role === "Intern") {
         employee = new Intern (name, id, email, school)
         }

         teamArr.push(employee);

         if (confirmAddEmployee) {
             return addEmployee(teamArr); 
          } else  {
                    return teamArr;
             }
    })
};



function writeHTML() {
 fs.writeFileSync(htmlName, generateTeam(teamArr), 'utf-8');
}

function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
    writeHTML("index.html", generateTeam(userInput))
    }
    )};

init();