const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const inputquestions = async (inputs = []) => {
    const prompts = [
    {
        name: 'employeeName',
        message: 'Please enter employee name: ',
        validate: validateName
    },
    {
        name: 'employeeId',
        message: 'Please enter employee id: ',
        validate: validateId
    },
    {
        name: 'employeeEmail',
        message: 'Please enter employee email: ',
        default: 'mail@mail.com',
        validate: validateEmail
    },
    {
        type: 'list',
        name: 'employeeType',
        message: "Please Select the Employee Role",
        choices: ['Manager','Engineer','Intern']
    },
    {
        name: 'officeNumber',
        message: 'Please enter the manager office number',
        when: function( answers ) {
            return answers['employeeType']==='Manager'
        }
    },
    {
        name: 'gitHub',
        message: 'Please enter gitHub account id',
        when: function( answers ) {
            return answers['employeeType']==='Engineer'
        }
    },
    {
        name: "school",
        message: 'Please enter The Intern school Name',
        when: function( answers ) {
            return answers['employeeType']==='Intern'
        }
    },
    {
        type: 'confirm',
        name: 'more',
        message: 'Would you like to enter more employees?'
    }
]
const {more, ...answers} = await inquirer.prompt(prompts);
const newInputs = [...inputs, answers];
return more ? inputquestions(newInputs) : newInputs;
}

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const main = async () => {
    const inputs = await inputquestions();

    let employee = [];
    for (let i in inputs) {
        if (inputs[i].employeeType==='Manager') {
            let nM = new Manager(inputs[i].employeeName, inputs[i].employeeId, inputs[i].employeeEmail, inputs[i].officeNumber)
            employee.push(nM);    
        } else if (inputs[i].employeeType==='Engineer') {
            let nE = new Engineer(inputs[i].employeeName, inputs[i].employeeId, inputs[i].employeeEmail, inputs[i].gitHub)
            employee.push(nE);
        } else {
            let nI = new Intern(inputs[i].employeeName, inputs[i].employeeId, inputs[i].employeeEmail, inputs[i].school)
            employee.push(nI);
        }
    }    

    fs.writeFile(outputPath, render(employee), err => {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      })
  };

function validateId(id)
{
    const reg = /^\d+$/;
    return reg.test(id) || "Invalid Id!! ID should be a number!";
}

function validateName(name) {
    return name !== '' || "Invalid Name!! Please enter Name"
}

function validateEmail(email) {
    
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) || "Invalid Please enter a valid email";
    
   }

main();