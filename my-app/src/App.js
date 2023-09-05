import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"

import AugmentData from './visuals/static/augmentData';
import UnitStats from './visuals/unitDisplay.js'
import TomeDisplay from './visuals/static/tomeDisplay';
import PortalDisplay from './visuals/static/portalDisplay';
import StarBasedWR from './visuals/starbasedWR';
import EmblemWR from './visuals/emblemWR'
import LeDuck from './visuals/static/LeDuckSite';
import ItemWR from './visuals/itemWR';
import Cashout from './visuals/static/cashout';
import AugmentTree from './visuals/static/augmentTree';

export function App() {
  const [dataPackage, setdataPackage] = useState(0);
  const [showAugmentData, setShowAugmentData] = useState(false);
  const [showTomeDisplay, setShowTomeDisplay] = useState(false);
  const [showPortalDisplay, setShowPortalDisplay] = useState(false);
  const [showUnitStats, setShowUnitStats] = useState(false);
  const [showStarBasedWR, setShowStarBasedWR] = useState(false);
  const [showEmblemWR, setShowEmblemWR] = useState(false)
  const [showLeDuck, setShowLeDuck] = useState(false)
  const [showItemWR, setshowItemWR] = useState(false)
  const [showCashout, setshowCashout] = useState(false)
  const [showAugmentTree, setshowAugmentTree] = useState(false)

  const config = { headers: { "Content-Type": "application/json" } };
  
  const [showTools, setShowTools] = useState(false);
  const [showData, setShowData] = useState(false);

  const toggleToolsVisibility = () => {setShowTools(!showTools);};
  const toggleDataVisibility = () => {setShowData(!showData);};


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
    <div id="topBox">TFT Reference Doc</div>
    <div id="viewToggle">
      <div className='toggleCatHeader' onClick={toggleToolsVisibility}>Tools</div>
      <div className={`tools${showTools ? ' visible' : ''}`}>
      <label><input type="checkbox" checked={showTomeDisplay} onChange={() => setShowTomeDisplay(!showTomeDisplay)} />Tome</label><br></br>
      <label><input type="checkbox" checked={showAugmentTree} onChange={() => setshowAugmentTree(!showAugmentTree)} />Augment Tree</label><br></br>
      <label><input type="checkbox" checked={showCashout} onChange={() => setshowCashout(!showCashout)} />Piltover Cashout</label><br></br>
      </div>

      <div className='toggleCat'>
        <div className='toggleCatHeader'>Data</div>

      <label><input type="checkbox" checked={showAugmentData} onChange={() => setShowAugmentData(!showAugmentData)}/>Augment Data</label><br></br>

      <label><input type="checkbox" checked={showUnitStats} onChange={() => setShowUnitStats(!showUnitStats)}/>Units</label><br></br>

      <label><input type="checkbox" checked={showStarBasedWR} onChange={() => setShowStarBasedWR(!showStarBasedWR)}/>Starred Units</label><br></br>

      <label><input type="checkbox" checked={showEmblemWR}onChange={() => setShowEmblemWR(!showEmblemWR)}/>Emblem</label><br></br>

      <label><input type="checkbox" checked={showItemWR}onChange={() => setshowItemWR(!showItemWR)}/>Items</label><br></br>

      <label><input type="checkbox" checked={showPortalDisplay} onChange={() => setShowPortalDisplay(!showPortalDisplay)}/>Portal/Ryze Info</label><br></br>
      
      </div>

      <div className='toggleCat'>
      <div className='toggleCatHeader'>Reference</div>
        <label><input type="checkbox" checked={showLeDuck} onChange={() => setShowLeDuck(!showLeDuck)}/>Build Sheets</label><br></br>
      </div>
      
      
    </div>

    <div id="bigBox">
        {/* Conditional rendering based on the state variables */}
        {showAugmentData && <AugmentData />}
        {showTomeDisplay && <TomeDisplay />}
        {showLeDuck && <LeDuck />}
        {showPortalDisplay && <PortalDisplay />}
        {showCashout && <Cashout />}
        {showAugmentTree && <AugmentTree/>}
        {showUnitStats && <UnitStats aboveUnitData={dataPackage[0]} />}
        {showStarBasedWR && <StarBasedWR aboveUnitData={dataPackage[1]} />}
        {showEmblemWR && <EmblemWR aboveEmblemData={dataPackage[2]}/>}
        {showItemWR && <ItemWR aboveItemData={dataPackage[3]}/>}
      </div>
    </div>
    );
  }
}

  
  




