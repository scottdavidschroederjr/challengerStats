import requests

# input info
apiKey = ""
user1 = "SaveAsUntitled"
user2 = "plsperish"
setCoreName = "TFTSet7_2"

# LP change dictionary
lpChange = {1: 40, 2: 30, 3: 20, 4: 10, 5: -10, 6: -20, 7: -30, 8: -40}

# account info request
idRequestUser1 = requests.get("https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + user1 + "?api_key=" + apiKey)
idRequestUser2 = requests.get("https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/" + user2 + "?api_key=" + apiKey)
infoUser1 = idRequestUser1.json()
infoUser2 = idRequestUser2.json()

# setting account info
puuidUser1 = infoUser1["puuid"]
puuidUser2 = infoUser2["puuid"]
eidUser1 = infoUser1["id"]
eidUser2 = infoUser2["id"]

# getting win and loss info
leagueEntryUser1 = requests.get("https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/" + eidUser1 + "?api_key=" + apiKey)
leagueEntryUser2 = requests.get("https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/" + eidUser2 + "?api_key=" + apiKey)
leagueUser1 = leagueEntryUser1.json()
leagueUser2 = leagueEntryUser2.json()

# win and loss info
winsUser1 = leagueUser1[0]["wins"]
lossesUser1 = leagueUser1[0]["losses"]
gamesUser1 = winsUser1 + lossesUser1

winsUser2 = leagueUser2[0]["wins"]
lossesUser2 = leagueUser2[0]["losses"]
gamesUser2 = winsUser2 + lossesUser2

# switching user1 and user2 variables if user2 has more games
if gamesUser2 > gamesUser1:
    user1, user2 = user2, user1
    puuidUser1, puuidUser2 = puuidUser2, puuidUser1
    eidUser1, eidUser2 = eidUser2, eidUser1
    winsUser1, winsUser2 = winsUser2, winsUser1
    lossesUser1, lossesUser2 = lossesUser2, lossesUser1
    gamesUser1, gamesUser2 = gamesUser2, gamesUser1

# request list of games for both players
lowerCount = 0
higherCount = 200
gamesListUser1 = []

while int(lowerCount) < gamesUser1:
    gamesListRequestUser1 = requests.get("https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + puuidUser1 + "/ids?start=" + str(lowerCount) + "&count=" + str(higherCount) + "&api_key=" + apiKey)
    tempList = gamesListRequestUser1.json()
    gamesListUser1.extend(tempList)
    lowerCount = lowerCount + 200
    higherCount = higherCount + 200

lowerCount = 0
higherCount = 200
gamesListUser2 = []

while int(lowerCount) < gamesUser2:
    gamesListRequestUser2 = requests.get("https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/" + puuidUser2 + "/ids?start=" + str(lowerCount) + "&count=" + str(higherCount) + "&api_key=" + apiKey)
    tempList = gamesListRequestUser2.json()
    gamesListUser2.extend(tempList)
    lowerCount = lowerCount + 200
    higherCount = higherCount + 200


# compare two lists of matches (may have to turn both into actual lists), if game exists in list1, add to duo games
duoGames = list(set(gamesListUser1).intersection(gamesListUser2))

# clean data and put into placements into an array
duoStats = []
x = 0

while x < duoGames.__len__():
    gameInfoRequest = requests.get("https://americas.api.riotgames.com/tft/match/v1/matches/" + duoGames[x] + "?api_key=" + apiKey)
    gameInfo = gameInfoRequest.json()

    # current set check
    if gameInfo['info']['tft_set_core_name'] != setCoreName:
        x = x + 1
        continue

    # ranked check
    if gameInfo['info']['queue_id'] != 1100:
        x = x + 1
        continue

    # proper game mode check
    if gameInfo['info']['tft_game_type'] != "standard":
        x = x + 1
        continue

    # break data down to extract placements
    gameInfo = gameInfo['info']['participants']
    gameArray = [duoGames[x], 0, 0]
    playerCount = 0

    # grab placements and put in array
    while playerCount < 8:
        if gameInfo[playerCount]["puuid"] == puuidUser1:
            gameArray[1] = gameInfo[playerCount]["placement"]

        if gameInfo[playerCount]["puuid"] == puuidUser2:
            gameArray[2] = gameInfo[playerCount]["placement"]

        playerCount = playerCount + 1

    # add game array to duo stats
    duoStats.append(gameArray)
    x = x + 1

# set stats variables
statsCount = 0

duoLpUser1 = 0
duoWinsUser1 = 0
duoLossUser1 = 0

duoLpUser2 = 0
duoWinsUser2 = 0
duoLossUser2 = 0

# get wins, losses and LP from duoStats array
while statsCount < duoStats.__len__():
    # get LP change
    duoLpUser1 = duoLpUser1 + lpChange[duoStats[statsCount][1]]
    duoLpUser2 = duoLpUser2 + lpChange[duoStats[statsCount][2]]

    # W/L update based on placement
    if duoStats[statsCount][1] <= 4:
        duoWinsUser1 = duoWinsUser1 + 1
    else:
        duoLossUser1 = duoLossUser1 + 1

    if duoStats[statsCount][2] <= 4:
        duoWinsUser2 = duoWinsUser2 + 1
    else:
        duoLossUser2 = duoLossUser2 + 1

    statsCount = statsCount + 1


# get stats for final results
winDuoUser1 = (duoWinsUser1/(duoWinsUser1 + duoLossUser1))
winOverallUser1 = (winsUser1/(winsUser1 + lossesUser1))
winDifUser1 = winDuoUser1 - winOverallUser1

winDuoUser1 = "{:.2%}".format(winDuoUser1)
winOverallUser1 = "{:.2%}".format(winOverallUser1)
winDifUser1 = "{:.2%}".format(winDifUser1)

winDuoUser2 = (duoWinsUser2/(duoWinsUser2 + duoLossUser2))
winOverallUser2 = (winsUser2/(winsUser2 + lossesUser2))
winDifUser2 = winDuoUser2 - winOverallUser2

winDuoUser2 = "{:.2%}".format(winDuoUser2)
winOverallUser2 = "{:.2%}".format(winOverallUser2)
winDifUser2 = "{:.2%}".format(winDifUser2)

# printing results
print("Net LP from Duo Games")
print(str(user1) + "'s LP Change: " + str(duoLpUser1) + " (" + str(duoWinsUser1) + "-" + str(duoLossUser1) + ")")
print(str(user2) + "'s LP Change: " + str(duoLpUser2) + " (" + str(duoWinsUser2) + "-" + str(duoLossUser2) + ")" + "\n")

print("Duo Top 4 Rate")
print(str(user1) + "'s Duo Top 4 Rate: " + str(winDuoUser1) + " (" + str(winDifUser1) + " vs Avg Rate)")
print(str(user2) + "'s Duo Top 4 Rate: " + str(winDuoUser2) + " (" + str(winDifUser2) + " vs Avg Rate)")



