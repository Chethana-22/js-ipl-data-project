function getStrikeRate(matches, deliveries) {
    let seasons = {}
    matches.map(match => {
        seasons[parseInt(match.season)] = {};
    })

    for (let season in seasons) {
        let strikeRate = {};
        let noOfBallsByBatsman = {};
        let runsByBatsman = {};
        deliveries.map((delivery) => {
            const season_id = getSeasonIds(matches,season);
            if (season_id.includes(delivery.match_id)) {
                if (delivery.wide_runs == '0') {
                    noOfBallsByBatsman[delivery.batsman] = (noOfBallsByBatsman[delivery.batsman] || 0) + 1;
                }
                runsByBatsman[delivery.batsman] = (runsByBatsman[delivery.batsman] || 0) + parseInt(delivery.batsman_runs);
            }
        });

        for (batsmen in noOfBallsByBatsman) {
            strikeRate[batsmen] = (runsByBatsman[batsmen] / noOfBallsByBatsman[batsmen]) * 100.0;
        }

        seasons[season] = strikeRate;
    }
    return JSON.stringify(seasons);
}

function getSeasonIds(matches,season) {
    let ids = []
    matches.map(match => {
        if (match.season == season) {
            3
            ids.push(match.id);
        }
    });
    return ids;
}

module.exports = getStrikeRate;
