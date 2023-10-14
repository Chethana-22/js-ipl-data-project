let data =require("./data.js");
const fs = require('fs');
const path = require('path'); 

let matchesWonData = {}
data.matches.forEach((row) => {
    const year = row.season;
    const winner = row.winner;

    if (matchesWonData[year]) {
      if (matchesWonData[year][winner]) {
        matchesWonData[year][winner]++;
      } else {
        matchesWonData[year][winner] = 1;
      }
    } else {
      matchesWonData[year] = { [winner]: 1 };
    }
  });


let jsonformat = JSON.stringify(matchesWonData);

fs.writeFile(path.join(__dirname,'..','..', 'src', 'public/output', 'matchesWonPerTeamPerYear.json'), jsonformat, "utf8", (err) => {
    if(err) {
        console.log("Error:", err);
        return ;
    }
});