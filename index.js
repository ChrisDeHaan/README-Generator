const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage of this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'APACHE-2.0', 'ISC', 'None'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Any contributors?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), () => console.log('README successfully generated!'))
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('README.md', answers)
        })
}

// Function call to initialize app
init();
