const set9emblems = require('../../../riotAssets/set9emblems.js');

async function emblemWR(unitData) {
  const emblemUse = [];

  // Step 1: Extract data from unitData and put it into emblemUse
  for (let x = 0; x < unitData.length; x++) {
    const [champion, trait1, trait2, trait3, item, wr] = unitData[x];
    
    // Check if trait1, trait2, or trait3 exists in set9emblems
    if (set9emblems.hasOwnProperty(trait1)) {
      emblemUse.push([set9emblems[trait1]['name'], wr]);
    }
    if (set9emblems.hasOwnProperty(trait2)) {
      emblemUse.push([set9emblems[trait2]['name'], wr]);
    }
    if (set9emblems.hasOwnProperty(trait3)) {
      emblemUse.push([set9emblems[trait3]['name'], wr]);
    }
  }

  // Step 2: Calculate the count and average for each unique value in emblemUse
  const results = [];
  for (let x = 0; x < emblemUse.length; x++) {
    const [emblemName, wr] = emblemUse[x];
    const existingEntry = results.find(entry => entry[0] === emblemName);

    if (existingEntry) {
      existingEntry[1]++; // Increment the count
      existingEntry[2] += wr; // Add the win rate for averaging later
    } else {
      results.push([emblemName, 1, wr]);
    }
  }

  // Calculate the average for each entry
  for (const entry of results) {
    entry[2] /= entry[1]; // Divide the total wr by the count to get the average
  }

  return results;
}

module.exports = { emblemWR };
