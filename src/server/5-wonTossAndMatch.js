function getWonTossAndMatch(matches) {
    let winner = {};
    matches.map(match => {
        if (match.toss_winner === match.winner) {
            winner[match.winner] = (winner[match.winner] || 0) + 1;
        }
    })

    return winner;
}

module.exports = getWonTossAndMatch;