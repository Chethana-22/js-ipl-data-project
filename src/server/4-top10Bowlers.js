const fs  = require('fs');
const data = require('./data.js');

let ids2015 = new Set();

data.matches.map(match =>{
    if(match.season == "2015"){3
        ids2015.add(match.id);
    }
});

let noOfBallsByBowler = {};
let noOfRunsByBowler = {};
let economiesOfBowlers = {};
data.deliveries.map((delivery) =>{
    if (ids2015.has(delivery.match_id) && delivery.wide_runs == '0' && delivery.noball_runs == '0'){
        noOfBallsByBowler[delivery.bowler] = (noOfBallsByBowler[delivery.bowler] || 0) + 1;  /// runs
    }
    if(ids2015.has(delivery.match_id)){
        let totalRuns = parseInt(delivery.total_runs);
        let penaltyRuns = parseInt(delivery.penalty_runs);
        let legByRuns = parseInt(delivery.legbye_runs);
        let byeRuns = parseInt(delivery.bye_runs);
        let BowlerRuns = totalRuns - penaltyRuns - legByRuns - byeRuns; 
        noOfRunsByBowler[delivery.bowler] = (noOfRunsByBowler[delivery.bowler] || 0) + BowlerRuns;  // bowler runs 
    }
});

for(let bowler in noOfBallsByBowler){
    let overs = (noOfBallsByBowler[bowler]) / 6.0;
    let economy = (noOfRunsByBowler[bowler] / overs);
    economiesOfBowlers[bowler] = economy;
}

const sortEconomies = Object.entries(economiesOfBowlers).sort((bowler1, bowler2) => bowler1[1] - bowler2[1]);
const result = sortEconomies.slice(0, 10);

const resultArray = JSON.stringify(Object.fromEntries(result));

fs.writeFile('src/public/output/4-top-10-economy.json', resultArray, "utf8", (err) =>{
    if(err){
        console.log("Error:", err);
        return;
    }
});
