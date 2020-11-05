import { Grid} from "@material-ui/core";
import './App.css';
import React from "react";

export class GearBag extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            error: null,
            items: JSON.parse(localStorage.getItem('GearBag'))
        };
    }

    drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        var currArray = JSON.parse(localStorage.getItem('GearBag'));
        currArray.push(data);
        localStorage.setItem('GearBag', JSON.stringify(currArray));
        this.setState({
            items: currArray
        })
    }

    allowDrop(event) {
        event.preventDefault();
    }



    render() {
        if (error) {
            return <div>Error: {error.message}</div>;
        
        } else {
            return (

                <Grid
                className="gearbag"
                container
                spacing={2}
                md={6}
                onDrop={(event) => this.drop(event)}
                onDragOver={(event) => this.allowDrop(event)}>
        
                {this.state.items.map(item => (
                  //  <Grid item xs={12} md={6} className="griditem">
        
                        <img className="griditem" key={Math.random() + ""} src={item}></img>
                    //</Grid>
        
        
                ))}
            </Grid>



            );
        }
    }
}
