function getExtraRunsConcededPerTeam2016(matches, deliveries) {
  let ids2016 = new Set();

  matches.map((match) => {
    if (match.season == "2016") {
      ids2016.add(match.id);
    }
  });

  let extraRunPerTeam2016 = {};
  deliveries.map((delivery) =>
    ids2016.has(delivery.match_id)
      ? (extraRunPerTeam2016[delivery.bowling_team] =
          (extraRunPerTeam2016[delivery.bowling_team] || 0) +
          parseInt(delivery.extra_runs))
      : null
  );

  return extraRunPerTeam2016;
}

module.exports = getExtraRunsConcededPerTeam2016;

