import React from "react";
import Search from '../Search/Search';
import axios from "axios";
export default class Movies extends React.Component{
    // constructor(){
    //     super();
    // }
    render(){
        return(
            <div>
                <div>
                    <Search handle={this.clickHandler} placeholder='search movies by name'></Search>
                </div>
                <div>

                </div>
            </div>
        )
    }
    clickHandler(event){
        event.preventDefault();
        axios.get(this.state.apiCall+this.state.inputValue+this.state.apiKey).then(response=>{
          let articles_urls=  response.data.response.docs.map(d=>{
              return d.web_url;
          })
          this.setState(Object.assign({}, this.state, {
            articles:articles_urls
          })
          );
          console.log(this.state)
        })
    }
}