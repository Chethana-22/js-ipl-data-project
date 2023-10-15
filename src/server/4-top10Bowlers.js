function getTop10Bowlers(matches, deliveries) {
    let ids2015 = new Set();

    matches.map(match => {
        if (match.season == "2015") {
            3
            ids2015.add(match.id);
        }
    });

    let noOfBallsByBowler = {};
    let noOfRunsByBowler = {};
    let economiesOfBowlers = {};
    deliveries.map((delivery) => {
        if (ids2015.has(delivery.match_id) && delivery.wide_runs == '0' && delivery.noball_runs == '0') {
            noOfBallsByBowler[delivery.bowler] = (noOfBallsByBowler[delivery.bowler] || 0) + 1; 
        }
        if (ids2015.has(delivery.match_id)) {
            let totalRuns = parseInt(delivery.total_runs);
            let penaltyRuns = parseInt(delivery.penalty_runs);
            let legByRuns = parseInt(delivery.legbye_runs);
            let byeRuns = parseInt(delivery.bye_runs);
            let BowlerRuns = totalRuns - penaltyRuns - legByRuns - byeRuns;
            noOfRunsByBowler[delivery.bowler] = (noOfRunsByBowler[delivery.bowler] || 0) + BowlerRuns;  // bowler runs 
        }
    });

    for (let bowler in noOfBallsByBowler) {
        let overs = (noOfBallsByBowler[bowler]) / 6.0;
        let economy = (noOfRunsByBowler[bowler] / overs);
        economiesOfBowlers[bowler] = economy;
    }

    const sortEconomies = Object.entries(economiesOfBowlers).sort((bowler1, bowler2) => bowler1[1] - bowler2[1]);
    const result = sortEconomies.slice(0, 10);

    return JSON.stringify(Object.fromEntries(result));
}

module.exports = getTop10Bowlers;