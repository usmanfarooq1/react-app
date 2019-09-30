import React from "react";
import Search from '../Search/Search';
import Article from "../Article/Article";
import { connect } from "react-redux";
 class Articles extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Search placeholder='search articles by name' apiCall='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' apiKey='&api-key=EcOKNAa9YG6EnXDDw9CXGaVAga1jUbBq' ></Search>
                </div>
                <div>
                {this.props.articles.map((article, index)=> <Article key={index} article={article} />  )}    
                </div>
                
            </div>
        )
    }
 
    // onSearchClick(event){
    //     event.preventDefault();
    //     a
    // }
}
const mapStateToProps = state => ({
    articles: state.articles.articles,
    loading: state.articles.loading,
    error: state.articles.error
  });


  export default connect(mapStateToProps)(Articles);