function generateMarkdown(data) {
  return `
# ${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-ff69b4.svg)

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
![Image](${data.avatar}&size=300)
<br>
Feel free to reach out to me via GitHub or email. Links provided below. Cheers!
<br>
GitHub: [${data.username}](https://github.com/${data.username})
<br>
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
