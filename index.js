// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// const writeToFile = util.promisify(fs.writeFile);

function userPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        }
        
        
    ])
} 

userPrompt();
