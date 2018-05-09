const request = require('request');
const fs = require('fs');

const flags = require('./lista-partidos.json');

dataArr = flags.data;

const flagsArr = [];

dataArr.map(flagObj => {
  const awayImg = flagObj['awayTeamFlagImg'];
  const homeImg = flagObj['homeTeamFlagImg'];
  const awayTeamName = flagObj['awayTeamName'];
  const homeTeamName = flagObj['homeTeamName'];
  !flagsArr.includes(awayImg) && flagsArr.push([awayTeamName, awayImg]);
  !flagsArr.includes(homeImg) && flagsArr.push([homeTeamName, homeImg]);
});

flagsArr.forEach(flag => {
  const countryName = flag[0].replace(/\s+/g, '_').toLowerCase();
  const urlRequest = flag[1];
  request(urlRequest, { encoding: 'binary' }, function(error, response, body) {
    const filePath = `./flags/${countryName}.png`;
    fs.writeFile(filePath, body, { encoding: 'binary' }, function(err) {
      console.log('error-flag-file', err);
    });
  });
  // request(urlRequest).pipe(fs.createWriteStream(`./flags/${countryName}.png`));
});

// console.log('flags', flagsArr);
