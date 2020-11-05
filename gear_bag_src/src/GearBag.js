import { List, ListItem } from "@material-ui/core";
import './App.css';
import React from "react";

export class GearBag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            items: [JSON.parse(localStorage.getItem('GearBag'))]
        };
    }

    isInGearBag(string) {
        var currArray = JSON.parse(localStorage.getItem('GearBag'));
        return (currArray.indexOf(string));
    }

    drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("Text");
        var currArray = JSON.parse(localStorage.getItem('GearBag'));

        if (currArray.indexOf(data) < 0) {
            currArray.push(data);
            localStorage.setItem('GearBag', JSON.stringify(currArray));
            this.setState({
                items: currArray
            });
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

                <List className="gearbag" component="nav" horizontal={false}
                    onDrop={(event) => this.drop(event)}
                    onDragOver={(event) => this.allowDrop(event)}>

                    {this.state.items.map((item, index) => (
                        <ListItem>
                            <img className="griditem" key={index} src={item}></img>
                        </ListItem>

                    ))}
                </List>

            );
        }
    }
}
