import React, { useState, useEffect } from 'react';

const StarBasedWR = ({ aboveUnitData }) => {
  const [numRows, setNumRows] = useState(10);
  const [filterValue, setFilterValue] = useState('3');
  const [dataToDisplay, setDataToDisplay] = useState([]);

  useEffect(() => {
    // Sort the aboveUnitData by default based on the Count column (aboveUnitData[x][2]) in ascending order
    sortByCount();
  }, []);

  // Function to sort the aboveUnitData based on the Count column (aboveUnitData[x][2])
  const sortByCount = () => {
    const sortedData = aboveUnitData.slice().sort((a, b) => a[2] - b[2]);
    // Reapply the filter after sorting
    setDataToDisplay(filterByLastCharacter(sortedData));
  };

  // Function to handle filtering based on the last character of the Unit column (aboveUnitData[x][0])
  const filterByLastCharacter = (data) => {
    const filteredData = data.filter((row) => row[0].endsWith(filterValue));
    // Update the filtered data after filtering
    return filteredData.slice(0, numRows);
  };

  // Function to update the displayed data when numRows or filterValue changes
  useEffect(() => {
    const filteredData = filterByLastCharacter(aboveUnitData);
    setDataToDisplay(filteredData);
  }, [numRows, filterValue, aboveUnitData]);

  return (
    <div className='component'>
        Rows:
        <input
          type="number"
          value={numRows}
          onChange={(e) => setNumRows(e.target.value)}
        />

 
        Stars:
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />

      <table>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Count</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {dataToDisplay.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[2]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StarBasedWR;
