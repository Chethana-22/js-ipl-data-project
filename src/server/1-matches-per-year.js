function getMatchesPerYear(matches){
    const matchesPerYear = {};
    matches.map(match =>{
        match.season in matchesPerYear ? matchesPerYear[match.season]++ : matchesPerYear[match.season]=1;
    });
    return JSON.stringify(matchesPerYear);
}

module.exports = getMatchesPerYear;
