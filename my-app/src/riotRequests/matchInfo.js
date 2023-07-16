const {updateGeneralMatchData} = require("../database/update/updateGeneralMatch.js")
const {updateTrait} = require("../database/update/updateTrait.js")
const {updateUsers} = require("../database/update/updateUsers.js")
const {updateUnits} = require("../database/update/updateUnits.js")

async function matchInfo(matchID) {

    updateUsers()
    updateGeneralMatchData()
    updateUnits()
    updateTrait()


}


module.exports = {matchInfo}