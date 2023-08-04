import React, { useState, useEffect } from 'react';

const EmblemWR = ({ aboveEmblemData }) => {
  // State to manage sorting
  const [sortBy, setSortBy] = useState('count'); // Default sorting by count
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order ascending
  const [rowsToShow, setRowsToShow] = useState(10); // Default number of rows to show

  // Handler for changing sorting options
  const handleSortChange = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc'); // Default to ascending order for new column
    }
  };

  // Handler for changing the number of rows to display
  const handleRowsToShowChange = (event) => {
    setRowsToShow(parseInt(event.target.value, 10));
  };

  if (!aboveEmblemData || !Array.isArray(aboveEmblemData)) {
    // Return null or a loading indicator when the data is not available yet
    return null; // or <div>Loading...</div>
  }

  // Remove "Emblem" from the trait names and sort data based on the current sorting options
  const sortedData = aboveEmblemData.map(([trait, count, place]) => [
    trait.replace('Emblem', '').trim(),
    count,
    place,
  ]).sort((a, b) => {
    const index = sortBy === 'place' ? 2 : 1;
    const aValue = a[index];
    const bValue = b[index];

    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  return (
    <div className='component'>
      {/* Sorting and Rows per Page Controls */}

        <label>
          Sort By:
          <button onClick={() => handleSortChange('count')}>
            Count {sortBy === 'count' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
          <button onClick={() => handleSortChange('place')}>
            Place {sortBy === 'place' && (sortOrder === 'asc' ? '▲' : '▼')}
          </button>
        </label>
        <label>
          Rows per Page:
          <input type="number" min="1" value={rowsToShow} onChange={handleRowsToShowChange} />
        </label>
        <br></br>

      <table>
        <thead>
          <tr>
            <th>Trait</th>
            <th>Count</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.slice(0, rowsToShow).map(([trait, count, place], index) => (
            <tr key={index}>
              <td>{trait}</td>
              <td>{count}</td>
              <td>{place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmblemWR;
