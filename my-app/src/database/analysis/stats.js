const {UnitStats} = require("./unitStats.js")
const {challengerMatches} = require("../search/challengerMatches.js")

async function stats(){
    let results = await challengerMatches()

    let generalUnitCount = await UnitStats(results)

    return generalUnitCount
}

module.exports = {stats}