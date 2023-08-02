import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"

import AugmentData from './visuals/static/augmentData';
import UnitStats from './visuals/unitDisplay.js'
import TomeDisplay from './visuals/static/tomeDisplay';
import PortalDisplay from './visuals/static/portalDisplay';
import StarBasedWR from './visuals/starbasedWR';

export function App() {
  const [dataPackage, setdataPackage] = useState(0);
  const [showAugmentData, setShowAugmentData] = useState(true);
  const [showTomeDisplay, setShowTomeDisplay] = useState(true);
  const [showPortalDisplay, setShowPortalDisplay] = useState(true);
  const [showUnitStats, setShowUnitStats] = useState(true);
  const [showStarBasedWR, setShowStarBasedWR] = useState(true);

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
        <div>
          <label>
            <input
              type="checkbox"
              checked={showAugmentData}
              onChange={() => setShowAugmentData(!showAugmentData)}
            />
            Show Augment Data
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={showTomeDisplay}
              onChange={() => setShowTomeDisplay(!showTomeDisplay)}
            />
            Show Tome Display
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={showPortalDisplay}
              onChange={() => setShowPortalDisplay(!showPortalDisplay)}
            />
            Show Portal Display
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={showUnitStats}
              onChange={() => setShowUnitStats(!showUnitStats)}
            />
            Show Unit Stats
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={showStarBasedWR}
              onChange={() => setShowStarBasedWR(!showStarBasedWR)}
            />
            Show Star Based WR
          </label>
        </div>
        <div id="bigBox">
        {/* Conditional rendering based on the state variables */}
        {showAugmentData && <AugmentData />}
        {showTomeDisplay && <TomeDisplay />}
        {showPortalDisplay && <PortalDisplay />}
        {showUnitStats && <UnitStats aboveUnitData={dataPackage[0]} />}
        {showStarBasedWR && <StarBasedWR aboveUnitData={dataPackage[1]} />}
        </div>
      </div>
    );
  }
}

  
  




