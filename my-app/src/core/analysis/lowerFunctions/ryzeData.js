const { analysisData } = require("../../../database/modules/createTables.js")
const ryzeInfo = require('../../../riotAssets/ryze.js')

async function ryzeData() {
    var ryzeData = []
    var regExp = /\(([^)]+)\)/;
    //get unit data from table
    const unitCount = await analysisData.findAll({where: {type: 'unitCount'}})
    var unitCountData = JSON.parse(unitCount[0]['dataValues']['data']);

    //take out only the ryze data
    for (x = 0; x < unitCountData.length; x++){
        if (unitCountData[x][0].startsWith("Ryze")) {
            var ryzeArray = unitCountData[x]
            var reg = regExp.exec(unitCountData[x][0])
            var ryzeRegion = reg[1]
            var ryzeSpell = ryzeInfo[ryzeRegion]
            console.log(ryzeArray)

            ryzeArray.push(ryzeRegion)
            ryzeArray.push(ryzeSpell)

            ryzeData.push(ryzeArray)
        }
    }
    console.log(ryzeData)
    return ryzeData
}

ryzeData()
module.exports = {ryzeData}