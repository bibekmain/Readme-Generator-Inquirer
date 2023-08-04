// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return ``;
  }else{
    return `![Badge](https://img.shields.io/badge/License-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return ``;
  }else{
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ``;
  }else {
    return `## License
    This project is licensed with ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return(
`
# ${renderLicenseBadge(data.license)}
# ${data.title}

## Table Of Contents
* [Description](#description)
${renderLicenseLink(data.license)}
    
## Description
${data.description}

![${data.imageAlt}](${data.imageUrl})

${renderLicenseSection(data.license)}

`
  );
}

module.exports = generateMarkdown;
