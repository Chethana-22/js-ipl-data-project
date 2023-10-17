function getHighestNumberOfPlayerOfMatch(matches) {
    let seasons ={};
    let result = {};
    matches.map(match => {
        seasons[parseInt(match.season)] = "";
    })

    for (season in seasons) {
        let playerOfMatch = {};
        matches.map(match => {
            if (parseInt(match.season) == season) {
                playerOfMatch[match.player_of_match] = (playerOfMatch[match.player_of_match] || 0) + 1;
            }
        })

        const sortedPlayer = Object.entries(playerOfMatch).sort((player1, player2) =>
            player1[1] - player2[1]);
        result = sortedPlayer[sortedPlayer.length - 1];
        if (result != undefined) {
            seasons[season] = result[0];
        }
    }

    return seasons;
}

module.exports = getHighestNumberOfPlayerOfMatch;
