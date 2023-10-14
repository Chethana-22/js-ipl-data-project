let data = require("./data.js");
const fs = require("fs");
const path = require("path");

let seasons = {}
let result = {};
data.matches.map(match =>{
    seasons[parseInt(match.season)] = "";
})

for(season in seasons){
    let playerOfMatch = {};
    data.matches.map(match =>{
        if(parseInt(match.season)== season){
            playerOfMatch[match.player_of_match] = (playerOfMatch[match.player_of_match] || 0) + 1;  
        }
    })

    const sortedPlayer = Object.entries(playerOfMatch).sort((player1, player2) =>
        player1[1] - player2[1]);
    result = sortedPlayer[sortedPlayer.length - 1];
    if(result != undefined){
        seasons[season] = result[0];
    }
}


let jsonformat = JSON.stringify(seasons);

fs.writeFile(path.join(__dirname,'..','..', 'src', 'public/output', '6-playerOfMatch.json'), jsonformat, "utf8", (err) => {
    if(err) {
        console.log("Error:", err);
        return ;
    }
});