// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Gimmi a title:"
    },
    {
        type: "input",
        name: "description",
        message: "Now description:"
    },{
        type: "input",
        name: "imageAlt",
        message: "imageAlt"
    },{
        type: "input",
        name: "imageUrl",
        message: "The Url/path:"
    },
    {
        type: "list",
        name: "license",
        message: "Which license?",
        choices: [
            {name: "None"},
            {name: "Apache"},
            {name: "MIT"},
            {name: "GNU"},
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("--README generated--");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile("generatedREADME.md", response);
    });
}

// Function call to initialize app
init();
