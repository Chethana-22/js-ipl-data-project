const getMatchesWonPerYear = require("../src/server/2-matchesWonPerTeam");

test("matches_won_per_year_per_team", () => {
  const sampleData = [
    {
      id: "1",
      season: "2008",
      winner: "Rising Pune Supergiant",
    },
    {
      id: "2",
      season: "2009",
      winner: "Rising Pune Supergiant",
    },
    {
      id: "3",
      season: "2008",
      winner: "Mumbai Indians",
    },
    {
      id: "4",
      season: "2008",
      winner: "Rising Pune Supergiant",
    },
    {
      id: "5",
      season: "2009",
      winner: "Royal Challengers Bangalore",
    },
    {
      id: "6",
      season: "2009",
      winner: "Royal Challengers Bangalore",
    },
    {
      id: "7",
      season: "2010",
      winner: "Royal Challengers Bangalore",
    },
    {
      id: "8",
      season: "2010",
      winner: "Delhi Daredevils",
    },
    {
      id: "9",
      season: "2010",
      winner: "Delhi Daredevils",
    },
    {
      id: "10",
      season: "2012",
      winner: "Rajasthan Royals",
    },
    {
      id: "11",
      season: "2013",
      winner: "Rajasthan Royals",
    },
    {
      id: "12",
      season: "2012",
      winner: "Royal Challengers Bangalore",
    },
  ];
  const resultData = {
    "2013": { "Rajasthan Royals": 1 },
    "2012": { "Royal Challengers Bangalore": 1, "Rajasthan Royals": 1 },
    "2010": { "Delhi Daredevils": 2, "Royal Challengers Bangalore": 1 },
    "2009": { "Royal Challengers Bangalore": 2, "Rising Pune Supergiant": 1 },
    "2008": { "Rising Pune Supergiant": 2, "Mumbai Indians": 1 },
  };

  expect(getMatchesWonPerYear(sampleData)).toEqual(resultData);
});
