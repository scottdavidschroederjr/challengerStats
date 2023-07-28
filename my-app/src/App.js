import './App.css';
import React, { useState } from 'react';
import UnitStats from './visuals/unitDisplay.js'
import CoreDisplay from './visuals/coreDisplay.js'
import axios from "axios"

var data = []
const config = {headers: {'Content-Type': 'application/json'}}
async function getData() {await axios.post('http://localhost:3002/api/data', config).then(response => data = response['data'])}

getData()

export function App() {
  
  if (data === []) {
    return  (
      <div>
        Loading data please wait!
      </div>
    )
  }

  else {
    console.log(data)
    

    return (
      <div>
        <CoreDisplay/>
        <UnitStats aboveUnitData={data}/>
      </div>
  );
  }

}



