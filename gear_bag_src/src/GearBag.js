import { List, ListItem } from "@material-ui/core";
import './App.css';
import React from "react";

export class GearBag extends React.Component {

    
    //constructor of the component containing your items
    constructor(props) {
        super(props);
        var currStorage = [];

        //extracts and parses localstorage data (ensuring permanence post-reload)
        if (JSON.parse(localStorage.getItem('GearBag'))) {
            currStorage = JSON.parse(localStorage.getItem('GearBag'));
        }

        this.state = {
            error: null,
            items: currStorage
        };
    }

    drop(event) {

        //the data of the dragged object
        var data = event.dataTransfer.getData("Text");
        var currArray;

        //logic for extracting data from the localStorage and showing it in the component

        //localStorage is untouched
        if (JSON.parse(localStorage.getItem('GearBag')) === null) {

            currArray = [];
            currArray.push(data);
            localStorage.setItem('GearBag', JSON.stringify(currArray));
            this.setState({
                items: currArray
            });

        //localstorage at GearBag has data already
        } else {

            currArray = JSON.parse(localStorage.getItem('GearBag'));

            if (currArray.indexOf(data) < 0) {
                currArray.push(data);
                localStorage.setItem('GearBag', JSON.stringify(currArray));
                this.setState({
                    items: currArray
                });
            }
        }
    }

    allowDrop(event) {
        event.preventDefault();
    }

    clear(){
        localStorage.clear();
        this.setState({items: []});
    }

    render() {
        if (this.error) {
            return <div>Error: {this.error.message}</div>;

        } else {
            return (

                <div height="200px">
                    <p>
                        Gear
                    </p>

                    <button onClick={() => { this.clear() }}>
                        clear
                    </button>

                    <List className="gearbag" component="nav"
                        onDrop={(event) => this.drop(event)}
                        onDragOver={(event) => this.allowDrop(event)}>

                        {this.state.items.map((item, index) => (
                            <ListItem key={index} >
                                <img alt="" className="griditem" src={item}></img>
                            </ListItem>

                        ))}
                    </List>
                </div>

            );
        }
    }
}
