const { User } = require("../modules/createTables")

function updatePUUID (requestInput, data) {        
    try {
        User.findOrCreate({
          where: {puuid: data["puuid"]},
          defaults: {
          puuid: data["puuid"],
          name: requestInput.toLowerCase(),
          accountID: data["accountId"],
          id: data["id"]
         }
        })
      } catch {
        console.log("Error adding PUUID.")
      }
    }

 module.exports = {updatePUUID}