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
const axios = require("axios");

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
            type: "list",
            name: "license",
            message: "Choose one of the following license",
            choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3"]
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
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }
    ]);
}

userPrompt()

    .then(function (answers) {
        const queryUrl = `https://api.github.com/users/${answers.username}`;
        // axios call to GitHub API
        axios
            .get(queryUrl)
            .then(function (response) {
                // console.log(response)
                // console.log(response.data.avatar_url)
                answers.avatar = response.data.avatar_url;
                const markdown = generateMarkdown(answers);
                
                return writeFileAsync("goodREADME.md", markdown);
            })  
            .then(function () {
                console.log("Successfully wrote into README.md!");
            })
            .catch(function (err) {
                console.log(err);
            });

    });



