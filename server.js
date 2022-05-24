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

const teamArr = [];



function questions() {
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


} else if (answer.role === "Engineer") {
    createEngineer()


} else if (answer.role === "Intern") {
    createIntern()

}

        // {
        //     type:'confirm',
        //     name: 'confirmAddEmployee',
        //     message: 'Would you like to add another Employee?',
        //     default: false
        // }
    // ])
    // };
})


//          teamArr.push(employee);

//          if (confirmAddEmployee) {
//              return addEmployee(teamArr); 
//           } else  {
//                     return teamArr;
//              }
//     })
}

function createManager() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your office number",
        name: "officeNumber",
    },
    ])
    .then(employee)
    
    } if (employee === Manager) {
        employee = new Manager (name, id, email, officenumber)
};

function createEngineer() {
    inquirer.prompt ([
        {
            type:'input',
            name:'github',
            message:'Github link?',
        }
    ])
    .then(employee) 
     } if (employee === "Engineer") {
        employee = new Enginner (name, id, email, github)
    };

function createIntern() {
    inquirer.prompt([
        {
        type: "input",
        message: "What school did you attend?",
        name: "school",
        }
    ])
        .then(employee) 
        } if (employee === "Intern") {
        employee = new Intern (name, id, email, school) 
     generateTeam(teamArr);
    };
        
   
        

function writeHTML() {
 fs.writeFileSync(htmlName, generateTeam(teamArr), 'utf-8');
}

function init() {
    questions()
    .then(function(userInput) {
    writeHTML("index.html", generateTeam(userInput))
    }
    )};
// 
init()