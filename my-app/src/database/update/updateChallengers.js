const { User } = require("../modules/createTables")
const { sq } = require("../../database/db.js")


async function updateChallengers(players){
    await User.update(
        { rank: null },
        { where: { rank: 'challenger' } }
      );

    for (let x = 0; x < players.length; x++){
        let currentUser = players[x]["summonerId"]

        await User.update(
            { rank: 'challenger' },
            { where: { id: currentUser } }
          );
    } 
}




module.exports = {updateChallengers}