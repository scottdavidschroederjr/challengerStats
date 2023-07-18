const {updateGeneralMatchData} = require("../database/update/updateGeneralMatch.js")
const {updateTrait} = require("../database/update/updateTrait.js")
const {updateUsers} = require("../database/update/updateUsers.js")
const {updateUnits} = require("../database/update/updateUnits.js")
const {apiKey} = require("../secrets.js")
const {rateLimitWait} = require("./rateLimiter")
const {generalMatchData} = require("../database/modules/createTables.js")
const { sq } = require("../database/db.js")

sq.sync()

async function matchInfo(matchArray) {
    for (let z = 0; z < matchArray.length; z++){

        async function checkUsersMatch(inputMatch) {
            try {
              const matchesUsersDB = await generalMatchData.findAll({
                where: {
                  matchID: inputMatch
                  }
                })
              const plainUsersMatch = matchesUsersDB.map(user => user.toJSON())
              
              try {
                if (plainUsersMatch[0]['matchID'] !== undefined){
                  return plainUsersMatch
                }
                else return undefined
              } catch {
                return undefined
              }
             } catch {
              return undefined
             }
            }
        var sqlUsersMatch = await checkUsersMatch(matchArray[z])

        if (sqlUsersMatch !== undefined){  
            console.log("match already exists!")
        } else {
            let matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/"+ matchArray[z] + "?api_key=" + apiKey
            var response = await fetch(matchRequestURL)
            var data = await response.json();
      
            //TODO make this optional if data is correct
            data = await rateLimitWait(data, matchRequestURL)
    
            try {
              updateUsers(matchArray[z], data)
              updateGeneralMatchData(matchArray[z], data)
              updateUnits(matchArray[z], data)
              updateTrait(matchArray[z], data)
            } catch {console.log("Error with adding: " + matchArray[z])}


            
        }
    }
}


module.exports = {matchInfo}