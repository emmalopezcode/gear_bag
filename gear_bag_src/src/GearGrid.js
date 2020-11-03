import { Grid, Paper } from "@material-ui/core";
import './App.css';
import React from "react";

function Desc(data) {
   return <p>
      {data}
   </p>;
}


export class GearGrid extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         items: [],
         data: null
      };
   }
   //api/2.0/wikis/CATEGORY

   componentDidMount() {
      fetch("https://www.ifixit.com/api/2.0/wikis/CATEGORY")
         .then(res => res.json())
         .then(
            (result) => {
               this.setState({
                  isLoaded: true,
                  data: result
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
      const { error, isLoaded, items, data } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Loading...</div>;
      } else {
         console.log('this is the result')
         console.log(data)
         var item = data[0];
         console.log(item.namespace)
         return (
            //<p>{JSON.stringify(data[0])}</p>
            <Grid className="grid-container" container spacing={2} md={9}>
               {data.map(item => (
                  <Grid item xs={12} md={4}>
                     <img key= {item.toString()} src = {item.image.standard}></img>
                  </Grid>
               ))}
            </Grid>
         );
      }
   }
}