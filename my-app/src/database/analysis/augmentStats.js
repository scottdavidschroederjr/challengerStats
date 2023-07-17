const { challengerMatches } = require("../../database/search/challengerMatches.js")

function getTopOccurrences(arr) {
    // Create an empty object to store the counts
    var countObj = {};
  
    // Iterate over the array
    for (var i = 0; i < arr.length; i++) {
      var value = arr[i];
  
      // Check if the value is a string
      if (typeof value === 'string') {
        // Increment the count for the value in the object
        countObj[value] = (countObj[value] || 0) + 1;
      }
    }
  
    // Convert the object into an array of [key, value] pairs
    var countArray = Object.entries(countObj);
  
    // Sort the array based on the count in descending order
    countArray.sort(function(a, b) {
      return b[1] - a[1];
    });
  
    // Get the top occurrences from the sorted array
    var topOccurrences = countArray.slice(0, 10);
  
    // Convert each occurrence to a nested array with [value, count]
    var resultArray = topOccurrences.map(function(item) {
      return [item[0], item[1]];
    });
  
    // Return the array of top occurrences
    return console.log(resultArray);
  }
  
  



challengerMatches().then(x => getTopOccurrences(x[0]))
