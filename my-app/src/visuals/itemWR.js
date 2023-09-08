import React, { useState } from 'react';
import itemList from '../riotAssets/set9midset/set9midItems';

function ItemWR({ aboveItemData }) {
  const [sortColumn, setSortColumn] = useState(1); // Initialize with column 2 as the default sorting column
  const [sortOrder, setSortOrder] = useState('asc'); // Initialize with ascending order as the default sorting order

  const toggleSort = (columnIndex) => {
    if (columnIndex === sortColumn) {
      // Toggle the sorting order if the same column header is clicked again
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set the new sorting column and default to ascending order
      setSortColumn(columnIndex);
      setSortOrder('asc');
    }
  };

  // Sort the data based on the selected column and order
  const sortedData = [...aboveItemData].sort((a, b) => {
    const colIndex = sortColumn - 1;
    if (sortOrder === 'asc') {
      return a[colIndex] - b[colIndex];
    } else {
      return b[colIndex] - a[colIndex];
    }
  });

  return (
    <div className="component">
      <div className="componentHeader">Item Data</div>
      <div className='scrollable'>
      <table >
        <thead>
          <tr>
            <th onClick={() => toggleSort(1)}>Item</th>
            <th onClick={() => toggleSort(2)}>Count</th>
            <th onClick={() => toggleSort(3)}>Place</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td>{itemList[item[0]] ? itemList[item[0]].name : item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2].toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
//itemList[item[0]].name
export default ItemWR;
