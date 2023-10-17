const getplayerOfMatch = require('../src/server/6-playerOfMatch.js');

test("player_of_the_match", () => {

    const sampleData = [
        {
            id: "1",
            season: "2008",
            player_of_match: "Yuvraj Singh",
            city: "Chennai"
        },
        {
            id: "2",
            season: "2009",
            player_of_match: "Adam Gilchrist",
            city: "Bangalore"
        },
        {
            id: "3",
            season: "2010",
            player_of_match: "Sachin Tendulkar",
            city: "Hyderabad"
        },
        {
            id: "4",
            season: "2011",
            player_of_match: "Chris Gayle",
            city: "Chennai"
        },
        {
            id: "5",
            season: "2012",
            player_of_match: "Sunil Narine",
            city: "Delhi"
        },
        {
            id: "6",
            season: "2013",
            player_of_match: "Shane Watson",
            city: "Bangalore"
        },
        {
            id: "7",
            season: "2013",
            player_of_match: "Glenn Maxwell",
            city: "Chennai"
            
        },
        {
            id: "8",
            season: "2016",
            player_of_match: "Andre Russell",
            city: "Bangalore"
        },
        {
            id: "9",
            season: "2016",
            player_of_match: "Andre Russell",
            city: "Mumbai"
        },
        {
            id: "10",
            season: "2016",
            player_of_match: "Steve Smith",
            city: "Chennai"
        },
        {
            id: "11",
            season: "2018",
            player_of_match: "Sunil Narine",
            city: "Bangalore"
        },
        {
            id: "12",
            season: "2019",
            player_of_match: "Andre Russell",
            city: "Bangalore"
        },
        {
            id: "13",
            season: "2019",
            player_of_match: "Sunil Narine",
            city: "Hyderabad"
        },
        {
            id: "14",
            season: "2013",
            player_of_match: "Shane Watson",
            city: "Bangalore"
        }
    ];

  const resultData =  {
    '2008': 'Yuvraj Singh',
    '2009': 'Adam Gilchrist',
    '2010': 'Sachin Tendulkar',
    '2011': 'Chris Gayle',
    '2012': 'Sunil Narine',
    '2013': 'Shane Watson',
    '2016': 'Andre Russell',
    '2018': 'Sunil Narine',
    '2019': 'Sunil Narine'
  };
  expect(getplayerOfMatch(sampleData)).toEqual(resultData);
});