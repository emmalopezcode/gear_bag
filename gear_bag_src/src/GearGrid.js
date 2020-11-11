import { Grid } from "@material-ui/core";
import './App.css';
import React from "react";

export class GearGrid extends React.Component {

   dragStart(event) {
      console.log('drag start')
      event.dataTransfer.setData("Text", event.target.id);
   }

   getApiData() {
      console.log('getApidata called');
      fetch(`https://www.ifixit.com/api/2.0/wikis/CATEGORY?offset=${this.state.page*10}&limit=10`)
         .then(res => res.json())
         .then(
            (result) => {

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
         );
   }

   next() {
      var change = this.state.page;
      change++;
      this.setState({ page: change });
      this.getApiData();

   }

   previous() {
      if (this.state.page > 0) {
         var change = this.state.page;
         change--;
         this.setState({ page: change });
         this.getApiData();
      }
   }

   constructor(props) {
      super(props);
      this.state = {
         error: null,
         isLoaded: false,
         data: null,
         page: 0
      };
   }

   componentDidMount() {
     this.getApiData();
   }

   render() {

      const { error, isLoaded, data, page } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Loading...</div>;
      } else {
         return (

            <div>

               <p>
                  Current page : {page}
               </p>

               <button onClick={() => { this.previous() }}>
                  Previous
               </button>

               <button onClick={() => { this.next() }}>
                  Next
               </button>


               <Grid className="grid-container" container spacing={2} md={9}>
                  {data.map((item, index) => (

                     <Grid
                        item md={4}
                        key={index}
                        draggable="true"
                        dragStart={(event) => this.dragStart(event)}
                        dragging={(event) => this.dragging(event)}
                        xs={12}  >
                        <img src={item.image.medium}></img>
                     </Grid>

                  ))}

               </Grid>

            </div>

         );
      }
   }
}