const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const inputQuestions = async (inputs = []) => {
    const prompts = [
        {
            name: "employeeName",
            message: "please enter the employee name!",
            valide: valideName
        },
        {
            name: "employeeID",
            message: "please enter the employee ID!",
            valide: valideID
        },
        {
            name: "employeeEmail",
            message: "please enter the employee Email!",
            default: "employeea@mail.com",
            valide: valideEmail
        },
        {
            type: "list",
            name: "employeeRole",
            message: "please select the Employee Role!",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            name: "officeNum",
            message: "please enter the office number!",
            when: function (answer) {
                return answer["employeeRole"] === "Manager"
            }
        },
        {
            name: "github",
            message: "please enter the Employee Git hub!",
            when: function (answer) {
                return answer["employeeRole"] === "Engineer"
            }
        },
        {
            name: "schoolname",
            message: "please enter the School Name",
            when: function (answer) {
                return answer["employeeRole"] === "Intern"
            }
        },

        {
            type: "confirm",
            name: "more",
            message: "would you like to add more employeee?"
        }

    ]


    const { more, ...answer } = await inquirer.prompt(prompts);
    const newInputs = [...inputs, answers];
    return more ? inputQuestions(newInputs) : newInputs;
}

