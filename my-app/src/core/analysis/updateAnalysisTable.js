const {matchDataCollection} = require("./lowerFunctions/matchDataCollection.js")
const {unitCountData} = require("./lowerFunctions/unitAppearenceData.js")
const { analysisData} = require("../../database/modules/createTables.js")

async function updateAnalysisTable() {
    var data = await matchDataCollection()

    var unitCount = await unitCountData(data[0])
    var jsonUnitCount = JSON.stringify(unitCount)
    await updateOrCreate(analysisData, {type: 'unitCount'}, {type: 'unitCount'})
    await updateOrCreate(analysisData, {type: 'unitCount'}, {data: jsonUnitCount})
    

    
}

async function updateOrCreate (model, where, newItem) {
    // First try to find the record
   const foundItem = await model.findOne({where});
   if (!foundItem) {
        // Item not found, create a new one
        const item = await model.create(newItem)
        return  {item, created: true};
    }
    // Found an item, update it
    const item = await model.update(newItem, {where});
    return {item, created: false};
}


updateAnalysisTable()