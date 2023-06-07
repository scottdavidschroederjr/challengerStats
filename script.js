//these will be the inputs on the site to pull the info
var apiKey = ""
var userName1 = "SaveAsUntitled"
var userName2 = "plsperish"
var setCoreName = "TFTSet7_2"

var output = {
  [userName1]: {
    "username": userName1,
    "puuid" : "",
    "matches": [],
    "duoWins": 0,
    "duoLosses": 0,
    "duoLPChange": 0,
  },
  [userName2]: {
    "username": userName2,
    "puuid" : "",
    "matches": [],
    "duoWins": 0,
    "duoLosses": 0,
    "duoLPChange": 0,
  }
}

console.log(output)

//putting pthe URLs needed for each request together


async function fetchData(requestInput, typeOfRequest = false) {

  //for converting user's username into PUUID
    if (typeOfRequest === "puuid") {
      var requestURL = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + requestInput + "?api_key=" + apiKey;
      const response = await fetch(requestURL)
      const data = await response.json();
      console.log(output)
      output[requestInput]["puuid"] = data["puuid"]
      return
    }

  //for grabbing list of matches

  }



fetchData(userName1, 'puuid').then(
fetchData(userName2, "puuid")).then()
//request U1 match list
//request U2 match list
//function that cuts down match list to only matches that both users are in
//request duo match data for U1
//request duo match data for U2









