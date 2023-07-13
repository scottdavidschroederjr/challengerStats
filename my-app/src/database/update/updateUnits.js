const { unitMatchData } = require("../modules/createTables")

function updateUnits (requestInput, data) {        
    try {
    unitMatchData.findOrCreate({
      where: {matchID: requestInput},

      defaults: {

      matchID: data["metadata"]["match_id"],
      
      }
    })

  } catch {
    console.log("Trait database adjusted.")
  }}

module.exports = {updateUnits}