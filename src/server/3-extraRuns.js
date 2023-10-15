function getExtraRuns(matches, deliveries) {
  let ids2016 = new Set();

  matches.map((match) => {
    if (match.season == "2016") {
      ids2016.add(match.id);
    }
  });

  let exatraRunPerTeam2016 = {};
  deliveries.map((delivery) =>
    ids2016.has(delivery.match_id)
      ? (exatraRunPerTeam2016[delivery.bowling_team] =
          (exatraRunPerTeam2016[delivery.bowling_team] || 0) +
          parseInt(delivery.extra_runs))
      : null
  );

  return exatraRunPerTeam2016;
}

module.exports = getExtraRuns;