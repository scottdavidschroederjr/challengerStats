const { User, matchUsers, generalMatchData, unitMatchData, traitMatchData} = require("../../../database/modules/createTables.js")
const { Op } = require("sequelize")
const championData = require("../../../riotAssets/tft-champion.js")

async function matchDataCollection (setNumber = "TFTSet9", latestPatch){
    let challengerMatches = []
    let units = []
    let traits = []
    let augments = []

    //gets list of challenger's puuids
    const  players = await User.findAll({
        where: {
            [Op.or]: [
                {rank: 'challenger'},
                {rank: 'grandmaster'},
            ]
            
        },
        attributes: [
            'puuid',
        ]
    })
     
    generalMatchData.belongsTo(matchUsers, {foreignKey: 'matchID'})
    matchUsers.hasMany(generalMatchData, {foreignKey: 'matchID'})

    
    //gets list of matches for challenger players
    for (let s = 0; s < players.length; s++){
        try {
        var matches = await generalMatchData.findAll({
            where: {
                [Op.or]: [
                    {"player1": players[s]['dataValues']['puuid']},
                    {"player2": players[s]['dataValues']['puuid']},
                    {"player3": players[s]['dataValues']['puuid']},
                    {"player4": players[s]['dataValues']['puuid']},
                    {"player5": players[s]['dataValues']['puuid']},
                    {"player6": players[s]['dataValues']['puuid']},
                    {"player7": players[s]['dataValues']['puuid']},
                    {"player8": players[s]['dataValues']['puuid']},
                ]
            },
            attributes: ['matchID'],
            include: [{
                model: matchUsers,
                where: 
                    {"tft_set_core_name": setNumber,
                    "queue_id": 1100,
                    "game_datetime": {
                        [Op.gte]: (latestPatch * 1000)
                    }
                    },
            }]         
            })
        } catch(error) {
            console.log(error)
        }    
        for (let j = 0; j < matches.length; j++){
            challengerMatches.push(matches[j]['dataValues']['matchID'])
        }    
        
    }
    //gets duplicate matches out of list
    function removeDuplicates(array) {
        return [...new Set(array)];
      }
    

    challengerMatches = removeDuplicates(challengerMatches)
    
    //gets stats from matches
    for (let u = 0; u < challengerMatches.length; u++){
        const unitDataRequest =  await unitMatchData.findAll({
            where: {matchID: challengerMatches[u]}})
        
        const traitDataRequest =  await traitMatchData.findAll({
            where: {matchID: challengerMatches[u]}}) 

        const augmentDataRequest = await generalMatchData.findAll({
            where: {matchID: challengerMatches[u]}})
    
        console.log("Game #" + u)

        //getting stats out from matches
        for (let v = 0; v < 8; v++){
            let currentPlayer = "p" + (v + 1) + "_placement"
            let placement = augmentDataRequest[0]['dataValues'][currentPlayer]

            //unit stats
            for (let a = 0; a < 30; a++){
                let unitArray = []
                    
                let unit = "p" + (v + 1) + "_u" + (a + 1) + "_character_id"
                let starLevel =  "p" + (v + 1) + "_u" + (a + 1) + "_tier"
                let item1 = "p" + (v + 1) + "_u" + (a + 1) + "_item1"
                let item2 = "p" + (v + 1) + "_u" + (a + 1) + "_item2"
                let item3 = "p" + (v + 1) + "_u" + (a + 1) + "_item3"

                try {
                    let unitName = [unitDataRequest[0]['dataValues'][unit]]
                    unitArray.push(championData['data'][unitName]['name'])
                    unitArray.push(unitDataRequest[0]['dataValues'][starLevel])
                    unitArray.push(unitDataRequest[0]['dataValues'][item1])
                    unitArray.push(unitDataRequest[0]['dataValues'][item2])
                    unitArray.push(unitDataRequest[0]['dataValues'][item3])
                    unitArray.push(placement)
                    units.push(unitArray)
                } catch {
                    a = 50
                }
            }

            //trait stats
            for (let b = 0; b < 30; b++){
                let traitArray = []

                let trait = "p" + (v + 1) + "_t" + (b + 1) + "_name"
                let numUnits = "p" + (v + 1) + "_t" + (b + 1) + "_num_units"
                let style = "p" + (v + 1) + "_t" + (b + 1) + "_style"
                let tierCurrent = "p" + (v + 1) + "_t" + (b + 1) + "_tier_current"
                let tierTotal = "p" + (v + 1) + "_t" + (b + 1) + "_tier_total"

                try {
                    traitArray.push(traitDataRequest[0]['dataValues'][trait])
                    traitArray.push(traitDataRequest[0]['dataValues'][numUnits])
                    traitArray.push(traitDataRequest[0]['dataValues'][style])
                    traitArray.push(traitDataRequest[0]['dataValues'][tierCurrent])
                    traitArray.push(traitDataRequest[0]['dataValues'][tierTotal])
                    traitArray.push(placement)
                    traits.push(traitArray)
                } catch {
                    b = 50;
                }          
            }
            //augment stats
                let augmentArray = []
                let aug1 = "p" + (v + 1) + "_augment1"
                let aug2 = "p" + (v + 1) + "_augment2"
                let aug3 = "p" + (v + 1) + "_augment3"

                augmentArray.push(augmentDataRequest[0]['dataValues'][aug1])
                augmentArray.push(augmentDataRequest[0]['dataValues'][aug2])
                augmentArray.push(augmentDataRequest[0]['dataValues'][aug3])
                augmentArray.push(placement)
                augments.push(augmentArray)


        }
    }
    
    let results = [units, traits, augments]
    console.log(results)
    return results
}

module.exports = {matchDataCollection}