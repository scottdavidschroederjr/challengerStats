const {matchDataCollection} = require("./lowerFunctions/matchDataCollection.js")
const {unitCountData} = require("./lowerFunctions/unitAppearenceData.js")
const {analysisData} = require("../../database/modules/createTables.js")
const {placementByStars} = require("../analysis/lowerFunctions/placementByStars.js")
const {emblemWR} = require("../analysis/lowerFunctions/emblemWR.js")
const {itemWR} = require("../analysis/lowerFunctions/itemWR.js")

async function updateAnalysisTable(tftSetNumber, latestPatch) {
    var data = await matchDataCollection(tftSetNumber, latestPatch)

    //updates overall champion appears count
    var unitCount = await unitCountData(data[0])
    var jsonUnitCount = JSON.stringify(unitCount)
    await updateOrCreate(analysisData, {type: 'unitCount'}, {type: 'unitCount'})
    await updateOrCreate(analysisData, {type: 'unitCount'}, {data: jsonUnitCount})

    //updates champion by star count
    var starCount = await placementByStars(data[0])
    var jsonStarCount = JSON.stringify(starCount)
    await updateOrCreate(analysisData, {type: 'starCount'}, {type: 'starCount'})
    await updateOrCreate(analysisData, {type: 'starCount'}, {data: jsonStarCount})

    //updates emblem win rates
    var emblemPlacement = await emblemWR(data[0])
    var jsonEmblemPlacement = JSON.stringify(emblemPlacement)
    await updateOrCreate(analysisData, {type: 'emblemPlacement'}, {type: 'emblemPlacement'})
    await updateOrCreate(analysisData, {type: 'emblemPlacement'}, {data: jsonEmblemPlacement})

    //update augment placements
    //var augmentStats = await augmentPlacement(data[2])
    //var jsonAugmentStats = JSON.stringify(augmentStats)
    //await updateOrCreate(analysisData, {type: 'augmentStats'}, {type: 'augmentStats'})
    //await updateOrCreate(analysisData, {type: 'augmentStats'}, {data: jsonAugmentStats})

    //update overall item data
    var itemStats = await itemWR(data[0])
    var jsonitemStats = JSON.stringify(itemStats)
    await updateOrCreate(analysisData, {type: 'itemStats'}, {type: 'itemStats'})
    await updateOrCreate(analysisData, {type: 'itemStats'}, {data: jsonitemStats})
    
    //update ryze data
    //var augmentStats = await augmentPlacement(data[2])
    //var jsonAugmentStats = JSON.stringify(augmentStats)
    //await updateOrCreate(analysisData, {type: 'augmentStats'}, {type: 'augmentStats'})
    //await updateOrCreate(analysisData, {type: 'augmentStats'}, {data: jsonAugmentStats})
       
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

module.exports = {updateAnalysisTable}