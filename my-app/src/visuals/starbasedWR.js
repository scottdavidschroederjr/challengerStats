import React, { useState, useEffect } from 'react';
import set9traits from '../riotAssets/set9traits.js';

const StarBasedWR = ({ aboveUnitData }) => {
  const [numRows, setNumRows] = useState(10);
  const [filterValue, setFilterValue] = useState('3');
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredOptions = Object.keys(set9traits).sort();

  useEffect(() => {
    // Sort and filter the aboveUnitData when numRows, filterValue, or aboveUnitData changes
    sortByCount();
  }, [numRows, filterValue, aboveUnitData, selectedFilters]);

  // Function to sort the aboveUnitData based on the Count column (aboveUnitData[x][2])
  const sortByCount = () => {
    // Filter the data based on the selected star value and selected trait filters
    const filteredData = aboveUnitData.filter((row) => {
      const unit = row[0];
      const starValue = unit.slice(-1);
      const traitKey = unit.slice(0, -1);
      return starValue === filterValue && (selectedFilters.length === 0 || selectedFilters.includes(traitKey));
    });

    // Sort the filtered data by the Count column in ascending order
    const sortedData = filteredData.slice().sort((a, b) => a[2] - b[2]);

    // Update the displayed data
    setDataToDisplay(sortedData.slice(0, numRows));
  };

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div className='component'>
      Rows:
      <input
        type="number"
        value={numRows}
        onChange={(e) => setNumRows(e.target.value)}
      />

      Stars:
      <select value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        {/* Add more options if needed */}
      </select>

      <div>
        <button onClick={() => setSelectedFilters([])}>Clear Filters</button>
        {filteredOptions.map((filterOption, index) => (
          <label key={index}>
            <input
              type='checkbox'
              checked={selectedFilters.includes(filterOption)}
              onChange={() => handleFilterChange(filterOption)}
            />
            {filterOption}
          </label>
        ))}
      </div>

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
