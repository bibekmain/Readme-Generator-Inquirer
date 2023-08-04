
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const initQuestions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project:"
    },
    {
        type: "input",
        name: "description",
        message: "Lets start with a short description of the project:"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for the project:"
    },
    {
        type: "input",
        name: "purpose",
        message: "What problem does this project solve:"
    },
    {
        type: "input",
        name: "learned",
        message: "What did you learn from this project:"
    },
    {
        type: "input",
        name: "imageUrl",
        message: "The URL/path to the thumbnail image:"
    },
    {
        type: "input",
        name: "imageAlt",
        message: "Thumbnail image alt:"
    },
    {
        type: "input",
        name: "usageDescription",
        message: "A general description on how to use the app:"
    },
    {
        type: "input",
        name: "usageGif",
        message: "URL/path for usage GIF:"
    },
    {
        type: "input",
        name: "usageGifAlt",
        message: "Now an alt message for the GIF:"
    },
    {
        type: "input",
        name: "collabs",
        message: "Enter all of your collaborators seperated by commas:"
    },
    {
        type: "input",
        name: "thirdPartyAssets",
        message: "Enter your third party assets used seperated by commas:"
    },
    {
        type: "input",
        name: "thirdPartyAssetsLinks",
        message: "Enter the respective links to each third party asset used seperated by commas:"
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use",
        choices: [
            {name: "None"},
            {name: "Apache"},
            {name: "MIT"},
            {name: "GPL"},
        ]
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("--README Generated--");
        }
    });
}

function init() {
    inquirer.prompt(initQuestions).then((response) => {
        console.log(response);
        writeToFile("generatedREADME.md", response);
    });
}

// Function call to initialize app
init();
