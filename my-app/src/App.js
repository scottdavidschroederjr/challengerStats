import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"

import AugmentData from './visuals/static/augmentData';
import UnitStats from './visuals/unitDisplay.js'
import TomeDisplay from './visuals/static/tomeDisplay';



export function App() {
  const [dataPackage, setdataPackage] = useState(0);
  const config = {headers: {'Content-Type': 'application/json'}}  
  async function getData() {await axios.post('http://localhost:3002/api/data', config).then(response => setdataPackage(response['data']))}

  
  
  if (dataPackage === 0) {
    getData()
    return (
      <div>wait one moment!</div>
    )}
  else{
    return (
      <div>
        <AugmentData/>
        <TomeDisplay/>
        <br></br>
        <UnitStats aboveUnitData={dataPackage[0]}/>
      </div>
    )
  }
}
  
  




