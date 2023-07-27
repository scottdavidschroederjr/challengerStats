const {challengerScrape} = require("../../riotRequests/combos/challengerScrape.js")
const {updateAnalysisTable} = require("../analysis/updateAnalysisTable.js")
var latestPatch = 1689886800

async function autoScrap(){
    while (latestPatch > 0) {
        await challengerScrape(latestPatch, 'grandmaster')
        await challengerScrape(latestPatch)
        await updateAnalysisTable()
        
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

autoScrap()