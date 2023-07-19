import React, { useState } from 'react';
import axios from "axios"



function UnitDisplay() {
    const [unitData, setUnitData] = React.useState(null)
    const [showRows, setShowRows] = useState(10);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const config = {headers: {'Content-Type': 'application/json'}}
  
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
  


   async function getData() {
    await axios.post('http://localhost:3002/api/data', config).then(response => setUnitData(response['data']))}


    
  if (unitData === null){
        getData()
        

        return(
            <div>
              Loading data! One moment
            </div>)
    }
    else {
      const sortedData = [...unitData];
      if (sortColumn !== null) {
        sortedData.sort((a, b) => {
          const columnA = a[sortColumn];
          const columnB = b[sortColumn];
          return sortOrder === 'asc' ? columnA - columnB : columnB - columnA;
        });
      }
      return (
        <div>
          <label>
            Show Rows:
            <input
              type="number"
              min="1"
              max={unitData.length}
              value={showRows}
              onChange={handleShowRowsChange}
            />
          </label>
    
          <table>
            <thead>
              <tr>
                <th onClick={() => handleColumnSort(0)}>Unit</th>
                <th onClick={() => handleColumnSort(1)}>Occurrences</th>
                <th onClick={() => handleColumnSort(2)}>Placement</th>
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
  };
    





export default UnitDisplay