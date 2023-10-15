function economicBowlerInSuperOver(data) {
    const superOverBowlers = data.deliveries
        .filter((delivery) => delivery['is_super_over'] !== "0" && delivery['bowler'] !== undefined)
        .reduce((accumulator, delivery) => {
            const bowler = delivery['bowler'];
            if (accumulator[bowler] == undefined) {
                accumulator[bowler] = 1;
            }
            return accumulator;
        }, {});
    const superOverRuns = Object.keys(superOverBowlers).reduce((accumulator, bowler) => {
        const ballCountAndTotalScore = data.deliveries
            .filter((delivery) => delivery['bowler'] == bowler && delivery['is_super_over'] == "1")
            .reduce((result, delivery) => {
                if (result['ballCount'] == undefined && result['totalScore'] == undefined) {
                    result['ballCount'] = 0;
                    result['totalScore'] = 0;
                }
                const wideRuns = delivery['wide_runs'];
                const noBallRuns = delivery['noball_runs'];
                if (parseInt(wideRuns) == 0 && parseInt(noBallRuns) == 0) {
                    result.ballCount += 1;
                }
                result.totalScore += parseInt(delivery['total_runs']) - parseInt(delivery['legbye_runs']) - parseInt(delivery['penalty_runs']) - parseInt(delivery['bye_runs']);
                return result;
            }, {});

        accumulator[bowler] = [ballCountAndTotalScore.totalScore, ballCountAndTotalScore.ballCount];
        return accumulator;
    }, {});
    const economyOfSuperOver = Object.entries(superOverRuns).reduce((accumulator, [superBowler, [totalScore, ballCount]]) => {
        const economy = (totalScore / ballCount) * 6;
        accumulator[superBowler] = economy;
        return accumulator;
    }, {});

    const bowlingAverageArray = Object.entries(economyOfSuperOver).sort((a, b) => a[1] - b[1]);
    return JSON.stringify(bowlingAverageArray[0]);
    // return bowlingAverageArray;
}