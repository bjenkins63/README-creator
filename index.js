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
        `Apache License v2.0 - ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,
        `GNU General Public LIcense v3.0" - ![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`,
        `MIT License - ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
        `Mozilla Public License 2.0 - ![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`],},
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

______

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions?](#questions)


-----------

## Installation
${answers.installation}

___________

## Usage
${answers.usage}

___________

## License
${answers.license}

___________

## Contributing
${answers.contributing}
___________

## Tests
${answers.tests}
___________

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
