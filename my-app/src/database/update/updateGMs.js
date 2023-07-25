const { User } = require("../modules/createTables")
const { sq } = require("../../database/db.js")


async function updateGMs(players){
    await User.update(
        { rank: null },
        { where: { rank: 'grandmaster' } }
      );

    for (let x = 0; x < players.length; x++){
        let currentUser = players[x]["summonerId"]

        await User.update(
            { rank: 'grandmaster' },
            { where: { id: currentUser } }
          );
    } 
}




module.exports = {updateGMs}