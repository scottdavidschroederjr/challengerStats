const {apiKey} = require("../../secrets")
const {rateLimitWait} = require("./rateLimiter")

async function requestChallengers() {
    let requestURL = "https://na1.api.riotgames.com/tft/league/v1/challenger?api_key=" + apiKey;
    let response = await fetch(requestURL)
    let data = await response.json();

    try {
        return data["entries"]
    } catch {
        data = await rateLimitWait(data, requestURL, "tier")
        return data["entries"]
    }
  
}



module.exports = {requestChallengers}