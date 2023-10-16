function highestPlayerDismissed(deliveries) {
    let batsmen = {};
    deliveries.map(delivery => batsmen[delivery.batsman] = {});
    let bat = "";
    let dismissals = 0;
    for (batsman in batsmen) {
        batsmen[batsman] = getDis(batsman, deliveries)
        let temp = batsmen[batsman]
        if (temp != undefined) {
            if (temp[1] > dismissals) {
                bat = batsman
                dismissals = temp[1];
            }
        }
    }
    let result = {}
    result[bat] = batsmen[bat]
    return result;

}

function getDis(batsman, deliveries) {
    let disByBat = {};
    deliveries.map(delivery => {
        if (delivery.batsman == batsman && delivery.player_dismissed != null && delivery.player_dismissed != "run out") {
            disByBat[delivery.bowler] = (disByBat[delivery.bowler] || 0) + 1;
        }
    })
    const sorted = Object.entries(disByBat).sort((bolwer1, bolwer2) => bolwer1[1] - bolwer2[1]);
    return sorted[sorted.length - 1]
}

module.exports = highestPlayerDismissed;

