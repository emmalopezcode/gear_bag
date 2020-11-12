import { Grid } from "@material-ui/core";
import './App.css';
import React from "react";

export class GearGrid extends React.Component {

   //extracts data from the wikis in order to show
   getApiData() {
      fetch(`https://www.ifixit.com/api/2.0/wikis/CATEGORY?offset=${this.state.page * 12}&limit=12`)
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

   //methods for pagination
   //this.getApiData as a callback because setState is asynchronous
   next() {
      var change = this.state.page;
      this.setState({ page: ++change }, this.getApiData);

   }

   previous() {
      if (this.state.page > 0) {
         var change = this.state.page;
         this.setState({ page: --change }, this.getApiData);
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

      const { error, isLoaded, data } = this.state;
      if (error) {
         return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
         return <div>Loading...</div>;
      } else {
         return (

            <div>

               <p>
                  Feel free to select any items you like!
               </p>

               <button onClick={() => { this.previous() }}>
                  Previous
               </button>

               <button onClick={() => { this.next() }}>
                  Next
               </button>


               <Grid className="grid-container" container spacing={2}>
                  {data.map((item, index) => (

                     <Grid
                        item md={4}
                        key={index}
                        draggable="true"
                        xs={12}  >
                        <img alt='' src={item.image.medium}></img>
                        <p id='geargrid-label'> {item.title}</p>

                     </Grid>

                  ))}

               </Grid>

            </div>

         );
      }
   }
}