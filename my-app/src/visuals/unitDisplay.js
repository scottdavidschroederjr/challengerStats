import React, { useState } from 'react';
const set9traits = require('../riotAssets/set9traits.js')


// Assuming set9traits has been imported correctly

function UnitDisplay({ aboveUnitData }) {
  const [showRows, setShowRows] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const handleShowRowsChange = (event) => {
    setShowRows(parseInt(event.target.value));
  };

  const handleColumnSort = (columnIndex) => {
    if (columnIndex === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnIndex);
      setSortOrder('asc');
    }
  };

  const handleFilterChange = (filter) => {
    // Toggle the filter on/off
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  const filterData = () => {
    if (selectedFilters.length === 0) {
      return aboveUnitData;
    } else {
      return aboveUnitData.filter((data) => {
        const selectedFilterUnits = selectedFilters.flatMap(filter => set9traits[filter]);
        return selectedFilterUnits.includes(data[0]);
      });
    }
  };

  const sortedData = [...filterData()];

  if (sortColumn !== null) {
    sortedData.sort((a, b) => {
      const columnA = a[sortColumn];
      const columnB = b[sortColumn];
      return sortOrder === 'asc' ? columnA - columnB : columnB - columnA;
    });
  }

  const filteredOptions = Object.keys(set9traits).sort();
  const displayedOptions = filteredOptions.slice(0, 5);

  return (
    <div className='component' id='championAppearanceBox'>
      <div>
        <div className='componentHeader'>Champion Appearance</div>
        <br />
        <label>
          Rows:
          <input
            type='number'
            min='1'
            max={aboveUnitData.length}
            value={showRows}
            onChange={handleShowRowsChange}
          />
        </label>
        <br />
        <button onClick={() => setShowFilterPopup(!showFilterPopup)}>Filter Options</button>
        {showFilterPopup && (
          <div className="filterPopup">
            {displayedOptions.map((filterOption, index) => (
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
        )}
        <table>
          <thead>
            <tr>
              <th onClick={() => handleColumnSort(0)}>Unit</th>
              <th onClick={() => handleColumnSort(1)}>Count</th>
              <th onClick={() => handleColumnSort(2)}>Place</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.slice(0, showRows).map((data, index) => (
              <tr key={index}>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UnitDisplay;


    

