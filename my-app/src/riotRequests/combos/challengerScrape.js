/* eslint-disable no-unused-vars */
const {puuidRequest} = require("../puuid.js")
const {requestChallengers} = require("../playersTier/challengerPlayers.js")
const {matchList} = require("../matchList.js")
const {matchInfo} = require("../matchInfo")
const {updateChallengers} = require("../../database/update/updateChallengers.js")
const {requestGMs} = require("../playersTier/grandmasterPlayers.js")
const {updateGMs} = require("../../database/update/updateGMs.js")

async function challengerScrape(patchTime, division = 'challengers') {
    var players = ""
    if (division === 'grandmaster') {
        players = await requestGMs()
        let dummyGMs = await updateGMs(players)
    } else {
        players = await requestChallengers()
    }


    try {
        for (let x = 0; x < players.length; x++){
            let puuid = await puuidRequest(players[x]["summonerName"])
            let matches = await matchList(puuid, patchTime)
            let info = await matchInfo(matches)
            console.log("Cycle " + x + " complete: " + (players[x]["summonerName"]))

        }
    } catch {
        console.log("Error scraping Challenger data. Check API status.")
        return
    }

    if (division === 'grandmaster'){
        let dummyGMs = await updateGMs(players)
        return console.log("GM Scrape complete!")

    } else {
        let dummyChallenger = await updateChallengers(players)
        return console.log("Challenger Scrape complete!")
    }
    
}


module.exports = {challengerScrape}

