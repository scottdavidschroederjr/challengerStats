const { traitMatchData } = require("../modules/createTables")

function updateTrait (requestInput, data) {


  let defaults = {matchID: data["metadata"]["match_id"]}
  let maxTraits = 0

  for (let x = 0; x < 8; x++){
      for (let i = 0; i < 30; i++){
        let nameKey = "p" + (x + 1) + "_t" + (i + 1) + "_name"
        let numKey = "p" + (x + 1) + "_t" + (i + 1) + "_num_units"
        let styleKey = "p" + (x + 1) + "_t" + (i + 1) + "_style"
        let tierKey = "p" + (x + 1) + "_t" + (i + 1) + "_tier_current"
        let totalKey = "p" + (x + 1) + "_t" + (i + 1) + "_tier_total"

        try {
          defaults[nameKey] = data['info']["participants"][x]["traits"][i]['name']
          defaults[numKey] = data['info']["participants"][x]["traits"][i]['num_units']
          defaults[styleKey] = data['info']["participants"][x]["traits"][i]['style']
          defaults[tierKey] = data['info']["participants"][x]["traits"][i]['tier_current']
          defaults[totalKey] = data['info']["participants"][x]["traits"][i]['tier_total']
        } catch {
          break
        }

      }
  }
  console.log(defaults)
  try {
    traitMatchData.findOrCreate({
      where: {matchID: requestInput},
      defaults: defaults
      })
    } catch {
      console.log("failed")
    }
}


module.exports = {updateTrait}