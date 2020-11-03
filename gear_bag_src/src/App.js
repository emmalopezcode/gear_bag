import logo from './logo.svg';
import './App.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { GearGrid } from "./GearGrid"
import $ from 'jquery';

// const useStyles = makeStyles((theme) => ({

//   grid: {
//     width : '100%',
//     margin : '0px'
//   },

//   paper: {
//     padding: theme.spacing(2)

//   }

// }));





function GearItem() {
  return <Grid item xs={12} md={4}>
    <Paper className="test"> 10 </Paper>
  </Grid>;
}


function App() {



  return (
    <div className="App">
      <GearGrid></GearGrid>
    </div>
  );
}

export default App;
