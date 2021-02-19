// packages
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./generateMarkdown');


//questions to ask user 
const questions = [
    {
        type: "input",
        message: "What is the project's name?",
        name: "Title", 
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "Description", 
    },
    {
        type: "input",
        message: "What dependencies does the user need to install to run this app?",
        name: "Installation", 
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "Usage", 
    },
    {
        type: "input",
        message: "What command do you use to test this app?",
        name: "Test", 
    },
    {
        type: "input",
        message: "What license will be used?",
        name: "License", 
    },
    {
        type: "input",
        message: "Project Contributors",
        name: "Contributor", 
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "GitHub", 
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email", 
    } 
];

// function to write README file 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err);
        } else {
        console.log ("Success: ReadMe Created");
        } 
    })
}
// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)
        })
    }

// Function call to initialize app
init();