const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateSite = require('./src/generate-html.js');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
    {   
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is your employee ID?',
         validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name:'email',
        message: 'What is your email?',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }

    },
    {
        type:'input',
        name:'officeNumber',
        message: 'What is your office number?',
        validate: officeNumber => {
            if (officeNumber) {
                return true;
            } else {
                console.log('Please enter your office number!');
                return false;
            }
        }
    },

]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
})
};

const promptMenu = () => {
    return inquirer.prompt([
        {        
            type:'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "add an engineer":
                    promptEngineer();
                    break;
                case "add an intern":
                    promptIntern();
                    break;
                default:
                    buildTeam();
            }

        });
};

const promptEngineer = () => {
    console.log(`
    Add a New Engineer
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of engineer?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
            } else {
                console.log('Please enter the name of engineer!');
                return false;
            }
        }
},
        {           
            type: 'input',
            name: 'employeeId',
            message:'Enter your employee ID!',
            validate: employeeId => {
                if (employeeId) {
                    return true;
            } else {
                console.log('Please enter your employee ID!');
                return false;
            }
        }
    },

        {          
            type: 'input',
            name: 'email',
            message:'Enter your email address!',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log (`
        Add a New Intern
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What the name of the intern?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }

            }
    
        },
        {           
            type: 'input',
            name: 'employeeId',
            message:'Enter your employee ID!',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What your email address?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter your school name');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    console.log(`
    Finished buiding my team!
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

promptManager();

