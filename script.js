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
    "duoMatches": [],
    "duoPlacements": [],
    "duoWins": 0,
    "duoLosses": 0,
    "duoLPChange": 0,
  },
  [userName2]: {
    "username": userName2,
    "puuid" : "",
    "matches": [],
    "duoMatches": [],
    "duoPlacements": [],
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

      while (sectionOfMatches <= 1000){
      var matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + requestInput + "/ids?start=" + sectionOfMatches + "&count=100&api_key=" + apiKey;
      

      var response = await fetch(matchRequestURL)
      var data = await response.json();

    
      output[username]["matches"] = output[username]["matches"].concat(data)
      
      sectionOfMatches = sectionOfMatches + 100;
      }

      //starts comparison once matches have been pulled for both users
      if (Object.keys(output[userName1]["matches"]).length >= 1000 && Object.keys(output[userName2]["matches"]).length >= 1000) {
        const intersection = output[userName1]["matches"].filter(element => output[userName2]["matches"].includes(element));
        
        //for (let i = 0; i < Object.keys(intersection).length; i++) THIS IS RIGHT CODE, SWAPPING SO WE DONT GET RATE LIMITED every 2 seconds
        for (let i = 0; i < Object.keys(intersection).length; i++) {
          fetchData(intersection[i], "matchInfo")
        }
      }
    }
    //for grabbing match data
    else if (typeOfRequest === "matchInfo") {
      let matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/"+ requestInput + "?api_key=" + apiKey
      var response = await fetch(matchRequestURL)
      var data = await response.json();

      //to catch failed requests because of rate limiting
      data = await rateLimitWait(data, matchRequestURL)
      console.log(data)
      

      const puuid1 = output[userName1]["puuid"]
      const puuid2 = output[userName2]["puuid"]
      console.log(requestInput)

    //TO DO add function that sorts out games from different sets HERE

    //gets which index each player is and then puts their placement into the dataset
      let playerArray = []
      playerArray = playerArray.concat(data["metadata"]["participants"])

      let indexPlayer1 = playerArray.indexOf(puuid1)
      let indexPlayer2 = playerArray.indexOf(puuid2)

    //adds both player's placements to the output object
      output[userName1]["duoPlacements"] = output[userName1]["duoPlacements"].concat(data["info"]["participants"][indexPlayer1]['placement'])
      output[userName2]["duoPlacements"] = output[userName2]["duoPlacements"].concat(data["info"]["participants"][indexPlayer2]['placement'])

    }
  }

//slow down requests when rate limit is hit
function rateLimitWait (dataReturned, URL) {
  console.log(dataReturned["metadata"])

  if (dataReturned["metadata"] == undefined) {
    let failedRequest = dataReturned
    //short time out of two seconds to wait out (20 requests every 1 second) limit
    setTimeout( async () => {
      var response = await fetch(URL)
      failedRequest = await response.json()
      console.log(failedRequest)
    },2000);


    //long time out of two and a half minutes to wait out (100 requests every 2 minutes) limit
    if (failedRequest["metadata"] == undefined){
      setTimeout( async () => {
        var response = await fetch(URL)
        failedRequest = await response.json()
      },150000);

      if (failedRequest["metadata"] == undefined){
        console.log("Request error. Try again later.")
      }
      else{
        console.log("All good here after long wait!")
        return failedRequest
      }
    }
    else {
      console.log("All good here after short wait!")
      return failedRequest
    }
    
  }
  else {
    console.log("All good here!")
    return dataReturned
  }
}




fetchData(userName1, "puuid").then(
user1PUUID => fetchData(user1PUUID, "matchList", userName1))

fetchData(userName2, "puuid").then(
user2PUUID => fetchData(user2PUUID, "matchList", userName2))

//function that cuts down match list to only matches that both users are in
//request duo match data for U1
//request duo match data for U2






