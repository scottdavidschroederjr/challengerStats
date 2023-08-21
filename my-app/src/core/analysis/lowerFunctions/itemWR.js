async function itemWR(data) {
    const counts = {};
    const sums = {};
  
    for (let x = 0; x < data.length; x++) {
      const values = [data[x][2], data[x][3], data[x][4]];
  
      for (const value of values) {
        if (value in counts) {
          counts[value]++;
          sums[value] += data[x][5];
        } else {
          counts[value] = 1;
          sums[value] = data[x][5];
        }
      }
    }
  
    const result = [];
  
    for (const value in counts) {
      const count = counts[value];
      const average = sums[value] / count;
      result.push([value, count, average]);
    }
  
    return result;
  }

  module.exports = {itemWR}