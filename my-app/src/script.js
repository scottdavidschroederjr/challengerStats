// for running SQL stuff
const { sq } = require("./database/db.js")
//const { DataTypes } = require("sequelize");
const { User } = require("./database/modules/createTables.js")
const { matchUsers } = require("./database/modules/createTables.js")
const { generalMatchData } = require("./database/modules/createTables.js")
const { updateTrait } = require("./database/update/updateTrait.js")
const { updateUnits } = require("./database/update/updateUnits.js")
const { updatePUUID } = require("./database/update/updatePUUID.js")
const { updateUsers } = require("./database/update/updateUsers.js")
const { updateGeneralMatchData } = require("./database/update/updateGeneralMatch.js")


//variables that need to be seen everywhere
//this can be cleaned up to mainly reference output object
var userName1 = ""
var userName2 = ""
const apiKey = ""
var setNumber = ""
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
      "top4Rate": 0,
      "winRate": 0,
      "matchResults": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0
        }
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
      "top4Rate": 0,
      "winRate": 0,
      "matchResults": {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0
        }
    }
  }

  const fetchDataPromises = [
    fetchData(userName1, "puuid", userName1).then((user1PUUID) =>
      fetchData(user1PUUID, "matchList", userName1)
    ),
    fetchData(userName2, "puuid", userName2).then((user2PUUID) =>
      fetchData(user2PUUID, "matchList", userName2)
    ),
  ];

  return Promise.all(fetchDataPromises).then((finalOutput) => {
    return finalOutput;
  });
}

