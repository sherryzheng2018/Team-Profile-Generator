const fs = require('fs');
const inquirer = require('inquirer');

const generateTeam = require("./util/generateHtml");
const Manager = require('./lib/Manager')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// const manager1 = new Manager('Monica Geller', '1', 'monica@friends.com', '001');
let team = [];

function buildTeam() {
    inquirer.prompt([
        {
            name: "role",
            message: 'Select a team member\'s role: ',
            type: "list",
            choices: ["Engineer", "Intern", "Complete"]
        }
    ]).then(answers => {
        switch (answers.role) {
            case "Engineer":
                console.log("Add a engineer")
                addEngineer();
                break;

            case "Intern":
                console.log("Add an intern")
                addIntern();
                break;

            default:
                console.log("All done!")
                const outputdir = './output';

                if (!fs.existsSync(outputdir)){
                    fs.mkdirSync(outputdir);
                }

                fs.writeFile("./output/index.html", generateTeam(team), (err) =>
                    err ? console.log(err) : console.log('Success!')
                );
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the manager's name?",
            type: "input"
        }, 
        {
            name: 'id',
            message: "What is the manager's id number?",
            type: "input"
        },
        {
            name: 'officeNum',
            message: "What is the manager's office number?",
            type: "input"
        },
        {
            name: 'email',
            message: "What is the manager's email?",
            type: "input"
        },
    ]).then(({ name, id, officeNum, email }) => {
        console.log(name);
        const mgr = new Manager(name, id, email, officeNum);
        team.push(mgr)
        console.log(mgr);
        buildTeam();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the engineer's name?",
            type: "input"
        },
        {
            name: 'id',
            message: "What is the engineer's id number?",
            type: "input"
        },
        {
            name: 'github',
            message: "What is the engineer's GitHub username?",
            type: "input"
        },
        {
            name: 'email',
            message: "What is the engineer's email?",
            type: "input"
        },
    ]).then(({ name, id, github, email }) => {
        console.log(name);
        const egn = new Engineer(name, id, email,github);
        team.push(egn)
        console.log(egn);
        buildTeam();
    })
}

function addIntern() {
    inquirer.prompt([
        {
        name: "name",
        message: "What is the intern's name?",
        type: "input"
        },
        {
            name: 'id',
            message: "What is the intern's id number?",
            type: "input"
        },
        {
            name: 'school',
            message: "What is the intern's school name?",
            type: "input"
        },
        {
            name: 'email',
            message: "What is the intern's email?",
            type: "input"
        },
    ]).then(({ name, id, school, email }) => {
        console.log(name);
        const Int = new Intern(name, id, email, school);
        team.push(Int)
        console.log(Int);
        buildTeam();
    })
}

addManager()



