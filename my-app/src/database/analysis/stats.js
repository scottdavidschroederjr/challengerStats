const {UnitStats} = require("./unitStats.js")
const {challengerMatches} = require("../search/challengerMatches.js")
const {analysisData} = require("../modules/createTables.js")

async function stats(){

    const unitCount = await analysisData.findAll({where: {type: 'unitCount'}})
    var unitCountData = JSON.parse(unitCount[0]['dataValues']['data']);
    return unitCountData
}

module.exports = {stats}

