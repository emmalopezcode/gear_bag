import './App.css';
import React from "react";
import { GearGrid } from "./GearGrid"
import { GearBag } from './GearBag'
import { logoPath, textPath } from './assets.json'


function App() {

    return (
    <div className="Shell">
      <div className="head">
        <svg width="118" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d={logoPath} fill="#1975F1"></path>
          <path d={textPath} fill="#fff"></path>
        </svg>

      
        

      </div>
      
      <div className="App">
        <GearGrid></GearGrid>
        <div className="spacer"></div>
      <GearBag></GearBag>

      </div>
    </div>

  );
}

export default App;


