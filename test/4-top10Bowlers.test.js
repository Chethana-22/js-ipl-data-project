const getTop10Bowlers = require('../src/server/4-top10Bowlers');

test("extra_runs_per_team_2016", () => {
    const sampleMatches = [
        {
          id: "1",
          season: "2015",
          winner: "Rising Pune Supergiant",
        },
        {
          id: "2",
          season: "2015",
          winner: "Rising Pune Supergiant",
        },
        {
          id: "3",
          season: "2015",
          winner: "Mumbai Indians",
        },
        {
          id: "4",
          season: "2015",
          winner: "Rising Pune Supergiant",
        },
        {
          id: "5",
          season: "2005",
          winner: "Royal Challengers Bangalore",
        },
        {
          id: "6",
          season: "2015",
          winner: "Royal Challengers Bangalore",
        },
        {
          id: "7",
          season: "2015",
          winner: "Royal Challengers Bangalore",
        },
        {
          id: "8",
          season: "2016",
          winner: "Delhi Daredevils",
        },
        {
          id: "9",
          season: "2015",
          winner: "Delhi Daredevils",
        },
        {
          id: "10",
          season: "2012",
          winner: "Rajasthan Royals",
        },
        {
          id: "11",
          season: "2015",
          winner: "Rajasthan Royals",
        },
        {
          id: "12",
          season: "2015",
          winner: "Royal Challengers Bangalore",
        },
      ];
      const sampleDeliveries = [
        {
            match_id: '1',
            bowling_team: "Royal Challengers Bangalore",
            extra_runs: 5,
            wide_runs: 0,
            noball_runs: 1,
            bowler: "A Choudhary",
            total_runs: 4,
            penalty_runs: 1,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '2',
            bowling_team: "Royal Challengers Bangalore",
            extra_runs: 2,
            wide_runs: 1,
            noball_runs: 0,
            bowler: "YS Chahal",
            total_runs: 1,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '3',
            bowling_team: "Royal Challengers Bangalore",
            extra_runs: 1,
            wide_runs: 0,
            noball_runs: 0,
            bowler: "S Aravind",
            total_runs: 5,
            penalty_runs: 0,
            legbye_runs: 3,
            bye_runs: 0,
        },
        {
            match_id: '4',
            bowling_team: "Mumbai Indians",
            extra_runs: 4,
            wide_runs: 0,
            noball_runs: 0,
            bowler: "JJ Bumrah",
            total_runs: 2,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '5',
            bowling_team: "Mumbai Indians",
            extra_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
            bowler: "HH Pandya",
            total_runs: 1,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '6',
            bowling_team: "Mumbai Indians",
            extra_runs: 3,
            wide_runs: 2,
            noball_runs: 0,
            bowler: "KA Pollard",
            total_runs: 4,
            penalty_runs: 0,
            legbye_runs: 1,
            bye_runs: 0,
        },
        {
            match_id: '7',
            bowling_team: "Kolkata Knight Riders",
            extra_runs: 2,
            wide_runs: 1,
            noball_runs: 0,
            bowler: "PP Chawla",
            total_runs: 3,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '8',
            bowling_team: "Kolkata Knight Riders",
            extra_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
            bowler: "SP Narine",
            total_runs: 1,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '9',
            bowling_team: "Kolkata Knight Riders",
            extra_runs: 1,
            wide_runs: 0,
            noball_runs: 1,
            bowler: "UT Yadav",
            total_runs: 3,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '10',
            bowling_team: "Chennai Super Kings",
            extra_runs: 0,
            wide_runs: 0,
            noball_runs: 0,
            bowler: "DL Chahar",
            total_runs: 2,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '11',
            bowling_team: "Chennai Super Kings",
            extra_runs: 4,
            wide_runs: 0,
            noball_runs: 0,
            bowler: "RA Jadeja",
            total_runs: 1,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        },
        {
            match_id: '12',
            bowling_team: "Chennai Super Kings",
            extra_runs: 2,
            wide_runs: 0,
            noball_runs: 1,
            bowler: "Imran Tahir",
            total_runs: 3,
            penalty_runs: 0,
            legbye_runs: 0,
            bye_runs: 0,
        }
    ];
    

  const resultData = {"RA Jadeja":6,"S Aravind":12,"JJ Bumrah":12};

  expect(getTop10Bowlers(sampleMatches, sampleDeliveries)).toEqual(resultData);
});
