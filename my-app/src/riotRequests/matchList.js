const {apiKey} = require("../secrets")
const {rateLimitWait} = require("./rateLimiter")

//TODO once we have database structure setup for this, we want to only request matches since the last time they were requested
//TODO reasoning is it it'll be 2500 (250 players  * 10 all sections) requests to get data for all challenger users
//TODO may be worth it to create a seperate style of matchList request for this
//TODO OR WE ADD A VARIABLE TO THE USER TABLE THAT RECORDS LAST REQUESTED TIME (maybe +/- 24 hours just in case request was done while they were in game)

async function matchList(puuid, startTime = null) {
    var matches = []

    if (startTime === null) {
        for (let x = 0; x <= 1000; x = x + 100) {
            var matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + puuid + "/ids?start=" + x + "&count=100&api_key=" + apiKey;
            var response = await fetch(matchRequestURL)
            var data = await response.json()
    
    
            try {
                //need better error catcher
                matches = matches.concat(data)
            } catch {
                data = await rateLimitWait(data, matchRequestURL, 0)
                try {matches = matches.concat(data)}
                catch{return matches}
            }
        }
        return matches
    } else {
        for (let x = 0; x <= 500; x = x + 100) {
            var timedMatchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + puuid + "/ids?start=" + x + "&startTime=" + startTime + "&count=100&api_key=" + apiKey;
            var timedResponse = await fetch(timedMatchRequestURL)
            var timedData = await timedResponse.json()

            if (timedData.length <= 0) {
                x = 500

            } else {
            try {
                //TODO better error catcher here
                data = await rateLimitWait(timedData, timedMatchRequestURL, 0)
                matches = matches.concat(timedData)
            } catch {
                data = await rateLimitWait(timedData, timedMatchRequestURL, 0)
                try {matches = matches.concat(timedData)}
                catch{return matches}
            }}
    } return matches
    

}
}

module.exports = {matchList}