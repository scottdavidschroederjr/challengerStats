const { analysisData } = require("../modules/createTables.js")

async function stats(){

    const unitCount = await analysisData.findAll({where: {type: 'unitCount'}})
    var unitCountData = JSON.parse(unitCount[0]['dataValues']['data']);

    const starData = await analysisData.findAll({where: {type: 'starCount'}})
    var starCountData = JSON.parse(starData[0]['dataValues']['data'])

    const emblemData = await analysisData.findAll({where: {type: 'emblemPlacement'}})
    var emblemCountData = JSON.parse(emblemData[0]['dataValues']['data'])

    var allData = [unitCountData, starCountData, emblemCountData]
    return allData
}

module.exports = {stats}

