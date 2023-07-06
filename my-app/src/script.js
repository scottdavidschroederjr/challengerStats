// for running SQL stuff
const { sq } = require("./database/db.js")
const { DataTypes } = require("sequelize");
const { User } = require("./database/modules/createTables.js")
const { matchUsers } = require("./database/modules/createTables.js")
const { matchData } = require("./database/modules/createTables.js")


//variables that need to be seen everywhere
//this can be cleaned up to mainly reference output object
var userName1 = ""
var userName2 = ""
const apiKey = ""
var setNumber = ""
var puuid1 = ""
var puuid2 = ""
var output = {}
const lpChange = {1: 40, 2: 30, 3: 20, 4: 10, 5: -10, 6: -20, 7: -30, 8: -40}

//starts sync to SQL server
sq.sync()



//click button on site to call this function
function websiteRun(firstUserName, secondUserName, TFTset) {

  
  setNumber = TFTset.toString()
  userName1 = firstUserName.toString()
  userName2 = secondUserName.toString()



  output = {
    [userName1]: {
      "username":  [userName1],
      "puuid" : "",
      "matches": [],
      "duoMatches": [],
      "duoPlacements": [],
      "duoWins": 0,
      "duoLosses": 0,
      "duoLPChange": 0,
    },
    [userName2]: {
      "username": [userName2],
      "puuid" : "",
      "matches": [],
      "duoMatches": [],
      "duoPlacements": [],
      "duoWins": 0,
      "duoLosses": 0,
      "duoLPChange": 0,
    }
  }

  fetchData(userName1, "puuid", userName1).then(
  user1PUUID => fetchData(user1PUUID, "matchList", userName1))
  fetchData(userName2, "puuid", userName2).then(
  user2PUUID => fetchData(user2PUUID, "matchList", userName2))

}


