const {challengerScrape} = require("../../riotRequests/combos/challengerScrape.js")
const {updateAnalysisTable} = require("../analysis/updateAnalysisTable.js")
var latestPatch = 1690977600

async function autoScrap(){
    while (latestPatch > 0) {
        await updateAnalysisTable()
        await challengerScrape(latestPatch)
        await challengerScrape(latestPatch, 'grandmaster')
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

autoScrap()