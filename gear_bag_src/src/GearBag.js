import { List, ListItem } from "@material-ui/core";
import './App.css';
import React from "react";

export class GearBag extends React.Component {

    constructor(props) {
        super(props);

        var currStorage = [];
        if(localStorage.getItem('GearBag')){
            currStorage = JSON.parse(localStorage.getItem('GearBag'));
        }

        this.state = {
            error: null,
            items: [currStorage]
        };
    }

    isInGearBag(string) {
        if(localStorage.getItem('GearBag')){

            var currArray = JSON.parse(localStorage.getItem('GearBag'));
            return (currArray.indexOf(string));
        }else{
            return false;
        }
    }

    drop(event) {
        var data = event.dataTransfer.getData("Text");

        var currArray;

        if( JSON.parse(localStorage.getItem('GearBag')) === null){

            currArray = [];
            currArray.push(data);
            localStorage.setItem('GearBag', JSON.stringify(currArray));
            this.setState({
                items: currArray
            });
        }else{
            var currArray = JSON.parse(localStorage.getItem('GearBag'));

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

    render() {
        if (this.error) {
            return <div>Error: {this.error.message}</div>;

        } else {
            return (

                <List className="gearbag" component="nav"
                    onDrop={(event) => this.drop(event)}
                    onDragOver={(event) => this.allowDrop(event)}>

                    {this.state.items.map((item, index) => (
                        <ListItem  key={index} >
                            <img className="griditem"src={item}></img>
                        </ListItem>

                    ))}
                </List>

            );
        }
    }
}
