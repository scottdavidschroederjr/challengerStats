async function unitCountData(unitData) {  
    async function countOccurrences(nestedArray) {
        const counts = {};
      
        for (let i = 0; i < nestedArray.length; i++) {
          const value = nestedArray[i][0];
          counts[value] = (counts[value] || 0) + 1;
        }
      
        const results = [];
      
        for (const value in counts) {
          const count = counts[value];
          const sum = nestedArray.reduce((total, subArray) => {
            if (subArray[0] === value) {
              return total + subArray[5];
            }
            return total;
          }, 0);
      
          const average = (sum / count).toFixed(2);
      
          results.push([value, count, +average]);
        }
      
        results.sort((a, b) => b[1] - a[1]);
      
        return results;
      }
  
    let unitAppearenceCount = await countOccurrences(unitData)
    console.log(unitAppearenceCount)
    return unitAppearenceCount
}

module.exports = {unitCountData}