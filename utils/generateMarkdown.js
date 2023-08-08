// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  }else{
    return `![Badge](https://img.shields.io/badge/License-${license}-brightgreen)`
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return '';
  }else{
    return `* [License](#license)`;
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return ``;
  }else {
    return `## License
    This project is licensed with ${license}`;
  }
}

//renders the comma seperated collaborators as a list
function renderCollabs(collabs){
  if(collabs){
    let title = `### Collaborators:
`;
    let collaborators = ``;
    collabs.split(',').forEach(name => {
      collaborators += `- ${name}
`;
    });
    return title + collaborators;
  }else{
    return '';
  }
  
}

//renders the comma seperated third party asset names and links
function renderThirdPartyAssets(assetNames, assetLinks){
  let finalizedSection = `### Third Party Assets:
`;

  if(!assetNames){
    return '';
  }else {
    let assetList = assetNames.split(',');
    let linksList = assetLinks.split(',');

    for(var i=0; i<assetList.length; i++){
      finalizedSection += `* [${assetList[i]}](${linksList[i]})
`;
    }
  }

  return finalizedSection
}

function renderInstallation(installationInstructions){
  let finalRender = '';
  installationInstructions.split(',').forEach((instruction => {
    finalRender += `- ${instruction}
`;
  }));

  return finalRender;
}

function renderTestInstructions(testDescription, testImageUrl, testImageAlt, testInstructions){
  let finalRender = `${testDescription}  
![${testImageAlt}](${testImageUrl})  
`;
  console.log("test instruction init__");
  testInstructions.split(',').forEach((instruction) => {
    finalRender += `- ${instruction}
`;
  });

  return finalRender;
}

function generateMarkdown(data) {
  return(
`
# ${renderLicenseBadge(data.license)}
# ${data.title}

![${data.imageAlt}](${data.imageUrl})
    
## Description
${data.description}

- Motivation: ${data.motivation}
- Purpose: ${data.purpose}
- What i learned: ${data.learned}

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Credits](#credits)  
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation
${renderInstallation(data.installation)}

## Usage
${data.usageDescription}  

### Usage Tutorial:  
![${data.usageGifAlt}](${data.usageGif})

## Testing
${renderTestInstructions(data.testDescription, data.testImageUrl, data.testImageAlt, data.testInstructions)}

## Credits  
${renderCollabs(data.collabs)}

${renderThirdPartyAssets(data.thirdPartyAssets, data.thirdPartyAssetsLinks)}

## Questions
Check out my [Github](https://github.com/${data.githubUser})  
You can email me at: [${data.email}](${data.email}) with any questions about the program.

${renderLicenseSection(data.license)}
`);
}

module.exports = generateMarkdown;
