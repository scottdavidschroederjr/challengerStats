/* eslint-disable no-unused-vars */
const {puuidRequest} = require("../puuid.js")
const {requestChallengers} = require("../playersTier/challengerPlayers.js")
const {matchList} = require("../matchList.js")
const {matchInfo} = require("../matchInfo")
const {updateChallengers} = require("../../database/update/updateChallengers.js")
const {requestGMs} = require("../playersTier/grandmasterPlayers.js")

//time of latest patch in epoch time
//1689886800 b patch
var latestPatch = 1689886800

async function challengerScrape(patchTime, division = 'challengers') {
    var players = ""
    if (division === 'grandmaster') {
        players = await requestGMs()
    } else {
        players = await requestChallengers()
    }
    console.log(players)

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

async function autoScrap(){
    while (latestPatch > 0) {
        challengerScrape(latestPatch, 'grandmaster')
        await new Promise(resolve => setTimeout(resolve, 900000))
        challengerScrape(latestPatch)
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
        await new Promise(resolve => setTimeout(resolve, 900000))
    }
}

//autoScrap()

module.exports = latestPatch

