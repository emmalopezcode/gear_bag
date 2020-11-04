import { Grid } from "@material-ui/core";
import './App.css';
import React from "react";


function Desc(data) {
   return <p>
      {data}
   </p>;
}


export class GearGrid extends React.Component {

   dragStart(event) {
      console.log('drag start')
      event.dataTransfer.setData("Text", event.target.id);
    }
    
    dragging(event) {
      document.getElementById("demo").innerHTML = "The p element is being dragged";
    }
    


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
               //console.log('soo...')

               this.setState({
                  isLoaded: true,
                  data: result
               });
            },
 
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
            // <img key={item.toString()} src={item.image.standard}></img>

            //<p>{JSON.stringify(data[0])}</p>
            <Grid className="grid-container" container spacing={2} md={4}>
               {data.map(item => (

                  <Grid draggable="true" dragStart={(event)=>this.dragStart(event)} dragging={(event)=>this.dragging(event)} item xs={12} md={4} >
                     <img key={item.toString()} src={item.image.standard}></img>
                  </Grid>

               ))}
            </Grid>


         );
      }
   }
}