// this is html renderer - it creates a generatefile based on results of inuirer in app.js for the html file ready for fs.writeFile
const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const team = [];

  team.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))

  );
  team.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))

  );
  team.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
    
  );

  return renderMain(team.join(""));

};

const renderManager = manager => {
  let generatefile = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  generatefile = changeitem(generatefile, "name", manager.getName());
  generatefile = changeitem(generatefile, "role", manager.getRole());
  generatefile = changeitem(generatefile, "email", manager.getEmail());
  generatefile = changeitem(generatefile, "id", manager.getId());
  generatefile = changeitem(generatefile, "officeNumber", manager.getOffice());
  return generatefile;
};

const renderEngineer = engineer => {
  let generatefile = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  generatefile = changeitem(generatefile, "name", engineer.getName());
  generatefile = changeitem(generatefile, "role", engineer.getRole());
  generatefile = changeitem(generatefile, "email", engineer.getEmail());
  generatefile = changeitem(generatefile, "id", engineer.getId());
  generatefile = changeitem(generatefile, "github", engineer.getGithub());
  return generatefile;
};

const renderIntern = intern => {
  let generatefile = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  generatefile = changeitem(generatefile, "name", intern.getName());
  generatefile = changeitem(generatefile, "role", intern.getRole());
  generatefile = changeitem(generatefile, "email", intern.getEmail());
  generatefile = changeitem(generatefile, "id", intern.getId());
  generatefile = changeitem(generatefile, "school", intern.getSchool());
  return generatefile;
};

const renderMain = html => {
  const generatefile = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return changeitem(generatefile, "team", html);
};

const changeitem = (generatefile, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return generatefile.replace(pattern, value);
};

module.exports = render;