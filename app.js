const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// asynchrome promt asking user to provider informations
const inputQuestions = async (inputs = []) => {
    const prompts = [
// intput to add employee name
        {
            name: "employeeName",
            message: "please enter the employee name!",
            valide: valideName
        },
// intput to added Employee ID
        {
            name: "employeeID",
            message: "please enter the employee ID!",
            valide: valideID
        },
// intput to add employee Email
        {
            name: "employeeEmail",
            message: "please enter the employee Email!",
            default: "employeea@mail.com",
            valide: valideEmail
        },
//intput to add employee Role
        {
            type: "list",
            name: "employeeRole",
            message: "please select the Employee Role!",
            choices: ["Manager", "Engineer", "Intern"]
        },
// intput to add manager office number
        {
            name: "officeNum",
            message: "please enter the office number!",
            when: function (answer) {
                return answer["employeeRole"] === "Manager"
            }
        },
        
//intput to adde employee guithub account
        {
            name: "github",
            message: "please enter the Employee Git hub!",
            when: function (answer) {
                return answer["employeeRole"] === "Engineer"
            }
        },
// input to add intern school name
        {
            name: "schoolname",
            message: "please enter the School Name",
            when: function (answer) {
                return answer["employeeRole"] === "Intern"
            }
        },
// if user want tp add more employee
        {
            type: "confirm",
            name: "more",
            message: "would you like to add more employeee?"
        }

    ]

// await prompt for addind more employee
    const { more, ...answer } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return more ? inputQuestions(newInputs) : newInputs;
}
// out put path  where the file generated will be strote
//Using __dirname is the absolute path to the directory containing the source file.
const outputpath = path.resolve(__dirname, "output", "index.html");
const render = require("./lib/htmlRenderer");

const main = async () => {
    const intputs = await inputQuestions();
    
    
    
}

