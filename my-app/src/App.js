import './App.css';
import React, { useState, useEffect } from 'react';
import UnitStats from './visuals/unitDisplay.js'
import CoreDisplay from './visuals/coreDisplay.js'
import axios from "axios"



export function App() {
  const [loadingStatus, setloadingStatus] = useState(0);
  var data = []
  const config = {headers: {'Content-Type': 'application/json'}}  
  async function getData() {await axios.post('http://localhost:3002/api/data', config).then(response => data = response['data'])}

  getData()
  console.log(loadingStatus)
  console.log(data)
  console.log(data.length)

  useEffect(() => {coreDisplay()}, [])

  function coreDisplay(){
    return (
      <div>
        <CoreDisplay/>
        <UnitStats aboveUnitData={data[0]}/>
      </div>
  )
  }
  
  return (<div>wait one moment!</div>)
  }




