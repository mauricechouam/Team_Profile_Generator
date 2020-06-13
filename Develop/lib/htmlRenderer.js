// It create a Template based on App.js for the Html page
// The path module provides utilities for working with file and directory paths. 
const path = require("path");
// fs system module allows us to work with the file system on our computer.
const fs = require("fs");

// Using __dirname is the absolute path to the directory containing the source file
const templatedisplay = path.resolve(__dirname, "../templates");

// fucntion to generate html file with classes
let render = team => {
    // role type array in order to added different role 
    const role = [];
    // Append Manager to the team Array 
    role.push(team
        ///method creates a new array with all elements that pass the test implemented by the member function.
        .filter(member => member.getRole() === "Manager")
       // method creates a new array populated with the results of calling a manager function on every element in the calling array
        .map(manager => interrender(manager))

    );

      // Append Engineer to the team Array 
      role.push(team
        ///method creates a new array with all Engineer that pass the test implemented by the member function.
        .filter(member => member.getRole() === "Engineer")
       // method creates a new array populated with the results of calling a Engineer function on every element in the calling array
          .map(engineer => engineerrender(engineer))
          
    );

      // Append Intern to the team Array 
      role.push(team
        ///method creates a new array with all intern that pass the test implemented by the member function.
        .filter(member => member.getRole() === "Intern")
       // method creates a new array populated with the results of calling a intern function on every element in the calling array
          .map(intern => renderIntern(intern))
          
    );
    // The join() method creates and returns a new string by concatenating all of the elements in an array 
    return Mainrender(html.join(""))
}
// fucntion render manager
const interrender = manager => {
    let displayhtml = fs.readFileSync(path.resolve(templatedisplay, "manager.html"), "utf8");
    displayhtml = changeItem(displayhtml, "name", manager.getName());
    displayhtml = changeItem(displayhtml, "role", manager.getRole());
    displayhtml = changeItem(displayhtml, "email", manager.getEmail());
    displayhtml = changeItem(displayhtml, "id", manager.getID());
    displayhtml = changeItem(displayhtml, "officenum", manager.getOffice());
    return displayhtml;
};
// fucntion render Engineer
const engineerrender = engineer => {
    let displayhtml = fs.readFileSync(path.resolve(templatedisplay, "engineer.html"), "utf8");
    displayhtml = changeItem(displayhtml, "name", engineer.getName());
    displayhtml = changeItem(displayhtml, "role", engineer.getRole());
    displayhtml = changeItem(displayhtml, "email", engineer.getEmail());
    displayhtml = changeItem(displayhtml, "id", engineer.getID());
    displayhtml = changeItem(displayhtml, "github", engineer.getGitHub());
    return displayhtml;
};
    // fucntion render Intern use to appen intern Element on Html  
const interrender = intern => {
    let displayhtml = fs.readFileSync(path.resolve(templatedisplay, "intern.html"), "utf8");
    displayhtml = changeItem(displayhtml, "name", intern.getName());
    displayhtml = changeItem(displayhtml, "role", intern.getRole());
    displayhtml = changeItem(displayhtml, "email", intern.getEmail());
    displayhtml = changeItem(displayhtml, "id", intern.getID());
    displayhtml = changeItem(displayhtml, "schoolname", intern.getSchool());
    return displayhtml;
};

// Function Mainrender using to display the main HTML page with all Element 
const Mainrender = mainhtml => {
    const displayhtml = fs.readFileSync(path.resolve(templatedisplay, "main.html"), "utf8")
    return changeItem(displayhtml, "team", mainhtml);
    
};

// function ChangeItem
const changeItem = (example, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm")
    return example.replace(pattern, value);
    
}
modele.exports = render;
