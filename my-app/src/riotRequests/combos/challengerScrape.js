const {puuidRequest} = require("../puuid.js")
const {requestChallengers} = require("../challengerPlayers.js")
const {matchList} = require("../matchList.js")
const {matchInfo} = require("../matchInfo")
const {updateChallengers} = require("../../database/update/updateChallengers.js")

async function challengerScrape() {
    let players = await requestChallengers()
    try {
        for (let x = 0; x < players.length; x++){
            //let puuid = await puuidRequest(players[x]["summonerName"])
            //let matches = await matchList(puuid)
            //let info = await matchInfo(matches)
            //console.log("Cycle complete.")

        }
    } catch {
        console.log("Error scraping Challenger data. Check API status.")
        return
    }
    // eslint-disable-next-line no-unused-vars
    let dummyChallenger = await updateChallengers(players)
    return console.log("Scrape complete!")
}


challengerScrape()

