import React from 'react';
import './Search.css';
import { connect } from "react-redux";
import {getArticlesAsync} from "../../actions/articles_actions";

class Search extends React.Component {
    state={
        
    }
    // constructor(props) {
    //     super(props);
        
    // }
    componentDidMount(){
        const newState=Object.assign({}, this.state, {
            inputValue:''
          });
          this.setState(newState);
    }
    onChangeHandler(e){
        this.setState(Object.assign({}, this.state, {
            inputValue: e.target.value.trim()
          })
          );
        //   console.log(this.state)
    }

    
    render() {
        return (

            <div className='form-container'>
                {/* <form> */}
                    <div className='form-item'>
                        <input type="text" onChange={this.onChangeHandler.bind(this)} placeholder={this.props.placeholder} />
                    </div>
                    <div className='form-item-button'>
                        <button className='button_search' onClick={this.clickHandler.bind(this)}>Search</button>
                    </div>
                {/* </form> */}
            </div>
        );
    }
    clickHandler(event){
        event.preventDefault();
        this.props.dispatch(getArticlesAsync(this.state.inputValue)) 
    }
}
const mapDispatchToProps = dispatch => ({
    
    dispatch                // ← Add this
 })
 export default connect(null, mapDispatchToProps)(Search)