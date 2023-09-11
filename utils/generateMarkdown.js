function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributers](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## License
  ${data.license === 'None' ? 'No License.' : `<a href='https://choosealicense.com/licenses/${data.license}/' target='_blank'><img src='https://img.shields.io/badge/License-${data.license.toLowerCase()}-blue'></a>`}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  - https://github.com/${data.github}
  - ${data.email}
`;
}

module.exports = generateMarkdown;
