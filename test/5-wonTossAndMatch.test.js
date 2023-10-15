const getWonTossAndMatch = require('../src/server/5-wonTossAndMatch.js');

test("teams_won_toss_and_Match", () => {

    const sampleData = [
        {
            id: "1",
            season: "2008",
            toss_winner: "Rising Pune Supergiant",
            winner: "Mumbai Indians"
        },
        {
            id: "2",
            season: "2009",
            toss_winner: "Chennai Super Kings",
            winner: "Chennai Super Kings"
        },
        {
            id: "3",
            season: "2010",
            toss_winner: "Kolkata Knight Riders",
            winner: "Kolkata Knight Riders"
        },
        {
            id: "4",
            season: "2011",
            toss_winner: "Mumbai Indians",
            winner: "Chennai Super Kings"
        },
        {
            id: "5",
            season: "2012",
            toss_winner: "Royal Challengers Bangalore",
            winner: "Kolkata Knight Riders"
        },
        {
            id: "6",
            season: "2013",
            toss_winner: "Rajasthan Royals",
            winner: "Mumbai Indians"
        },
        {
            id: "7",
            season: "2014",
            toss_winner: "Kings XI Punjab",
            winner: "Kolkata Knight Riders"
        },
        {
            id: "8",
            season: "2015",
            toss_winner: "Mumbai Indians",
            winner: "Mumbai Indians"
        },
        {
            id: "9",
            season: "2016",
            toss_winner: "Sunrisers Hyderabad",
            winner: "Sunrisers Hyderabad"
        },
        {
            id: "10",
            season: "2017",
            toss_winner: "Mumbai Indians",
            winner: "Mumbai Indians"
        },
        {
            id: "11",
            season: "2018",
            toss_winner: "Chennai Super Kings",
            winner: "Chennai Super Kings"
        },
        {
            id: "12",
            season: "2019",
            toss_winner: "Mumbai Indians",
            winner: "Mumbai Indians"
        }
    ];
    
  const resultData ={
    'Chennai Super Kings': 2,
    'Kolkata Knight Riders': 1,
    'Mumbai Indians': 3,
    'Sunrisers Hyderabad': 1
  };
  expect(getWonTossAndMatch(sampleData)).toEqual(resultData);
});