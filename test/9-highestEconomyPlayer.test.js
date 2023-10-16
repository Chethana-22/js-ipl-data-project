const getBestBowlerEconomyInSuperOver = require('../src/server/9-highestEconmyPlayer.js');

test("highest_number_of_timeplayer_dismissed", () => {
    const sampleDeliveries = [
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 0,
            total_runs: 4,
        },
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 1,
            total_runs: 2,
        },
        {
            match_id: '1',
            bowler: "DJ Bravo",
            is_super_over: 1,
            total_runs: 6,
        },
        {
            match_id: '1',
            bowler: "DJ Bravo",
            is_super_over: 1,
            total_runs: 1,
        },
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 1,
            total_runs: 4,
        },
        {
            match_id: '1',
            bowler: "DJ Bravo",
            is_super_over: 0,
            total_runs: 2,
        },
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 0,
            total_runs: 1,
        },
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 0,
            total_runs: 0,
        },
        {
            match_id: '1',
            bowler: "DJ Bravo",
            is_super_over: 0,
            total_runs: 2,
        },
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 1,
            total_runs: 3,
        },
        {
            match_id: '1',
            bowler: "DJ Bravo",
            is_super_over: 1,
            total_runs: 2,
        },
        {
            match_id: '1',
            bowler: "TS Mills",
            is_super_over: 1,
            total_runs: 1,
        }
    ];
    
  const resultData ={ 'TS Mills': 15 };

  expect(getBestBowlerEconomyInSuperOver(sampleDeliveries)).toEqual(resultData);
});