async function fetchData(requestInput, typeOfRequest = false, username) {
  console.log(requestInput)

  //converts username to PUUID
  if (typeOfRequest === "puuid") {
    async function checkUsers(inputUser) {
      var lowerUser = inputUser.toLowerCase()
      const users = await User.findAll({
        where: {
          name: lowerUser
          }
        })
      const plainUsers = users.map(user => user.toJSON())

      try {
        return plainUsers[0]["puuid"]
      } catch {
        return undefined
      }
      
    }
      
    var sqlPUUID = await checkUsers(requestInput)
    

    //checks database for PUUID info
    if (sqlPUUID !== undefined) {

      output[requestInput]["puuid"] = sqlPUUID

      if (requestInput === userName1) {
        puuid1 = sqlPUUID
      }
      else {
        puuid2 = sqlPUUID
      }

      return output[requestInput]["puuid"]
      }

    //requests PUUID from Riot if not in database
    else {
      let requestURL = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + requestInput + "?api_key=" + apiKey;
      let response = await fetch(requestURL)
      let data = await response.json();
      output[requestInput]["puuid"] = data["puuid"]

      //adds PUUID to database
      try {
        User.findOrCreate({
          where: {puuid: data["puuid"]},
          defaults: {
          puuid: data["puuid"],
          name: requestInput.toLowerCase(),
          accountID: data["accountId"],
          id: data["id"]
         }
        })
      } catch {
        console.log("Error adding new user to database.")
      }

      //ugly fix but updates the global puuid values
      if (requestInput === userName1) {
        puuid1 = data["puuid"]
      }
      else {
        puuid2 = data["puuid"]
      }

      return output[requestInput]["puuid"]
    }
  }

  //getting match list
  else if (typeOfRequest === "matchList"){
      var sectionOfMatches = 0

      //grabs # of matches specified by number in while loop
      while (sectionOfMatches <= 1000){
        var matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + requestInput + "/ids?start=" + sectionOfMatches + "&count=100&api_key=" + apiKey;
        var response = await fetch(matchRequestURL)
        var data = await response.json();

        //rateLimits requests and gets proper data

        output[username]["matches"] = output[username]["matches"].concat(data)
        sectionOfMatches = sectionOfMatches + 100;
      }
      //once match list is full, save only duo games, third qualifer also stops it from getting into this loop twice for some reason?
      if (Object.keys(output[userName1]["matches"]).length >= 100 && Object.keys(output[userName2]["matches"]).length >= 100 && Object.keys(output[userName1]["duoMatches"]).length <= 0) {
        
        const intersection = output[userName1]["matches"].filter(element => output[userName2]["matches"].includes(element));

        //trying to fix the double run with this code
        output[userName1]["duoMatches"] = intersection
        output[userName2]["duoMatches"] = intersection
      
      //then start requesting data for duo games
        for (let i = 0; i < Object.keys(intersection).length; i++) {
            let response = await fetchData(intersection[i], "matchInfo").then()
        }

        console.log(output[userName1]["duoPlacements"])
        console.log(output[userName2]["duoPlacements"])
      
      //adds up wins and losses for each player
        for (let x = 0; x < Object.keys(output[userName1]["duoPlacements"]).length; x++) {

          output[userName1]["duoLPChange"] = output[userName1]["duoLPChange"] + lpChange[output[userName1]["duoPlacements"][x]]

          if (output[userName1]["duoPlacements"][x] <= 4) {
            output[userName1]["duoWins"] = output[userName1]["duoWins"] + 1
          } else {
            output[userName1]["duoLosses"] = output[userName1]["duoLosses"] + 1
          }
        }

        for (let y = 0; y < Object.keys(output[userName2]["duoPlacements"]).length; y++) {
          output[userName2]["duoLPChange"] = output[userName2]["duoLPChange"] + lpChange[output[userName2]["duoPlacements"][y]]

          if (output[userName2]["duoPlacements"][y] <= 4) {
            output[userName2]["duoWins"] = output[userName2]["duoWins"] + 1
          } else {
            output[userName2]["duoLosses"] = output[userName2]["duoLosses"] + 1
          }
        }
        console.log(userName1 + "'s duo record " + output[userName1]["duoWins"] + "-" + output[userName1]["duoLosses"] + " with a estimated LP change of: " + output[userName1]["duoLPChange"])
        console.log(userName2 + "'s duo record " + output[userName2]["duoWins"] + "-" + output[userName2]["duoLosses"] + " with a estimated LP change of: " + output[userName2]["duoLPChange"])
      }
    }
  
  //gets match data
    else if (typeOfRequest === "matchInfo") {

    //checks database
      async function checkMatch(inputMatch) {
        try {
        const matchesDB = await matchUsers.findAll({
          where: {
            matchID: inputMatch
            }
          })
        const plainMatch = matchesDB.map(user => user.toJSON())
  
        try {
          return plainMatch[0]["matchID"]
        } catch {
          return undefined
        }
       } catch {
        return undefined
       }
      }
      var sqlMatch = await checkMatch(requestInput)
      
  
      //gets info from database
      if (sqlMatch !== undefined) {

        console.log(sqlMatch + "it is in the database")
  
        //TODO put data about match where it needs to be!
  
        }

      //requests data from Riot
      else {
        let matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/"+ requestInput + "?api_key=" + apiKey
        // eslint-disable-next-line no-redeclare
        var response = await fetch(matchRequestURL)
        // eslint-disable-next-line no-redeclare
        var data = await response.json();
  
        //to catch failed requests because of rate limiting
        data = await rateLimitWait(data, matchRequestURL)

        //adds data to matchUsers database
        try {
          matchUsers.findOrCreate({
            where: {matchID: requestInput},

            defaults: {

            matchID: data["metadata"]["match_id"],
            game_datetime: data['info']["game_datetime"],
            game_length: data['info']["game_length"],
            queue_id: data['info']['tft_queue_id'],
            tft_game_type: data['info']['tft_game_type'],
            tft_set_core_name: data['info']['tft_set_core_name'],
            tft_set_number: data['info']['tft_set_number'],

            player1: data["metadata"]["participants"][0],
            player2: data["metadata"]["participants"][1],
            player3: data["metadata"]["participants"][2],
            player4: data["metadata"]["participants"][3],
            player5: data["metadata"]["participants"][4],
            player6: data["metadata"]["participants"][5],
            player7: data["metadata"]["participants"][6],
            player8: data["metadata"]["participants"][7]
            }
          })
          console.log("added new entry to DB")

        } catch {
          console.log("Error adding new match user info to database.")
        }

        //TODO adds data to matchData database
        try {

        } catch {
          console.log("Error adding new match info to database.")
        }

        }
        
        //proper set, ranked and only normal match check
        //might run into an issue here with scope and DATA not being seen outside of the else function above
        if (data['info']['tft_set_core_name'] === setNumber && data['info']['queue_id'] === 1100 && data['info']['tft_game_type'] === "standard"){
  
  
        let playerArray = []
        let indexPlayer1 = 9
        let indexPlayer2 = 9
  
        playerArray = playerArray.concat(data["metadata"]["participants"])
  
        indexPlayer1  = playerArray.indexOf(puuid1)
        indexPlayer2  = playerArray.indexOf(puuid2)
  
        //adds both player's placements to the output object
        output[userName1]["duoPlacements"] = output[userName1]["duoPlacements"].concat(data["info"]["participants"][indexPlayer1]['placement'])
        output[userName2]["duoPlacements"] = output[userName2]["duoPlacements"].concat(data["info"]["participants"][indexPlayer2]['placement'])

      }
    }
  }

//slow down requests when rate limit is hit
async function rateLimitWait (dataReturned, URL) {

  //checks if proper data was returned by request, first perm is for matchData second is for matchList
  if (dataReturned["metadata"] === undefined) {
    console.log(URL)

    //short time out of two seconds to wait out (20 requests every 1 second) limit 
    await new Promise(resolve => setTimeout(resolve, 5000));
    var response = await fetch(URL)
    let failedRequest = await response.json()

    //check for proper data after short wait
    if (failedRequest["metadata"] === undefined){
    console.log("Rate limit reached. Please wait one moment.")
    await new Promise(resolve => setTimeout(resolve, 120000));
    console.log("Thank you for waiting.")

      //long time out of two and a half minutes to wait out (100 requests every 2 minutes) limit
      // eslint-disable-next-line no-redeclare
      var response = await fetch(URL)
      let failedRequest = await response.json()


      //for complete failure of API to get data
      if (failedRequest["metadata"] === undefined){
        console.log("Request error. Try again later.")
        return failedRequest
      }

      else{
        return failedRequest
      }
    }
    else {
      return failedRequest
    } 
  }
  else {
    return dataReturned
  }
}

module.exports =  websiteRun 