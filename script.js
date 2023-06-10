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

  //converts username to PUUID
    if (typeOfRequest === "puuid") {
      
      let requestURL = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + requestInput + "?api_key=" + apiKey;
      let response = await fetch(requestURL)
      let data = await response.json();
      output[requestInput]["puuid"] = data["puuid"]
      return output[requestInput]["puuid"]
    }

  //getting match list
    else if (typeOfRequest === "matchList"){
      var sectionOfMatches = 0

      //grabs # of matches specified by number in while loop
      while (sectionOfMatches <= 1000){
        var matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + requestInput + "/ids?start=" + sectionOfMatches + "&count=100&api_key=" + apiKey;
        var response = await fetch(matchRequestURL)
        var data = await response.json();

        //TODO add protection from failed request function in here

        output[username]["matches"] = output[username]["matches"].concat(data)
        sectionOfMatches = sectionOfMatches + 100;
      }
      //once match list is full, save only duo games, third qualifer also stops it from getting into this loop twice for some reason?
      if (Object.keys(output[userName1]["matches"]).length >= 1000 && Object.keys(output[userName2]["matches"]).length >= 1000 && Object.keys(output[userName1]["duoMatches"]).length <= 0) {
        
        console.log('it my fault')
        const intersection = output[userName1]["matches"].filter(element => output[userName2]["matches"].includes(element));

        //trying to fix the double run with this code
        output[userName1]["duoMatches"] = intersection
        output[userName2]["duoMatches"] = intersection
      
      //then start requesting data for duo games
        for (let i = 0; i < Object.keys(intersection).length; i++) {
            let response = await fetchData(intersection[i], "matchInfo").then(console.log(i))
            
        }
      
      //TODO all data from duo matches is saved to output, now lets do some math


      }
    }
  
  //gets match data
    else if (typeOfRequest === "matchInfo") {
      let matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/"+ requestInput + "?api_key=" + apiKey
      var response = await fetch(matchRequestURL)
      var data = await response.json();

      //to catch failed requests because of rate limiting
      //data = await rateLimitWait(data, matchRequestURL)
      
    //TO DO add function that sorts out games from different sets HERE

    //putting match data in the proper place

      //gets which index each player is and then puts their placement into the dataset
      const puuid1 = output[userName1]["puuid"]
      const puuid2 = output[userName2]["puuid"]

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
async function rateLimitWait (dataReturned, URL) {

//checks if proper data was returned by request
  if (dataReturned["metadata"] == undefined) {
    let failedRequest = dataReturned

//short time out of two seconds to wait out (20 requests every 1 second) limit 
    var response = await fetch(URL)
    failedRequest = await response.json()
    console.log(failedRequest)

//check for proper data after short wait
    if (failedRequest["metadata"] == undefined){

//long time out of two and a half minutes to wait out (100 requests every 2 minutes) limit
      var response = await fetch(URL)
      failedRequest = response.json()


//for complete failure of API to get data
      if (failedRequest["metadata"] == undefined){
        console.log("Request error. Try again later.")
      }
//long wait resolves issue
      else{
        console.log("All good here after long wait!")
        return failedRequest
      }
    }
//short wait resolves issue    
    else {
      console.log("All good here after short wait!")
      return failedRequest
    }

//no issue with request   
  }
  else {
    console.log("All good here!")
    return dataReturned
  }
}

function sleep(ms) {
  new Promise(resolve => setTimeout(resolve, ms));
}





fetchData(userName1, "puuid").then(
user1PUUID => fetchData(user1PUUID, "matchList", userName1))

fetchData(userName2, "puuid").then(
user2PUUID => fetchData(user2PUUID, "matchList", userName2))







