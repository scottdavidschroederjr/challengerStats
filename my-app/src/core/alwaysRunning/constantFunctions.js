const {challengerScrape} = require("../../riotRequests/combos/challengerScrape.js")
const {updateAnalysisTable} = require("../analysis/updateAnalysisTable.js")
const latestPatch = 1694610000
const tftSetNumber = "TFTSet9"

async function autoScrap(){
    while (latestPatch > 0) {
        await updateAnalysisTable(tftSetNumber, latestPatch)
        await challengerScrape(latestPatch)
        await challengerScrape(latestPatch, 'grandmaster')
        await challengerScrape(latestPatch, 'master')

        
        
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

autoScrap()

exports.latestPatch = latestPatch