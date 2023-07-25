import './App.css';
import React, { useState } from 'react';
import UnitStats from './visuals/unitDisplay.js'
import CoreDisplay from './visuals/coreDisplay.js'

export function App() {
  return (
      <div>
        <CoreDisplay/>
        <UnitStats/>
      </div>
  );
}