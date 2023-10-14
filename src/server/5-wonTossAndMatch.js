const fs  = require('fs');
const data = require('./data.js');

// Find the number of times each team won the toss and also won the match
let winner = {};
data.matches.map(match =>{
    if(match.toss_winner === match.winner){
        winner[match.winner] = (winner[match.winner] || 0) + 1;
    }
})

let jsonformat = JSON.stringify(winner);

fs.writeFile('src/public/output/5-wonTossAndMatch.json', jsonformat, "utf8", (err) =>{
    if(err){
        console.log("Error:", err);
        return;
    }
});