let data = require("./data.js");
const fs = require("fs");
const path = require("path");

let ids2016 = new Set();

data.matches.map(match =>{
    if(match.season == "2016"){3
        ids2016.add(match.id);
    }
});

console.log(ids2016)
let exatraRunPerTeam2016 = {};
data.deliveries.map(delivery => ids2016.has(delivery.match_id) ? exatraRunPerTeam2016[delivery.bowling_team] 
    = (exatraRunPerTeam2016[delivery.bowling_team] || 0) + parseInt(delivery.extra_runs) : null);

let jsonformat = JSON.stringify(exatraRunPerTeam2016);

fs.writeFile(path.join(__dirname,'..','..', 'src', 'public/output', 'extraRunsPerTeam2016.json'), jsonformat, "utf8", (err) => {
    if(err) {
        console.log("Error:", err);
        return ;
    }
});