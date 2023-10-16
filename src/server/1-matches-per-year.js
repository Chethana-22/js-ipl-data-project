function getMatchesPerYear(matches){
    return matches.reduce((accumulator, match) =>{
        accumulator[match.season] = (accumulator[match.season] || 0) + 1;
        return accumulator}, {});
}

module.exports = getMatchesPerYear;
