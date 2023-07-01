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

  //converts username to PUUID
    if (typeOfRequest === "puuid") {
      
      let requestURL = "https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + requestInput + "?api_key=" + apiKey;
      let response = await fetch(requestURL)
      let data = await response.json();

      //TODO:LP there should IDEALLY be an instance of the rateLimit function here to check for errors
      //but if this is throwing an error, the whole service is probably down so low pryo

      output[requestInput]["puuid"] = data["puuid"]

      //ugly fix but updates the global puuid values
      if (requestInput === userName1) {
        puuid1 = data["puuid"]
      }
      else {
        puuid2 = data["puuid"]
      }

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
      let matchRequestURL = "https://americas.api.riotgames.com/tft/match/v1/matches/"+ requestInput + "?api_key=" + apiKey
      // eslint-disable-next-line no-redeclare
      var response = await fetch(matchRequestURL)
      // eslint-disable-next-line no-redeclare
      var data = await response.json();

      //to catch failed requests because of rate limiting
      data = await rateLimitWait(data, matchRequestURL)
      
      //proper set, ranked and only normal match check
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

//sleep function to fight against the evils of rate limiting
function sleep(ms) {
  new Promise(resolve => setTimeout(resolve, ms));
  return 
}

//fetchData(userName1, "puuid").then(
//user1PUUID => fetchData(user1PUUID, "matchList", userName1))
//fetchData(userName2, "puuid").then(
//user2PUUID => fetchData(user2PUUID, "matchList", userName2))

websiteRun("SaveAsUntitled", "EzWonTon", "TFTSet9")



//React to load page will go below here
/*function mainPage ()
{
  return (
    <div> 
    <div className="box">
    <div id="header">TFT Duo Stats</div>
    <div className="explainerText"><p>Use this tool to see how you perform when duoing with a friend in ranked TFT.</p></div>
    <div id="inputSection">
      
    <form>
      <input type="text" className="input" name="user1" id="user1" placeholder="Username #1"/>
      <input type="text" className="input" name="user2" id="user2" placeholder="Username #2"/>
      <br/><br/>
  
      <select className="input" name="htmlSet" id="htmlSet" required>
          <option value=""disabled>All Sets Included</option>
          <option value=""disabled>Set 1: TFT Beta Set</option>
          <option value=""disabled>Set 2: Rise of the Elements</option>
          <option value=""disabled>Set 3: Galaxies</option>
          <option value=""disabled>Set 3.5: Return to the Stars</option>
          <option value=""disabled>Set 4: Fates</option>
          <option value=""disabled>Set 4.5: Festival of Beasts</option>
          <option value=""disabled>Set 5: Reckoning</option>
          <option value=""disabled>Set 5.5: Dawn of Heroes</option>
          <option value=""disabled>Set 6: Gizmos & Gadgets</option>
          <option value=""disabled>Set 6.5: Neon Nights</option>
          <option value="TFTSet7">Set 7: Dragonlands</option>
          <option value="TFTSet7_2">Set 7.5: Uncharted Realms</option>
          <option value="TFTSet8">Set 8: Monsters Attack</option>
          <option value="TFTSet8_2" >Set 8.5: Glitched Out</option>
          <option value="TFTSet9" disabled>Set 9: Runeterra Reforged</option>
      </select>
    </form>
  
      <button id="duoRun" className="btn btn-submit" onclick="websiteRun(htmlSet.value,user1.value,user2.value)">Get duo stats</button>
    </div>
    </div>
      <br /><br />
    <div className="box">
      <div className="explainerText"/>Here's where we'd output the results of the function being run.<div/>
    </div>
    </div>
  )}
*/