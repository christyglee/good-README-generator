function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}
<br>
## Table of Contents
* [Installation](#installation)
<br>
* [Usage](#usage)
<br>
* [License](#license)
<br>
* [Tests](#tests)
<br>
* [Contributing](#contributing)
<br>
* [Tests](#tests)
<br>
* [Questions](#questions)
<br>

## Installation
${data.installation}
<br>
## Usage
${data.usage}
<br>
## License
${data.license}
<br>
## Contributing Authors
${data.contributing}
<br>
## Tests
${data.tests}
<br>
## Questions?
${data.question1}
<br>
${data.question2}
<br>
${data.question3}
`;
}

module.exports = generateMarkdown;
