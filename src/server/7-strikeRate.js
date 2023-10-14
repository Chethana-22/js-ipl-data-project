let data = require("./data.js");
const fs = require("fs");
const path = require("path");

let seasons = {}
data.matches.map(match =>{
    seasons[parseInt(match.season)] = {};
})

for(let season in seasons){
    let strikeRate = {};
    let noOfBallsByBatsman = {};
    let runsByBatsman = {};
    data.deliveries.map((delivery) =>{
        const season_id = getSeasonIds(season);
        if (season_id.includes(delivery.match_id)){
            if(delivery.wide_runs == '0'){
                noOfBallsByBatsman[delivery.batsman] = (noOfBallsByBatsman[delivery.batsman] || 0) + 1;
            }  
            runsByBatsman[delivery.batsman] = (runsByBatsman[delivery.batsman] || 0) + parseInt(delivery.batsman_runs);
        }
    });

    for(batsmen in noOfBallsByBatsman){
        strikeRate[batsmen] = (runsByBatsman[batsmen] / noOfBallsByBatsman[batsmen]) * 100.0;
    }
    seasons[season] = strikeRate;
}

function getSeasonIds(season){
    let ids=[]
    data.matches.map(match =>{
        if(match.season == season){3
            ids.push(match.id);
        }
    });
    return ids;
}

let jsonformat = JSON.stringify(seasons);

fs.writeFile(path.join(__dirname,'..','..', 'src', 'public/output', '7-strikeRate.json'), jsonformat, "utf8", (err) => {
    if(err) {
        console.log("Error:", err);
        return ;
    }
});