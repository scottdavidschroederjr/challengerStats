import './App.css';
import React, { useState, useEffect } from 'react';
import axios from "axios"

import AugmentData from './visuals/static/augmentData';
import UnitStats from './visuals/unitDisplay.js'
import TomeDisplay from './visuals/static/tomeDisplay';
import PortalDisplay from './visuals/static/portalDisplay';
import EmblemWR from './visuals/emblemWR'
import LeDuck from './visuals/static/LeDuckSite';
import ItemWR from './visuals/itemWR';
import Cashout from './visuals/static/cashout';
import AugmentTree from './visuals/static/augmentTree';
import DemaciaItems from './visuals/static/demaciatems';
import ShopOdds from './visuals/static/shopOdds';
import DamageFormula from './visuals/static/damageFormula';
import IxaocanTable from './visuals/static/ixaocanTable';

export function App() {
  const [dataPackage, setdataPackage] = useState(0);
  const [showAugmentData, setShowAugmentData] = useState(false);
  const [showTomeDisplay, setShowTomeDisplay] = useState(false);
  const [showPortalDisplay, setShowPortalDisplay] = useState(false);
  const [showUnitStats, setShowUnitStats] = useState(false);
  const [showEmblemWR, setShowEmblemWR] = useState(false)
  const [showLeDuck, setShowLeDuck] = useState(false)
  const [showItemWR, setshowItemWR] = useState(false)
  const [showCashout, setshowCashout] = useState(false)
  const [showAugmentTree, setshowAugmentTree] = useState(false)
  const [showDemaciaItems, setShowDemaciaItems] = useState(false)
  const [showShopOdds, setShowShopOdds] = useState(false)
  const [showDamageFormula, setShowDamageFormula] = useState(false)
  const [showIxaocanTable, setShowIxaocanTable] = useState(false)

  const config = { headers: { "Content-Type": "application/json" } };
  
  const [showTools, setShowTools] = useState(true);
  const [showData, setShowData] = useState(true);
  const [showReference, setShowReference] = useState(true);
  const [showTables, setShowTables] = useState(true);

  const toggleToolsVisibility = () => {setShowTools(!showTools);};
  const toggleDataVisibility = () => {setShowData(!showData);};
  const toggleReferenceVisibility = () => {setShowReference(!showReference);};
  const toggleTablesVisibility = () => {setShowTables(!showTables);};


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
        <label><input type="checkbox" checked={showTomeDisplay} onChange={() => setShowTomeDisplay(!showTomeDisplay)} />Tome (WIP)</label><br></br>
        <label><input type="checkbox" checked={showAugmentTree} onChange={() => setshowAugmentTree(!showAugmentTree)} />Augment Tree</label><br></br>
        
      </div>

      <div className='toggleCatHeader' onClick={toggleDataVisibility}>Data</div>
      <div className={`data${showData ? ' visible' : ''}`}>
  
        <label><input type="checkbox" checked={showAugmentData} onChange={() => setShowAugmentData(!showAugmentData)}/>Augment Data</label><br></br>

        <label><input type="checkbox" checked={showUnitStats} onChange={() => setShowUnitStats(!showUnitStats)}/>Units</label><br></br>

        <label><input type="checkbox" checked={showEmblemWR}onChange={() => setShowEmblemWR(!showEmblemWR)}/>Emblem</label><br></br>

        <label><input type="checkbox" checked={showItemWR}onChange={() => setshowItemWR(!showItemWR)}/>Items</label><br></br>

        <label><input type="checkbox" checked={showPortalDisplay} onChange={() => setShowPortalDisplay(!showPortalDisplay)}/>Ryze Info</label><br></br>
      
      </div>

      <div className='toggleCatHeader' onClick={toggleReferenceVisibility}>Reference</div>
      <div className={`data${showReference ? ' visible' : ''}`}>
        <label><input type="checkbox" checked={showLeDuck} onChange={() => setShowLeDuck(!showLeDuck)}/>Build Sheets</label><br></br>
        
        <label><input type="checkbox" checked={showShopOdds} onChange={() => setShowShopOdds(!showShopOdds)}/>Shop Odds</label><br></br>
        
      </div>

      <div className='toggleCatHeader' onClick={toggleTablesVisibility}>Tables</div>
      <div className={`data${showTables ? ' visible' : ''}`}>

      <label><input type="checkbox" checked={showCashout} onChange={() => setshowCashout(!showCashout)} />Piltover Cashout</label><br></br>

      <label><input type="checkbox" checked={showDemaciaItems} onChange={() => setShowDemaciaItems(!showDemaciaItems)}/>Demacia Items</label><br></br>

      <label><input type="checkbox" checked={showIxaocanTable} onChange={() => setShowIxaocanTable(!showIxaocanTable)}/>Ixaocan Table</label><br></br>
      

      <label><input type="checkbox" checked={showDamageFormula} onChange={() => setShowDamageFormula(!showDamageFormula)}/>Legend Damage</label><br></br>

      </div>


    </div>

    <div id="bigBox">
        {/* Conditional rendering based on the state variables */}
        {showAugmentData && <AugmentData />}
        {showTomeDisplay && <TomeDisplay />}
        {showLeDuck && <LeDuck />}
        {showPortalDisplay && <PortalDisplay aboveRyzeData={dataPackage[4]}/>}
        {showCashout && <Cashout />}
        {showAugmentTree && <AugmentTree/>}
        {showUnitStats && <UnitStats aboveUnitData={dataPackage[0]} />}
        {showEmblemWR && <EmblemWR aboveEmblemData={dataPackage[2]}/>}
        {showItemWR && <ItemWR aboveItemData={dataPackage[3]}/>}
        {showDemaciaItems && <DemaciaItems />}
        {showShopOdds && <ShopOdds />}
        {showDamageFormula && <DamageFormula />}
        {showIxaocanTable && <IxaocanTable />}
      </div>
    </div>
    );
  }
}

  
  




