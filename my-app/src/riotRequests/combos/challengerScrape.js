/* eslint-disable no-unused-vars */
const {puuidRequest} = require("../puuid.js")
const {requestChallengers} = require("../challengerPlayers.js")
const {matchList} = require("../matchList.js")
const {matchInfo} = require("../matchInfo")
const {updateChallengers} = require("../../database/update/updateChallengers.js")

//time of latest patch in epoch time
const latestPatch = 1689760800

async function challengerScrape(patchTime) {
    let players = await requestChallengers()

    try {
        for (let x = 0; x < players.length; x++){
            console.log(players[x]["summonerName"])
            let puuid = await puuidRequest(players[x]["summonerName"])
            let matches = await matchList(puuid, patchTime)
            let info = await matchInfo(matches)
            console.log("Cycle " + x + " complete.")

        }
    } catch {
        console.log("Error scraping Challenger data. Check API status.")
        return
    }
    let dummyChallenger = await updateChallengers(players)
    return console.log("Scrape complete!")
}


challengerScrape(latestPatch)

module.exports = latestPatch

