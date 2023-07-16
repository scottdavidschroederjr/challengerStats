const {puuidRequest} = require("../puuid.js")
const {requestChallengers} = require("../challengerPlayers.js")
const {matchList} = require("../matchList.js")




async function challengerScrape() {
    let players = await requestChallengers()

    try {
        for (let x = 0; x < players.length; x++){
            console.log(x)
            let puuid = await puuidRequest(players[x]["summonerName"])
            let matches = await matchList(puuid)

            for (let y = 0; y < matches.length; y++){

            }
            
        }
    } catch {
        console.log("Error scraping Challenger data. Check API status.")
        return
    }
    return console.log("Scrape complete!")
}


challengerScrape()