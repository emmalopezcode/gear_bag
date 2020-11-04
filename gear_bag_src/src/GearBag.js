import { Grid } from "@material-ui/core";
import './App.css';
import React from "react";
import {allowDrop, drop} from "./App"

export class GearBag extends React.Component {


    constructor(props) {
        

        
        // localStorage.clear();
        // console.log(localStorage)
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

        for(const key in localStorage){
            this.state.items.push(localStorage.getItem(key));
        }   

        console.log(this.state.items)

    }
    //api/2.0/wikis/CATEGORY



    render() {
                    console.log(this.state.items.length);

        return (
            // <img key={item.toString()} src={item.image.standard}></img>

            //<p>{JSON.stringify(data[0])}</p>
            <div className = "gearbag" onDrop={(event)=>drop(event)} onDragOver={(event)=>allowDrop(event)}>
                {this.state.items.map(item => (
                    //console.log(this.state.items);

                    

                    <img  src={item}></img>

                ))}
            </div>



        );
    }
}
