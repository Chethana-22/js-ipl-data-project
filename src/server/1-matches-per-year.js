const fs  = require('fs');
const data = require('./data.js');

function getMatchesPerYear(data){
    const matchesPerYear = {};
    data.matches.map(match =>{
        match.season in matchesPerYear ? matchesPerYear[match.season]++ : matchesPerYear[match.season]=1;
    });
    return matchesPerYear;
}

const resultArray = JSON.stringify(getMatchesPerYear(data));
fs.writeFile('src/public/output/1-matches-per-year.json', resultArray, "utf8", (err) =>{
    if(err){
        console.log("Error:", err);
        return;
    }
});
