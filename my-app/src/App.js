import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//import 'bootstrap/dist/css/bootstrap.min.css'

import AugmentData from './visuals/static/augmentData';
import UnitStats from './visuals/unitDisplay.js'
import TomeDisplay from './visuals/static/tomeDisplay';
import PortalDisplay from './visuals/static/portalDisplay';
import StarBasedWR from './visuals/starbasedWR';
import EmblemWR from './visuals/emblemWR'
import LeDuck from './visuals/static/LeDuckSite';

export function App() {
  const [dataPackage, setdataPackage] = useState(0);
  const [showAugmentData, setShowAugmentData] = useState(true);
  const [showTomeDisplay, setShowTomeDisplay] = useState(false);
  const [showPortalDisplay, setShowPortalDisplay] = useState(false);
  const [showUnitStats, setShowUnitStats] = useState(true);
  const [showStarBasedWR, setShowStarBasedWR] = useState(false);
  const [showEmblemWR, setShowEmblemWR] = useState(false)
  const [showLeDuck, setShowLeDuck] = useState(true)

  const config = { headers: { "Content-Type": "application/json" } };

  async function getData() {
    await axios
      .post("http://localhost:3002/api/data", config)
      .then((response) => setdataPackage(response["data"]));
  }

  if (dataPackage === 0) {
    getData();
    return <div>wait one moment!</div>;
  } else {
    return (
    <div>
      <label><input type="checkbox" checked={showAugmentData} onChange={() => setShowAugmentData(!showAugmentData)}/>Augment Data</label>
      <label><input type="checkbox" checked={showTomeDisplay} onChange={() => setShowTomeDisplay(!showTomeDisplay)}/>Tome</label>
      <label><input type="checkbox" checked={showLeDuck} onChange={() => setShowLeDuck(!showLeDuck)}/>Build Sheets</label>
      <label><input type="checkbox" checked={showPortalDisplay} onChange={() => setShowPortalDisplay(!showPortalDisplay)}/>Portal/Ryze Info</label>
      <label><input type="checkbox" checked={showUnitStats} onChange={() => setShowUnitStats(!showUnitStats)}/>Units</label>
      <label><input type="checkbox" checked={showStarBasedWR} onChange={() => setShowStarBasedWR(!showStarBasedWR)}/>Starred Units</label>
      <label><input type="checkbox" checked={showEmblemWR}onChange={() => setShowEmblemWR(!showEmblemWR)}/>Emblem</label>
      <br></br><br></br>

    <div id="bigBox">
        {/* Conditional rendering based on the state variables */}
        {showAugmentData && <AugmentData />}
        {showTomeDisplay && <TomeDisplay />}
        {showLeDuck && <LeDuck />}
        {showPortalDisplay && <PortalDisplay />}
        {showUnitStats && <UnitStats aboveUnitData={dataPackage[0]} />}
        {showStarBasedWR && <StarBasedWR aboveUnitData={dataPackage[1]} />}
        {showEmblemWR && <EmblemWR aboveEmblemData={dataPackage[2]}/>}
      </div>
    </div>
    );
  }
}

  
  




