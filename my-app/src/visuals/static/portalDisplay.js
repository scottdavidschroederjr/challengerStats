import React, { useState } from 'react';

function PortalDisplay({ aboveRyzeData }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      toggleSortOrder();
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  // Sort the data based on the selected column and order
  const sortedData = [...aboveRyzeData].sort((a, b) => {
    if (sortBy === 'Count' || sortBy === 'Place') {
      // Convert the values to numbers for numeric columns
      const valueA = parseInt(a[sortBy] || 0, 10);
      const valueB = parseInt(b[sortBy] || 0, 10);

      return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
    } else {
      const valueA = (a[sortBy] || '').toUpperCase(); // Handle undefined values
      const valueB = (b[sortBy] || '').toUpperCase(); // Handle undefined values

      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    }
  });

  return (
    <div className="component">
      <div className="componentHeader">Ryze Info</div>
      <div id='ryzeTable'>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort('Region')}>Region</th>
              <th onClick={() => handleSort('Count')}>Count</th>
              <th onClick={() => handleSort('Place')}>Place</th>
              <th onClick={() => handleSort('Spell')}>Spell</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((data, index) => (
              <tr key={index}>
                <td>{data[3]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>{data[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PortalDisplay;
