const employee = require("../lib/employee");

 const generateManager = (manager) => {
        return `
        <div class="card">
        <h3>${engineer.getRole()}</h3>
            <div class="card-body">
            <h3 class="card-title">${manager.getName()}</h3>
            <ul class="list-group">
             <li class="list-group-item">ID:${manager.getId()}</li>
            <li class="list-group-item">Email:<a href="${manager.getEmail()}"></a></li>
             <li class="list-group-item">Github: <a href="https://github.com/${manager.getGithub()}?tab=repositories"></a></li>
            </ul>
            </div>
        </div>
        `
    }
    const generateEngineer = (engineer) => {
        return `
        <div class="card">
            <h3>${engineer.getRole()}</h3>
            <div class="card-body>
            <h4 class="card-title">${engineer.getName()}</h3>
            <ul class="list-group">
             <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email:<a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
             <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}?tab=repositories">${engineer.getGithub()}</a></li>
            </ul>
            </div>
        </div>
        `
    }
    const generateIntern = (intern) => {
        return `
        <div class="card">
        <h3>${engineer.getRole()}</h3>
            <div class="card-body">
            <h3 class="card-title">${intern.getName()}</h3>
            <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email:<a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
         </ul>
         </div>
        </div
        `
    };

    employeeCards = (data) => {
        cardsArray = [];

        for(let i = 0; i < data.length; i++) {
            const employee = data[i];
            const role = employee.getRole();

            if (role === 'Manager') {
                const managerCard = generateManager(employee);
                    cardsArray.push(managerCard);
            }

            if (role === 'Engineer') {
                const engineerCard = generateEngineer(employee);
                    cardsArray.push(engineerCard);
            }

            if (role === 'Intern') {
                const internCard = generateIntern(employee);
                    cardsArray.push(internCard);
            }
        }
        return cardsArray.join('')
    };




module.exports = (data) => {
    return `    
    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <title>Team Profile</title>
        </head>
<body>
    <div class="containter-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
    <div class="row">
    ${employeeCards(data)}
    </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="script.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    `;
}
