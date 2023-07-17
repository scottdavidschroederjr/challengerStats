import React, { useState } from 'react';
import axios from "axios"


function AugmentDisplay() {
    const [augmentData, setAugmentData] = React.useState(null)
    const config = {headers: {'Content-Type': 'application/json'}}

   async function getData() {
    await axios.post('http://localhost:3002/api/data', config).then(response => setAugmentData(response['data']))}


    
    if (augmentData === null){
        getData()
        

        return(
            <div>
                
            </div>)
    }
    else {
        return (
            <div>
            <table>
              <thead>
                <tr>
                  <th>Augment Name</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {augmentData.map(([name, count]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        )
    }

        
}



export default AugmentDisplay