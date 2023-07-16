const {puuidRequest} = require("../puuid.js")
const {requestChallengers} = require("../challengerPlayers.js")
const {matchList} = require("../matchList.js")
const {matchInfo} = require("../matchInfo")




async function challengerScrape() {
    let players = await requestChallengers()

    try {
        for (let x = 0; x < players.length; x++){
            console.log(x)
            let puuid = await puuidRequest(players[x]["summonerName"])
            let matches = await matchList(puuid)
            let info = await matchInfo(matches)
            console.log("Cycle complete.")

        }
    } catch {
        console.log("Error scraping Challenger data. Check API status.")
        return
    }
    return console.log("Scrape complete!")
}


challengerScrape()