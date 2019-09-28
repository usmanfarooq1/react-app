import React from "react";
import Search from '../Search/Search';
import axios from "axios";
export default class Articles extends React.Component{
    state={
        articles:[]
    }
    constructor(){
        super();
        // this.setState({articles:[]})
    }
    render(){
        return(
            <div>
                <div>
                    <Search handle={this.clickHandler} placeholder='search articles by name' apiCall='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' apiKey='&api-key=EcOKNAa9YG6EnXDDw9CXGaVAga1jUbBq' ></Search>
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
    // onSearchClick(event){
    //     event.preventDefault();
    //     a
    // }
}