const {challengerScrape} = require("../riotRequests/combos/challengerScrape.js")

async function autoScrap(){
    while (latestPatch > 0) {
        await challengerScrape(latestPatch, 'grandmaster')
        //TODO function that runs analysis and puts this data into the analysis table
        await new Promise(resolve => setTimeout(resolve, 900000))
        await challengerScrape(latestPatch)
        //TODO function that runs analysis and puts this data into the analysis table
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

autoScrap()