const {apiKey} = require("../../secrets")
const {updatePUUID} = require("../database/update/updatePUUID")
const {User} = require("../database/modules/createTables.js")

async function puuidRequest(username) {
    var lowerUser = username.toLowerCase()

    //TODO check database for username
    async function checkUsers(inputUser) {
        var lowerUser = inputUser.toLowerCase()
        const users = await User.findAll({
          where: {
            name: lowerUser
            }
          })
        const plainUsers = users.map(user => user.toJSON())
  
        try {
          return plainUsers[0]["puuid"]
        } catch {
          return undefined
        }
        
      }
    let dbCheck = await checkUsers(lowerUser)
    if (dbCheck === undefined) {
        let requestURL = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + lowerUser + "?api_key=" + apiKey;
        let response = await fetch(requestURL)
        let data = await response.json();
        updatePUUID(lowerUser, data)
    
        return console.log(data["puuid"])

    } else {
        return console.log(dbCheck + "___WE OUT HERE")
    }
    //requests username from riot


}


puuidRequest("xiaomajur")
