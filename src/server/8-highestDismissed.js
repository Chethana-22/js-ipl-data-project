function getplayerDismissed(deliveries) {
    const res = deliveries.reduce((acc, curr) => {
      if (!curr.player_dismissed) {              
        return acc
      }
  
      if (acc.hasOwnProperty(curr.player_dismissed)) {   
  
        if (acc[curr.player_dismissed][curr.bowler]) {
          acc[curr.player_dismissed][curr.bowler]++
        } else {
          acc[curr.player_dismissed][curr.bowler] = 1
        }
      } else {
        acc[curr.player_dismissed] = { [curr.bowler]: 1 }
      }
      return acc
    }, {})
  
    let playerDismissal = Object.entries(res).map((ele) => {   
      ele[1] = Object.entries(ele[1]).sort(
  
        (playerA, playerB) => playerB[1] - playerA[1]
      )
      let score = ele[1][0]                                  
  
      return [ele[0], score].flat()
    })
  
    playerDismissal = playerDismissal 
      .map((value) => value)
      .sort((a, b) => {
  
        aOut = a[2]
        bOut = b[2]
        if (aOut > bOut) {
          return -1
        } else if (aOut < bOut) {
          return 1
        } else {
          return 0
        }
      })
  
    let prop = `${playerDismissal[0][0]} by ${playerDismissal[0][1]}`
    let value = playerDismissal[0][2]                                      
    let result = {}
  
    result[prop] = value    
  
    return JSON.stringify(result);
  }
  
  module.exports = getplayerDismissed;
  