const {challengerScrape} = require("../riotRequests/combos/challengerScrape.js")

async function autoScrap(){
    while (latestPatch > 0) {
        await challengerScrape(latestPatch, 'grandmaster')
        await new Promise(resolve => setTimeout(resolve, 900000))
        await challengerScrape(latestPatch)
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

autoScrap()