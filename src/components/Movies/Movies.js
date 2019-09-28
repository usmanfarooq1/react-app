import React from "react";
import Search from '../Search/Search';
export default class Movies extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div>
                    <Search placeholder='search movies by name'></Search>
                </div>
                <div>

                </div>
            </div>
        )
    }
}