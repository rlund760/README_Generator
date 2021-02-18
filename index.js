// packages
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('');


//questions to ask user 
const questions = [
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
    }
    {
        type: "input",
        message: "",
        name: "", 
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
        console.log ("Success");
        }    
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