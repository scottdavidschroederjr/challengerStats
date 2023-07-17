const { User, matchUsers, generalMatchData} = require("../modules/createTables.js")
const { Op } = require("sequelize")
const { sq } = require("../../database/db.js")

sq.sync()


async function challengerMatches (setNumber = "TFTSet9"){
    //any additional info that would also want to be extracted from these matches should go here
    let aug1 = []
    let aug2 = []
    let aug3 = []
    //end of variables


    let puuidChallengers = []
    const  players = await User.findAll({
        where: {
            rank: 'challenger'
        },
        attributes: [
            'puuid',
        ]
    })
    generalMatchData.belongsTo(matchUsers, {foreignKey: 'matchID'})
    matchUsers.hasMany(generalMatchData, {foreignKey: 'matchID'})

    for (let s = 0; s < 2; s++){
        puuidChallengers.push(players[s]['dataValues']['puuid'])

        const matches = await generalMatchData.findAll({
            where: {
                [Op.or]: [
                    {"player1": puuidChallengers[s]},
                    {"player2": puuidChallengers[s]},
                    {"player3": puuidChallengers[s]},
                    {"player4": puuidChallengers[s]},
                    {"player5": puuidChallengers[s]},
                    {"player6": puuidChallengers[s]},
                    {"player7": puuidChallengers[s]},
                    {"player8": puuidChallengers[s]},
                ]
            },
            include: [{
                model: matchUsers,
                where: 
                    {"tft_set_core_name": setNumber,
                    "queue_id": 1100}
            }]         
            })
        for (let u = 0; u < matches.length; u++){

            //getting augement stats out
            for (let v = 0; v < 7; v++){
                let augment1 = "p" + (v + 1) + "_augment1"
                let augment2 = "p" + (v + 1) + "_augment2"
                let augment3 = "p" + (v + 1) + "_augment3"

                aug1.push(matches[u]['dataValues'][augment1])
                aug2.push(matches[u]['dataValues'][augment2])
                aug3.push(matches[u]['dataValues'][augment3])
                
            }

        }

    }



    return [aug1, aug2, aug3]

}


module.exports = {challengerMatches}