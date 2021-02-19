const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',},
    {
      type: 'input',
      name: 'description',
      message: 'Supply a description of your application?',},
    {
      type: 'input',
      name: 'installation',
      message: 'How is the applicaton installed?',},
    {
      type: 'input',
      name: 'usage',
      message: 'How is the application used?',},
    
    {
      type: "list",
      name: "license",
      message: "Choose your license type:",
      choices: [
        "Apache License v2.0",
        "GNU General Public LIcense v3.0",
        "MIT License",
        "N/A"],},
    {
      type: 'input',
      name: 'contributing',
      message: 'How to contribute?',},
    {
      type: 'input',
      name: 'tests',
      message: 'Have there been any tests? please list.',},
    {
      type: 'input',
      name: 'git',
      message: 'what is your Github address?',},
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',},
    
  ]);
};

const generateReadme = (answers) =>

`# ${answers.name}

## Description
${answers.description}

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Github](#git)

* [Email](#email)




-----------

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contribute
${answers.contributing}

# Questions?
*********

* [Github]${answers.git}

* [Email]mailto:${answers.email}`;


const init =()=>{
      promptUser()
      .then((answers) => writeFileAsync(`${answers.name}.md`, generateReadme(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
    };

    init();
