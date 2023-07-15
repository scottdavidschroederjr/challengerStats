const { generalMatchData } = require("../modules/createTables")

function updateGeneralMatchData (requestInput, data) {
  let defaults = {matchID: data["metadata"]["match_id"]}

  for (let x = 0; x < 8; x++){
        let p1Key = "player" + (x + 1)
        let goldKey = "p" + (x + 1) + "_gold_left"
        let roundKey = "p" + (x + 1) + "_last_round"
        let levelKey = "p" + (x + 1) + "_level"
        let placeKey = "p" + (x + 1) + "_placement"
        let playerElimKey = "p" + (x + 1) + "_players_eliminated"
        let timeElimKey = "p" + (x + 1) + "_time_eliminated"
        let damageKey = "p" + (x + 1) + "_total_damage_to_players"
        let aug1key = "p" + (x + 1) + "_augment1"
        let aug2key = "p" + (x + 1) + "_augment2"
        let aug3key = "p" + (x + 1) + "_augment3"

          defaults[p1Key] = data["metadata"]["participants"][x]
          defaults[goldKey] = data["info"]["participants"][x]["gold_left"]
          defaults[roundKey] = data["info"]["participants"][x]["last_round"]
          defaults[levelKey] = data["info"]["participants"][x]["level"]
          defaults[placeKey] = data["info"]["participants"][x]["placement"]
          defaults[playerElimKey] = data["info"]["participants"][x]["players_eliminated"]
          defaults[timeElimKey] = data["info"]["participants"][x]["time_eliminated"]
          defaults[damageKey] = data["info"]["participants"][x]["total_damage_to_players"]
          
          //puts augments 2 and 3 in the right spot when 1 is hidden
  

          try {
            // eslint-disable-next-line no-unused-vars
            let dummyVariable = data["info"]["participants"][x]["augments"][2].length
            defaults[aug3key] = data["info"]["participants"][x]["augments"][2]
            defaults[aug2key] = data["info"]["participants"][x]["augments"][1]
            defaults[aug1key] = data["info"]["participants"][x]["augments"][0]
          } catch {            
            defaults[aug3key] = data["info"]["participants"][x]["augments"][1]
            defaults[aug2key] = data["info"]["participants"][x]["augments"][0]
          }

        }
  try {
    generalMatchData.findOrCreate({
      where: {matchID: requestInput},
      defaults: defaults
      })
    } catch {
      console.log("Error adding unit data.")
    }
}

module.exports = {updateGeneralMatchData}