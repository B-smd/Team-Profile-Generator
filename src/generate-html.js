const generateTeam = (team) => {
    console.log(team);
    // Create an empty array to push html elements on to and loop through the team data
    const html = [];
    // Create function for each type of employee that returns HTML data
    const generateManager = manager => {
    console.log(manager);
    let managerHtml =`
    <div Class="row">
    <div class="card bg-info justify-content-center align-items-center" style="width: 20rem;">
        <div class="col card-header">
            <h4>${manager.name}</h4>
            <h4>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon fill="#FF9800" points="24,37 19,31 19,25 29,25 29,31"></polygon><g fill="#FFA726"><circle cx="33" cy="19" r="2"></circle><circle cx="15" cy="19" r="2"></circle></g><path fill="#FFB74D" d="M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"></path><path fill="#FF5722" d="M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z"></path><g fill="#784719"><circle cx="28" cy="19" r="1"></circle><circle cx="20" cy="19" r="1"></circle></g><path fill="#CFD8DC" d="M29,31L29,31l-5,1l-5-1c0,0-11,2-11,13h32C40,33,29,31,29,31z"></path><polygon fill="#3F51B5" points="23,35 22,44 26,44 25,35 26,34 24,32 22,34"></polygon></svg>
            Manager</h4>
        </div>
        <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${manager.email}">${manager.email}</a></span></li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
    html.push(managerHtml);
}
const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHtml =`
    <div class="card bg-info justify-content-center align-items-center" style="width: 20rem;">
        <div class="col card-header">
            <h4>${engineer.name}</h4>
            <h4>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#EF6C00" d="M37.4,24.6l-11.6-2.2l-3.9-11.2l-3.8,1.3L22,23.6l-7.8,9l3,2.6l7.8-9l11.6,2.2L37.4,24.6z"></path><g fill="#FF9800"><path d="M24,19c-2.8,0-5,2.2-5,5c0,2.8,2.2,5,5,5s5-2.2,5-5C29,21.2,26.8,19,24,19z M24,26c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C26,25.1,25.1,26,24,26z"></path><path d="M40.7,27c0.2-1,0.3-2,0.3-3c0-1-0.1-2-0.3-3l3.3-2.4c0.4-0.3,0.6-0.9,0.3-1.4L40,9.8 c-0.3-0.5-0.8-0.7-1.3-0.4L35,11c-1.5-1.3-3.3-2.3-5.2-3l-0.4-4.1c-0.1-0.5-0.5-0.9-1-0.9h-8.6c-0.5,0-1,0.4-1,0.9L18.2,8 c-1.9,0.7-3.7,1.7-5.2,3L9.3,9.3C8.8,9.1,8.2,9.3,8,9.8l-4.3,7.4c-0.3,0.5-0.1,1.1,0.3,1.4L7.3,21C7.1,22,7,23,7,24 c0,1,0.1,2,0.3,3L4,29.4c-0.4,0.3-0.6,0.9-0.3,1.4L8,38.2c0.3,0.5,0.8,0.7,1.3,0.4L13,37c1.5,1.3,3.3,2.3,5.2,3l0.4,4.1 c0.1,0.5,0.5,0.9,1,0.9h8.6c0.5,0,1-0.4,1-0.9l0.4-4.1c1.9-0.7,3.7-1.7,5.2-3l3.7,1.7c0.5,0.2,1.1,0,1.3-0.4l4.3-7.4 c0.3-0.5,0.1-1.1-0.3-1.4L40.7,27z M24,35c-6.1,0-11-4.9-11-11c0-6.1,4.9-11,11-11s11,4.9,11,11C35,30.1,30.1,35,24,35z"></path></g></svg>
            Engineer</h4>
        </div>
        <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <span id="email"><a href="mailto: ${engineer.email}">${engineer.email}</a></span></li>
            <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>
    `;
    html.push(engineerHtml);
}
const generateIntern = intern => {
    console.log(intern);
    let internHtml =`
    <div class="card bg-info justify-content-center align-items-center" style="width: 20rem;">
        <div class="col card-header">
        <h4>${intern.name}</h4>
        <h4>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.032.883-.027 1.983"></path></svg>
        Intern</h4>
        </div>
        <ul class="list-group list-group-flush text">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto: ${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    </div>
    `;
    html.push(internHtml);
}
    // create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

    // join the HTML blocks
    return html.join('');
}
// export function to generate entire page
module.exports = team => {

return `  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
    <style>
    /* Make the image fully responsive */
    
      .jumbotron-fluid{
        width: 100%;
        height: 100%;
      
      }
      .img {
          width: 100%;
          height: 100%;
      }
      .card {
        width: 100%;
        height: 100%;
      }
    
      .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 50px;
        margin-right: 50px;
                }
    
      .card {
        padding: 20px;
        border-radius: 6px;
        background-color: white;
        color: lightcyan;
        margin: 15px;
        }
    
      .text {
        padding: 15px;
        border-radius: 6px;
        background-color: lightblue;
        color: black;
        margin: 15px;
        }
    
      .col {
        flex: 1;
        text-align: center;
                }
        </style>
    
        </head>
            <body>
                <div class="jumbotron jumbotron-fluid bg-secondary text-white">
                <div class="d-flex justify-content-around">
                <img src="../img/myteam.JPG" class="rounded-circle" alt="My Team" width="32%">
                <span class="navbar-brand mb-0 h1">
                <h1 class="display-4">My Team</h1>
                </span>
                </div>
                </div>
                <main> ${generateTeam(team)} </main>
            
            </body>
    </html>
        `;
}

