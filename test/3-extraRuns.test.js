const getExtraRuns = require('../src/server/3-extraRuns');

test("extra_runs_per_team_2016", () => {

    const sampleMatches = [
        {
          id: "1",
          season: "2016",
          winner: "Rising Pune Supergiant",
        },
        {
          id: "2",
          season: "2016",
          winner: "Rising Pune Supergiant",
        },
        {
          id: "3",
          season: "2016",
          winner: "Mumbai Indians",
        },
        {
          id: "4",
          season: "2016",
          winner: "Rising Pune Supergiant",
        },
        {
          id: "5",
          season: "2009",
          winner: "Royal Challengers Bangalore",
        },
        {
          id: "6",
          season: "2016",
          winner: "Royal Challengers Bangalore",
        },
        {
          id: "7",
          season: "2016",
          winner: "Royal Challengers Bangalore",
        },
        {
          id: "8",
          season: "2016",
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
          season: "2016",
          winner: "Rajasthan Royals",
        },
        {
          id: "12",
          season: "2016",
          winner: "Royal Challengers Bangalore",
        },
      ];
      
      const sampleDeliveries = [
        {
            match_id: '2',
            bowling_team: "Royal Challengers Bangalore",
            extra_runs: 5
        },
        {
          match_id: '3',
            bowling_team: "Kolkata Knight Riders",
            extra_runs: 2
        },
        {
          match_id: '4',
            bowling_team: "Mumbai Indians",
            extra_runs: 1
        },
        {
          match_id: '5',
            bowling_team: "Chennai Super Kings",
            extra_runs: 4
        },
        {
          match_id: '6',
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: 0
        },
        {
          match_id: '7',
            bowling_team: "Rajasthan Royals",
            extra_runs: 3
        },
        {
          match_id: '8',
            bowling_team: "Delhi Capitals",
            extra_runs: 2
        },
        {
          match_id: '9',
            bowling_team: "Kings XI Punjab",
            extra_runs: 6
        },
        {
          match_id: '10',
            bowling_team: "Chennai Super Kings",
            extra_runs: 1
        },
        {
          match_id: '11',
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: 2
        },
        {
          match_id: '12',
            bowling_team: "Mumbai Indians",
            extra_runs: 3
        },
        {
          match_id: '13',
            bowling_team: "Kolkata Knight Riders",
            extra_runs: 4
        }
      ];

  const resultData = {
    'Royal Challengers Bangalore': 5,
    'Kolkata Knight Riders': 2,
    'Mumbai Indians': 4,
    'Sunrisers Hyderabad': 2,
    'Rajasthan Royals': 3,
    'Delhi Capitals': 2
  };

  expect(getExtraRuns(sampleMatches, sampleDeliveries)).toEqual(resultData);
});
