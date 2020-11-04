import './App.css';
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { GearGrid } from "./GearGrid"
// import $ from 'jquery';
// import Draggable from 'react-draggable';
// import { allowDrop, drop} from "./drop";
import { GearBag } from './GearBag'

var uniqueId = 0;



function GearItem() {
  return <Grid item xs={12} md={4}>
    <Paper className="test"> 10 </Paper>
  </Grid>;
}

export var allowDrop = function(event) {
  event.preventDefault();
}

export var drop = function(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  //console.log(data)
  localStorage.setItem(uniqueId, data)
  uniqueId++;
  // event.target.appendChild(document.getElementById(data));
}

function App() {



  return (
    <div className="App">
      <GearGrid></GearGrid>
      <GearBag></GearBag>
    </div>

  );
}

export default App;
