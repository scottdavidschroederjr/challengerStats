const { analysisData } = require("../modules/createTables.js")

async function stats(){

    const unitCount = await analysisData.findAll({where: {type: 'unitCount'}})
    var unitCountData = JSON.parse(unitCount[0]['dataValues']['data']);

    const starData = await analysisData.findAll({where: {type: 'starCount'}})
    var starCountData = JSON.parse(starData[0]['dataValues']['data'])

    const emblemData = await analysisData.findAll({where: {type: 'emblemPlacement'}})
    var emblemCountData = JSON.parse(emblemData[0]['dataValues']['data'])

    const itemData = await analysisData.findAll({where: {type: 'itemStats'}})
    var itemCountData = JSON.parse(itemData[0]['dataValues']['data'])

    const ryzeData = await analysisData.findAll({where: {type: 'ryzeStats'}})
    var ryzeCountData = JSON.parse(ryzeData[0]['dataValues']['data'])

    var allData = [unitCountData, starCountData, emblemCountData, itemCountData, ryzeCountData]
    return allData
}

module.exports = {stats}

