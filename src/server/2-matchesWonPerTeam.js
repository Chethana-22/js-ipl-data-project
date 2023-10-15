function getMatchesWonPerYear(data) {
  let matchesWonData = {};
  data.forEach((row) => {
    const year = row.season;
    const winner = row.winner;

    if (matchesWonData[year]) {
      if (matchesWonData[year][winner]) {
        matchesWonData[year][winner]++;
      } else {
        matchesWonData[year][winner] = 1;
      }
    } else {
      matchesWonData[year] = { [winner]: 1 };
    }
  });

 return JSON.stringify(matchesWonData);
}

module.exports = getMatchesWonPerYear;