const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the application?',
    },
     {
      type: 'input',
      name: 'description',
      message: 'What is the purpose of the application?',
    },

    {
      type: 'input',
      name: 'instructions',
      message: 'How is the applicaton used?',
    },
  
    {
      type: 'input',
      name: 'credit',
      message: 'Who is credited?',
    },

    {
      type: "checkbox",
      name: "license",
      message: "Choose your license type:",
      choices: [
        "Apache License v2.0",
      "GNU General Public LIcense v3.0",
      "MIT License", "N/A"],
    },

    {
      type: 'input',
      name: 'issues',
      message: 'How to report issues?',
    },

    {
      type: 'input',
      name: 'linkedin',
      message: 'What is your LinkedIn address?',
    },

    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },

    {
      type: 'input',
      name: 'contributions',
      message: 'How to make a contribution?',
    },
  ]

  ).then(( {
    title,
    installation,
    instructions,
    credit,
    license,
    linkedin,
    email,
    contribution
  })=>
  {

    const template = `# ${title}
    
    *[Installation](#installation)
    *[Usage](#usage)
    *[Contribution](#contribution)
    *[Credit](#credit)
    *[License](#license)
    #Installation
    ${installation}
    ##Usage
    ${usage}
    ##Contribution
    ${contribution}
    ##Instructions
    ${instructions}
    ##Credits
    ${credit}
    ##License
    ${license}

    #Contact
    *Github: ${git}
    *LinkedIn: ${linkedin}
    *Email: ${email}`;


createNewFile (title, template);
});

function createNewFile(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split(' '), join('')}.md` , data,) 
   if(err){
      console.log(err)
    }
    console.log(`Your README file has been generated!`);

  }
      

  


  // function generateMarkdown(data) {
  //   return `${ answers.name }
  
  // ## Description
  // ${ answers.description}
  
  
  // ## Installation
  
  
  // ## Usage
  
  
  // ## Contributing
  
  
  // ## License
  // ${ answers.license }`
  // ;}
  

  

  // .then((answers) => {
  //   const readmeContent = generateMarkdown(answers);

  //   fs.writeFile('README.md', readmeContent, (err) =>
  //     err ? console.log(err) : console.log('Successfully created README.md!')
  //   );
  // });

  // module.exports = generateMarkdown;
