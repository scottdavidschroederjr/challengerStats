import React, { useState } from 'react';
const set9traits = require('../riotAssets/set9traits.js')
const set9byStar = require("../riotAssets/set9unitsBystar.js")

function UnitDisplay({ aboveUnitData }) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilterPopup, setShowFilterPopup] = useState(false);
  
  function handleColumnSort(columnIndex) {
    if (columnIndex === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnIndex);
      setSortOrder('asc');
    }
  }
  

  const handleFilterChange = (filter) => {
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
  const displayedOptions = filteredOptions.slice(0, 20);

  return (
    <div className='component' id='championAppearanceBox'>
      
        <div className='componentHeader'>Champion Appearance</div>
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
        <div className='scrollable'>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleColumnSort(0)}>Unit</th>
              <th onClick={() => handleColumnSort(1)}>Count</th>
              <th onClick={() => handleColumnSort(2)}>Place</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((data, index) => (
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


    

