const { matchUsers } = require("../modules/createTables")

function updateUsers (requestInput, data) {
    try {
        matchUsers.findOrCreate({
          where: {matchID: requestInput},

          defaults: {

          matchID: data["metadata"]["match_id"],
          game_datetime: data['info']["game_datetime"],
          game_length: data['info']["game_length"],
          queue_id: data['info']['queue_id'],
          tft_game_type: data['info']['tft_game_type'],
          tft_set_core_name: data['info']['tft_set_core_name'],
          tft_set_number: data['info']['tft_set_number'],

          player1: data["metadata"]["participants"][0],
          player2: data["metadata"]["participants"][1],
          player3: data["metadata"]["participants"][2],
          player4: data["metadata"]["participants"][3],
          player5: data["metadata"]["participants"][4],
          player6: data["metadata"]["participants"][5],
          player7: data["metadata"]["participants"][6],
          player8: data["metadata"]["participants"][7]
          }
        })
        console.log("User data added!")
      } catch {
        console.log("Error adding match users data.")
      }
}

module.exports = {updateUsers}