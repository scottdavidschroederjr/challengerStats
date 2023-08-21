async function placementByStars(matchData) {
    // Create an object to store counts and sums for each combination of matchData[x][1] and value in matchData[x][0]
    const countsAndSums = {};
  
    // Loop through the matchData array
    for (const match of matchData) {
      const key = `${match[1]} ${match[0]}`;
      const value = Number(match[5]);
  
      // If the key doesn't exist in the countsAndSums object, initialize it with an empty array
      if (!countsAndSums.hasOwnProperty(key)) {
        countsAndSums[key] = {
          count: 0,
          sum: 0,
        };
      }
  
      // Update the count and sum for the current combination
      countsAndSums[key].count++;
      countsAndSums[key].sum += value;
    }
  
    // Create an array to store the results in the desired format
    const results = [];
  
    // Loop through the keys of the countsAndSums object
    for (const key of Object.keys(countsAndSums)) {
      const [separator, matchValue] = key.split(" ");
      const count = countsAndSums[key].count;
      const average = countsAndSums[key].sum / count;
  
      // Push the result to the results array in the desired format
      results.push([`${matchValue} ${separator}`, average, count]);
    }
    return results;
  }
  
  
module.exports = {placementByStars}