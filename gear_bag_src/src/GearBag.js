import { Grid, Paper } from "@material-ui/core";
import './App.css';
import React from "react";

export class GearBag extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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

        return (

            //<div 
                <Grid className="gearbag" container spacing={2} md={4} onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>

                    {this.state.items.map(item => (
                        <Grid item md={6}>

                            <img key={Math.random() + ""} src={item}></img>
                        </Grid>


                    ))}
                </Grid>

            //</div>





        );
    }
}