//all functions that request data flow through here
async function fetchData(requestInput, typeOfRequest = false, username) {

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
        output[userName1]["puuid"] = sqlPUUID
      }
      else {
        output[userName2]["puuid"] = sqlPUUID
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
      updatePUUID(requestInput, data)

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
          //TODO make this work for both username 1 and username 2, probably make it a function that runs with username as an arg
          //updates LP and then updates match results
          output[userName1]["duoLPChange"] = output[userName1]["duoLPChange"] + lpChange[output[userName1]["duoPlacements"][x]]
          output[userName1]["matchResults"][output[userName1]["duoPlacements"][x]] = output[userName1]["matchResults"][output[userName1]["duoPlacements"][x]] + 1

          if (output[userName1]["duoPlacements"][x] <= 4) {
            output[userName1]["duoWins"] = output[userName1]["duoWins"] + 1
          } else {
            output[userName1]["duoLosses"] = output[userName1]["duoLosses"] + 1
          }
        }

        for (let y = 0; y < Object.keys(output[userName2]["duoPlacements"]).length; y++) {
          output[userName2]["duoLPChange"] = output[userName2]["duoLPChange"] + lpChange[output[userName2]["duoPlacements"][y]]
          output[userName2]["matchResults"][output[userName2]["duoPlacements"][y]] = output[userName2]["matchResults"][output[userName2]["duoPlacements"][y]] + 1

          if (output[userName2]["duoPlacements"][y] <= 4) {
            output[userName2]["duoWins"] = output[userName2]["duoWins"] + 1
          } else {
            output[userName2]["duoLosses"] = output[userName2]["duoLosses"] + 1
          }
        }

        //sets top4Rate and winrate
        output[userName1]["top4Rate"] = ((output[userName1]["duoWins"]/(output[userName1]["duoWins"] + output[userName1]["duoLosses"])) * 100).toFixed(0) + '%'
        output[userName1]["winRate"] = ((output[userName1]["matchResults"]["1"]/(output[userName1]["duoWins"] + output[userName1]["duoLosses"])) * 100).toFixed(0) + '%'

        output[userName2]["top4Rate"] = ((output[userName2]["duoWins"]/(output[userName2]["duoWins"] + output[userName2]["duoLosses"])) * 100).toFixed(0) + '%'
        output[userName2]["winRate"] = ((output[userName2]["matchResults"]["1"]/(output[userName2]["duoWins"] + output[userName2]["duoLosses"])) * 100).toFixed(0) + '%'

        console.log(userName1 + "'s duo record " + output[userName1]["duoWins"] + "-" + output[userName1]["duoLosses"] + " with a estimated LP change of: " + output[userName1]["duoLPChange"])
        console.log(userName2 + "'s duo record " + output[userName2]["duoWins"] + "-" + output[userName2]["duoLosses"] + " with a estimated LP change of: " + output[userName2]["duoLPChange"])

        return output
      }
    }
  
  //gets match data
  else if (typeOfRequest === "matchInfo") {

    //checks databases
      async function checkMatch(inputMatch) {
        try {
        const matchesDB = await generalMatchData.findAll({
          where: {
            matchID: inputMatch
            }
          })
        const plainMatch = matchesDB.map(user => user.toJSON())
        try {
          return plainMatch
        } catch {
          return undefined
        }
       } catch {
        return undefined
       }
      }

      async function checkUsersMatch(inputMatch) {
        try {
          const matchesUsersDB = await matchUsers.findAll({
            where: {
              matchID: inputMatch
              }
            })
          const plainUsersMatch = matchesUsersDB.map(user => user.toJSON())
          
          try {
            if (plainUsersMatch[0]['tft_set_core_name'] !== undefined){
              return plainUsersMatch
            }
            else return undefined
          } catch {
            return undefined
          }
         } catch {
          return undefined
         }
        }

      var sqlUsersMatch = await checkUsersMatch(requestInput)
      var sqlMatch = await checkMatch(requestInput)
  
      //gets info from database
      //set to double undefined while this is WIP
      if (sqlMatch !== undefined && sqlUsersMatch !== undefined && 0 === 1){  

        //put data about match where it needs to be!
        if (sqlUsersMatch[0]['tft_set_core_name'] === setNumber && sqlUsersMatch[0]['queue_id'] === "1100" && sqlUsersMatch[0]['tft_game_type'] === "standard"){
  
          //TODO getting this to get the proper placement data out
          function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
          }

          //getting which player each user is in the game to reference data (bad hack)
          let indexPlayer1 = getKeyByValue(sqlMatch[0], output[userName1]["puuid"])
          let user1placement = indexPlayer1[0] + indexPlayer1[6] + "_placement"
          let indexPlayer2  = getKeyByValue(sqlMatch[0], output[userName2]["puuid"])
          let user2placement = indexPlayer2[0] + indexPlayer2[6] + "_placement"
    
          //adds both player's placements to the output object
          output[userName1]["duoPlacements"] = output[userName1]["duoPlacements"].concat(sqlMatch[0][user1placement])
          output[userName2]["duoPlacements"] = output[userName2]["duoPlacements"].concat(sqlMatch[0][user2placement])
  
        }  
  
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

        //adds data to databases
        updateUsers(requestInput, data)
        updateGeneralMatchData(requestInput, data)
        updateTrait(requestInput, data)
        updateUnits(requestInput, data)


        //proper set, ranked and only normal match check
        if (data['info']['tft_set_core_name'] === setNumber && data['info']['queue_id'] === 1100 && data['info']['tft_game_type'] === "standard"){
  
  
          let playerArray = []
          let indexPlayer1 = 9
          let indexPlayer2 = 9
    
          playerArray = playerArray.concat(data["metadata"]["participants"])
    
          indexPlayer1  = playerArray.indexOf(output[userName1]["puuid"])
          indexPlayer2  = playerArray.indexOf(output[userName2]["puuid"])

    
          //adds both player's placements to the output object
          output[userName1]["duoPlacements"] = output[userName1]["duoPlacements"].concat(data["info"]["participants"][indexPlayer1]['placement'])
          output[userName2]["duoPlacements"] = output[userName2]["duoPlacements"].concat(data["info"]["participants"][indexPlayer2]['placement'])
  
        }        
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