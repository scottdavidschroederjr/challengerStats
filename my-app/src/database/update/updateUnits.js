const { unitMatchData } = require("../modules/createTables")

function updateUnits (requestInput, data) {
  let defaults = {matchID: data["metadata"]["match_id"]}

  for (let x = 0; x < 8; x++){
      for (let i = 0; i < 30; i++){
        let characterKey = "p" + (x + 1) + "_u" + (i + 1) + "_character_id"
        let item1Key = "p" + (x + 1) + "_u" + (i + 1) + "_item1"
        let item2Key = "p" + (x + 1) + "_u" + (i + 1) + "_item2"
        let item3Key = "p" + (x + 1) + "_u" + (i + 1) + "_item3"
        let rarityKey = "p" + (x + 1) + "_u" + (i + 1) + "_rarity"
        let tierKey = "p" + (x + 1) + "_u" + (i + 1) + "_tier"

        try {
          defaults[characterKey] = data['info']["participants"][x]["units"][i]['character_id']
          defaults[tierKey] = data['info']["participants"][x]["units"][i]['tier']
          defaults[rarityKey] = data['info']["participants"][x]["units"][i]['rarity']

          try {          
            defaults[item1Key] = data['info']["participants"][x]["units"][i]['itemNames'][0]
            defaults[item2Key] = data['info']["participants"][x]["units"][i]['itemNames'][1]
            defaults[item3Key] = data['info']["participants"][x]["units"][i]['itemNames'][2]
          } catch {}
        } catch {
          break
        }

      }
  }
  try {
    unitMatchData.findOrCreate({
      where: {matchID: requestInput},
      defaults: defaults
      })
    } catch {
      console.log("Error adding unit data.")
    }
}

module.exports = {updateUnits}