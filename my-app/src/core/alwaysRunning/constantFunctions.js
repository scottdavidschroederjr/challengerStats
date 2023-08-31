const {challengerScrape} = require("../../riotRequests/combos/challengerScrape.js")
const {updateAnalysisTable} = require("../analysis/updateAnalysisTable.js")
const latestPatch = 1693371600
const tftSetNumber = "TFTSet9"

async function autoScrap(){
    while (latestPatch > 0) {
        await challengerScrape(latestPatch)
        await challengerScrape(latestPatch, 'grandmaster')
        await updateAnalysisTable(tftSetNumber, latestPatch)
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

autoScrap()

exports.latestPatch = latestPatch