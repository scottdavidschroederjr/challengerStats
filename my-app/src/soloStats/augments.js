const { sq } = require("../database/db.js")
const { Op } = require("sequelize")
const { User } = require("../database/modules/createTables.js")
const { matchUsers, generalMatchData } = require("../database/modules/createTables.js")


sq.sync()

async function augmentStats(username, setNumber) {
    let PUUID = await getPUUID(username)
    let matchData = await getMatches(PUUID, setNumber)
    parseAugmentData(PUUID, matchData)
}


async function getPUUID(inputUser) {
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
        //TODO request PUUID from Riot here instead
      return undefined
    }}

//TODO use join to have this function return the rows from generalMatchData
async function getMatches (PUUID, setNumber) {
    let matchData = {}

    const matchList = await matchUsers.findAll({
        where: {
            "tft_set_core_name": setNumber,
            "queue_id": 1100,
            [Op.or]: [
                {"player1": PUUID},
                {"player2": PUUID},
                {"player3": PUUID},
                {"player4": PUUID},
                {"player5": PUUID},
                {"player6": PUUID},
                {"player7": PUUID},
                {"player8": PUUID},
            ]
        }
    })
    matchData["matchCount"] = matchList.length
    return matchData

}

function parseAugmentData(PUUID, data){
    let augmentDataArray = []
    
//TODO extract data
for (let x = 0; x < data["matchCount"]; x++){
    

    //get index of player

    //put augments in array


    //this will put the data in the right place after loop augmentDataArray.push([["result","aug1","aug2","aug3"])

}


//TODO 1. get a count of each time an augment was taken (count aug1=NULL as Legend Augment)
//TODO 2. get average placement when taking each augment
//TODO 3. get win rate when taking each augment

}

augmentStats("SaveAsUntitled", "TFTSet9")