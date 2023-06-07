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

async function fetchData(requestInput, typeOfRequest = false, username) {

  //for converting user's username into PUUID
    if (typeOfRequest === "puuid") {
      
      let requestURL = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + requestInput + "?api_key=" + apiKey;
      let response = await fetch(requestURL)
      let data = await response.json();
      output[requestInput]["puuid"] = data["puuid"]
      return output[requestInput]["puuid"]
    }

  //for grabbing list of matches
    else if (typeOfRequest === "matchList"){
      var sectionOfMatches = 0

      var matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + requestInput + "/ids?start=" + sectionOfMatches + "&count=100&api_key=" + apiKey;
      

      var response = await fetch(matchRequestURL)
      var data = await response.json();

      
      output[username]["matches"] = data

      //starts comparison once matches have been pulled for both users
      if (Object.keys(output[userName1]["matches"]).length >= 100 && Object.keys(output[userName2]["matches"]).length >= 100) {
        const intersection = output[userName1]["matches"].filter(element => output[userName2]["matches"].includes(element));
        console.log(output[userName1]["puuid"])
        console.log(output[userName2]["puuid"])
        console.log(intersection)
      }
  

      }
  }





fetchData(userName1, "puuid").then(
user1PUUID => fetchData(user1PUUID, "matchList", userName1))

fetchData(userName2, "puuid").then(
user2PUUID => fetchData(user2PUUID, "matchList", userName2))

//function that cuts down match list to only matches that both users are in
//request duo match data for U1
//request duo match data for U2






