const fs  = require('fs');
const Papa = require("papaparse");

const getMatchesPerYear = require('./src/server/1-matches-per-year.js');
const getMatchesWonPerYear = require('./src/server/2-matchesWonPerTeam.js');
const getExtraRuns = require('./src/server/3-extraRuns.js');
const getTop10Bowlers = require('./src/server/4-top10Bowlers.js');
const getWonTossAndMatch = require('./src/server/5-wonTossAndMatch.js');
const getplayerOfMatch = require('./src/server/6-playerOfMatch.js');
const getStrikeRate = require('./src/server/7-strikeRate.js');
const getplayerDismissed = require('./src/server/8-highestDismissed.js');
const getBestBowlerEconomyInSuperOver = require('./src/server/9-highestEconomyPlayer.js');
function readCsv(file){
    const csvData = fs.readFileSync(file, 'utf-8');
    const {data } = Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
    });
    return data;
}

function writefile(file, resultArray){
    fs.writeFile(file, resultArray, "utf8", (err) =>{
        if(err){
            console.log("Error:", err);
            return;
        }
    });
}

const matches = readCsv('src/data/matches.csv');
const deliveries = readCsv('src/data/deliveries.csv');

writefile('src/public/output/1-matches-per-year.json',JSON.stringify(getMatchesPerYear(matches),null,2));
writefile('src/public/output/2-matchesWonPerTeamPerYear.json', JSON.stringify(getMatchesWonPerYear(matches)),null,2);
writefile('src/public/output/3-extraRunsPerTeam2016.json', JSON.stringify(getExtraRuns(matches, deliveries)), null,2);
writefile('src/public/output/4-top10Economy.json', JSON.stringify(getTop10Bowlers(matches, deliveries)), null, 2);
writefile('src/public/output/5-wonTossAndMatch.json',JSON.stringify(getWonTossAndMatch(matches)), null , 2);
writefile('src/public/output/6-playerOfTheMatch.json',JSON.stringify(getplayerOfMatch(matches)), null, 2);
writefile('src/public/output/7-strikeRate.json', JSON.stringify(getStrikeRate(matches, deliveries)), null, 2);
writefile('src/public/output/8-highestDismissedPlayer.json',JSON.stringify(getStrikeRate(matches, deliveries)), null, 2);
writefile('src/public/output/9-bestBowlerEconomyInSuperOver.json',JSON.stringify(getBestBowlerEconomyInSuperOver(deliveries)), null, 2);
