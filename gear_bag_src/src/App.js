import './App.css';
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { GearGrid } from "./GearGrid"
// import $ from 'jquery';
// import Draggable from 'react-draggable';
// import { allowDrop, drop} from "./drop";






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
  console.log(localStorage);

  localStorage.setItem('firstItem', document.getElementById(data))
  console.log(localStorage);
  // event.target.appendChild(document.getElementById(data));
}

function App() {



  return (
    <div className="App">
      <GearGrid></GearGrid>
      <div className = "gearbag" onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
        hello
      </div>
    </div>

  );
}

export default App;
