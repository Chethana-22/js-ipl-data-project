function getBowlerEconomy(deliveries) {
   
    let superOversDeliveries = deliveries.filter((entry) => {
      return entry.is_super_over == "1";
    });
    let bowlerData = {};
    superOversDeliveries.forEach((entry) => {
      if (bowlerData[entry.bowler]) {
        bowlerData[entry.bowler]["totalRuns"] += Number(entry.total_runs);
        bowlerData[entry.bowler]["totalBalls"]++;
      } else {
        bowlerData[entry.bowler] = {
          totalRuns: Number(entry.total_runs),
          totalBalls: 1,
        };
      }
    });
    let bestEconomy = null;
    let bestEconomyBowler;
    for (const bowler in bowlerData) {
      let economy =
        (bowlerData[bowler].totalRuns / bowlerData[bowler].totalBalls) * 6;
      bowlerData[bowler] = economy;
      if (bestEconomy == null || economy < bestEconomy) {
        bestEconomy = economy;
        bestEconomyBowler = bowler;
      }
    }
    return { [bestEconomyBowler]: bestEconomy };
  }
  
  module.exports = getBowlerEconomy;