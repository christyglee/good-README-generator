const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Create prompt for user input
function userPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Please describe your project here."
        },
        {
            type: "input",
            name: "installation",
            message: "What programs do you need to install for your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
            type: "input",
            name: "license",
            message: "Provide a type of License used here (if any)."
        },
        {
            type: "input",
            name: "contributing",
            message: "List any contributing authors here."
        },
        {
            type: "input",
            name: "tests",
            message: "What did you do to test this project?"
        },
        {
            type: "input",
            name: "question1",
            message: "Include/paste your profile picture here."
        },
        {
            type: "input",
            name: "question2",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "question3",
            message: "What is your email address?"
        }
    ]);
} 

userPrompt()
    .then(function (answers) {
        const markdown = generateMarkdown(answers);
        return writeFileAsync("README.md", markdown);
    })
    .then(function(){
        console.log("Successfully wrote into README.md!");
    })
    .catch(function(err) {
        console.log(err);
    });


