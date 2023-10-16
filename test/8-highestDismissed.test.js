const getplayerDismissed = require('../src/server/8-highestDismissed');

test("highest_number_of_timeplayer_dismissed", () => {
    const sampleDeliveries = [
        {
            match_id: '1',
            bowler: "TS Mills",
            player_dismissed: "DA Warner"
        },
        {
            match_id: '2',
            bowler: "A Choudhary",
            player_dismissed: "KS Williamson"
        },
        {
            match_id: '3',
            bowler: "TS Mills",
            player_dismissed: "DA Warner"
        },
        {
            match_id: '4',
            bowler: "A Choudhary",
            player_dismissed: "KS Williamson"
        },
        {
            match_id: '5',
            bowler: "TS Mills",
            player_dismissed: "DA Warner"
        },
        {
            match_id: '6',
            bowler: "A Choudhary",
            player_dismissed: "KS Williamson"
        },
        {
            match_id: '7',
            bowler: "TS Mills",
            player_dismissed: "DA Warner"
        },
        {
            match_id: '8',
            bowler: "A Choudhary",
            player_dismissed: "KS Williamson"
        },
        {
            match_id: '9',
            bowler: "TS Mills",
            player_dismissed: "DA Warner"
        },
        {
            match_id: '10',
            bowler: "A Choudhary",
            player_dismissed: "KS Williamson"
        },
        {
            match_id: '11',
            bowler: "TS Mills",
            player_dismissed: "DA Warner"
        },
        {
            match_id: '12',
            bowler: "A Choudhary",
            player_dismissed: "KS Williamson"
        }
    ];
    
  const resultData ={ 'DA Warner by TS Mills': 6 };

  expect(getplayerDismissed(sampleDeliveries)).toEqual(resultData);
});
