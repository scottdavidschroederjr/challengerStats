const {matchDataCollection} = require("./lowerFunctions/matchDataCollection.js")
const {unitCountData} = require("./lowerFunctions/unitAppearenceData.js")

async function updateAnalysisTable() {
    var data = await matchDataCollection()
    var unitCount = await unitCountData(data[0])
}

updateAnalysisTable()