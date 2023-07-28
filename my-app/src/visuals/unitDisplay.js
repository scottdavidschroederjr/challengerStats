import React, { useState } from 'react';

function UnitDisplay({aboveUnitData}) {
  const [showRows, setShowRows] = useState(10);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleShowRowsChange = (event) => {setShowRows(parseInt(event.target.value))}
  const handleColumnSort = (columnIndex) => {
    if (columnIndex === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(columnIndex)
      setSortOrder('asc')
    }
  }
  const sortedData = [...aboveUnitData];
  if (sortColumn !== null) {
      sortedData.sort((a, b) => {
        const columnA = a[sortColumn];
          const columnB = b[sortColumn];
          return sortOrder === 'asc' ? columnA - columnB : columnB - columnA;
        });
      }

  return (
        <div className='component'>
          Champion Appearance
          <br></br>
          <label>
            Rows:
            <input
              type="number"
              min="1"
              max={aboveUnitData.length}
              value={showRows}
              onChange={handleShowRowsChange}
            />
          </label>
    
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
      );
    
  };
  
    



export default UnitDisplay