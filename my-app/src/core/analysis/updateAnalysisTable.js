const {matchDataCollection} = require("./lowerFunctions/matchDataCollection.js")

async function updateAnalysisTable() {
    var data = await matchDataCollection()
    console.log(data)
    //TODO run unit count function
    
}