// It create a Template based on App.js for the Html page
// The path module provides utilities for working with file and directory paths. 
const path = require("path");
// fs system module allows us to work with the file system on our computer.
const fs = require("fs");

// Using __dirname is the absolute path to the directory containing the source file
const template = path.resolve(__dirname, "../templates");

// fucntion to generate html file with classes
const render = team => {
    // role type array in order to added different role 
    const role = [];
    // Append Manager to the team Array 
    role.push(team
        ///method creates a new array with all elements that pass the test implemented by the member function.
        .filter(member => member.getRole() === "Manager")
       // method creates a new array populated with the results of calling a manager function on every element in the calling array
        .map(manager => renderManager(manager))
    );

      // Append Engineer to the team Array 
      role.push(team
        ///method creates a new array with all Engineer that pass the test implemented by the member function.
        .filter(member => member.getRole() === "Engineer")
       // method creates a new array populated with the results of calling a Engineer function on every element in the calling array
        .map(engineer => renderEngineer(engineer))
    );

      // Append Intern to the team Array 
      role.push(team
        ///method creates a new array with all intern that pass the test implemented by the member function.
        .filter(member => member.getRole() === "Intern")
       // method creates a new array populated with the results of calling a intern function on every element in the calling array
        .map(intern => renderIntern(intern))
    );
    // The join() method creates and returns a new string by concatenating all of the elements in an array 
    return renderMain(html.join(""))

}

