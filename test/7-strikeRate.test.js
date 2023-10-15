const getStrikeRate = require('../src/server/7-strikeRate.js');

test("strike_rate", () => {
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
            batsman: "DA Warner",
            wide_runs: 0,
            batsman_runs: 4
        },
        {
            match_id: '2',
            batsman: "KS Williamson",
            wide_runs: 0,
            batsman_runs: 6
        },
        {
            match_id: '3',
            batsman: "DA Warner",
            wide_runs: 1,
            batsman_runs: 2
        },
        {
            match_id: '4',
            batsman: "KS Williamson",
            wide_runs: 0,
            batsman_runs: 1
        },
        {
            match_id: '5',
            batsman: "DA Warner",
            wide_runs: 0,
            batsman_runs: 4
        },
        {
            match_id: '6',
            batsman: "KS Williamson",
            wide_runs: 0,
            batsman_runs: 6
        },
        {
            match_id: '7',
            batsman: "DA Warner",
            wide_runs: 0,
            batsman_runs: 4
        },
        {
            match_id: '8',
            batsman: "KS Williamson",
            wide_runs: 0,
            batsman_runs: 6
        },
        {
            match_id: '9',
            batsman: "DA Warner",
            wide_runs: 0,
            batsman_runs: 4
        },
        {
            match_id: '10',
            batsman: "KS Williamson",
            wide_runs: 0,
            batsman_runs: 6
        },
        {
            match_id: '11',
            batsman: "DA Warner",
            wide_runs: 0,
            batsman_runs: 4
        },
        {
            match_id: '12',
            batsman: "KS Williamson",
            wide_runs: 0,
            batsman_runs: 6
        }
    ];
    
    

  const resultData ={
    '2005': { 'DA Warner': 400 },
    '2012': { 'KS Williamson': 600 },
    '2015': { 'DA Warner': 450, 'KS Williamson': 475 },
    '2016': { 'KS Williamson': 600 }
  };

  expect(getStrikeRate(sampleMatches, sampleDeliveries)).toEqual(resultData);
});
