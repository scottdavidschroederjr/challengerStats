//TODO double check but I think this file is not used anymore

const { User, matchUsers, generalMatchData, unitMatchData} = require("../modules/createTables.js")
const { Op } = require("sequelize")
//const latestPatch = require("../../riotRequests/combos/challengerScrape.js")
const championData = require("../../riotAssets/tft-champion.js")

async function challengerMatches (setNumber = "TFTSet9"){

    //any additional info that would also want to be extracted from these matches should go here
    let challengerMatches = []
    let units = []

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
    
    //gets list of matches for challenger players
    generalMatchData.belongsTo(matchUsers, {foreignKey: 'matchID'})
    matchUsers.hasMany(generalMatchData, {foreignKey: 'matchID'})

    for (let s = 0; s < players.length; s++){

        const matches = await generalMatchData.findAll({
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
            //TODO SET ABOVE TIMES TO TIMES 1000 to properly account for latest patch
        try {challengerMatches.push(matches[0]['dataValues']['matchID'])} catch {}
        
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

        //getting stats out from matches
            for (let v = 0; v < 7; v++){

            const placementDataRequest =  await generalMatchData.findAll({
                where: {matchID: challengerMatches[u]}})
            
            let currentPlayer = "p" + (v + 1) + "_placement"
            let placement = placementDataRequest[0]['dataValues'][currentPlayer]


                for (let a = 0; a < 30; a++){
                    let unitArray = []
                    
                    let unit = "p" + (v + 1) + "_u" + (a + 1) + "_character_id"
                    let starLevel =  "p" + (v + 1) + "_u" + (a + 1) + "_tier"
                    let item1 = "p" + (v + 1) + "_u" + (a + 1) + "_item1"
                    let item2 = "p" + (v + 1) + "_u" + (a + 1) + "_item2"
                    let item3 = "p" + (v + 1) + "_u" + (a + 1) + "_item3"

                    
                    
                    //checks if unit exists before adding to data
                    if (unitDataRequest[0]['dataValues'][unit] === null || unitDataRequest[0]['dataValues'][unit] === undefined) {
                        a = 50;
                        
                    }
                    else {
                        let unitName = [unitDataRequest[0]['dataValues'][unit]]
                        unitArray.push(championData['data'][unitName]['name'])
                        unitArray.push(unitDataRequest[0]['dataValues'][starLevel])
                        unitArray.push(unitDataRequest[0]['dataValues'][item1])
                        unitArray.push(unitDataRequest[0]['dataValues'][item2])
                        unitArray.push(unitDataRequest[0]['dataValues'][item3])
                        unitArray.push(placement)
                        units.push(unitArray)
                    }

                }
                
            }

        }
        return units
    }

//module.exports = {challengerMatches}