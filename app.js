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
            message: "please enter the employee name",
            valide: valideName
        },
        {
            name: "employeeID",
            message: "please enter the employee ID",
            valide: valideID
        },
        {
            name: "employeeEmail",
            message: "please enter the employee Email",
            default: "employeea@mail.com",
            valide: valideEmail
        },
        {
            type: "list",
            name: "employeeRole",
            message: "please select the Employee Role",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            name: "officeNum",
            message: "please enter the office number",
            when: function (answer) {
                return answer["employeeRole"] === "Engineer"
            }   

        }


    ]
}

