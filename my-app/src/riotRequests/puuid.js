//checks database for puuid info and then 
const {apiKey} = require("../../secrets")
const {updatePUUID} = require("../database/update/updatePUUID")
const {User} = require("../database/modules/createTables.js")
const {rateLimitWait} = require("./rateLimiter")

async function puuidRequest(username) {
    var lowerUser = username.toLowerCase()

    async function checkUsers(inputUser) {
        var lowerUser = inputUser.toLowerCase()
        try {
          const users = await User.findAll({
            where: {
              name: lowerUser
              }
            })
          const plainUsers = users.map(user => user.toJSON())
        } catch (error) {
          console.log(error)
        }

  
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

        if (data["puuid"] === undefined){
          data = await rateLimitWait(data, requestURL, "puuid")
          updatePUUID(lowerUser, data)
          return data["puuid"]
        } else {
          updatePUUID(lowerUser, data)
          return data["puuid"]
        }
    } else {
      return dbCheck
    }
}

module.exports = {puuidRequest}
