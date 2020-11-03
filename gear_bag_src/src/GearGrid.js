import { Grid, Paper } from "@material-ui/core";
import './App.css';
import React from "react";


export class GearGrid extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         items: []
      };
   }

   componentDidMount() {
      fetch("https://www.ifixit.com")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  isLoaded: true,
                  items: result.items
               });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
               this.setState({
                  isLoaded: true,
                  error
               });
            }
         )
   }

   render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Loading...</div>;
      } else {
         return (
            <Grid className="grid-container" container spacing={2} md={9}>
               {items.map(item => (
                  <Grid item xs={12} md={4}>
                     <Paper className="test"> {item.name} </Paper>
                  </Grid>
               ))}
            </Grid>
         );
      }
   }
}