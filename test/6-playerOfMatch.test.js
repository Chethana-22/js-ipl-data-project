const getplayerOfMatch = require('../src/server/6-playerOfMatch.js');

test("player_of_the_match", () => {

    const sampleData = [
        {
            id: "1",
            season: "2008",
            player_of_match: "Yuvraj Singh"
        },
        {
            id: "2",
            season: "2009",
            player_of_match: "Adam Gilchrist"
        },
        {
            id: "3",
            season: "2010",
            player_of_match: "Sachin Tendulkar"
        },
        {
            id: "4",
            season: "2011",
            player_of_match: "Chris Gayle"
        },
        {
            id: "5",
            season: "2012",
            player_of_match: "Sunil Narine"
        },
        {
            id: "6",
            season: "2013",
            player_of_match: "Shane Watson"
        },
        {
            id: "7",
            season: "2014",
            player_of_match: "Glenn Maxwell"
        },
        {
            id: "8",
            season: "2015",
            player_of_match: "Andre Russell"
        },
        {
            id: "9",
            season: "2016",
            player_of_match: "Virat Kohli"
        },
        {
            id: "10",
            season: "2017",
            player_of_match: "Steve Smith"
        },
        {
            id: "11",
            season: "2018",
            player_of_match: "Sunil Narine"
        },
        {
            id: "12",
            season: "2019",
            player_of_match: "Andre Russell"
        }
    ];
    

  const resultData = {
    '2008': 'Yuvraj Singh',
    '2009': 'Adam Gilchrist',
    '2010': 'Sachin Tendulkar',
    '2011': 'Chris Gayle',
    '2012': 'Sunil Narine',
    '2013': 'Shane Watson',
    '2014': 'Glenn Maxwell',
    '2015': 'Andre Russell',
    '2016': 'Virat Kohli',
    '2017': 'Steve Smith',
    '2018': 'Sunil Narine',
    '2019': 'Andre Russell'
  };
  expect(getplayerOfMatch(sampleData)).toEqual(resultData);
});