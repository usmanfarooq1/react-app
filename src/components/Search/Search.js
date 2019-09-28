import React from 'react';
import './Search.css';

export default class Search extends React.Component {
    state={

    }
    constructor(props) {
        super(props);
        
    }
    componentDidMount(){
        const newState=Object.assign({}, this.state, {
            apiCall: this.props.apiCall,
            apiKey:this.props.apiKey,
            inputValue:''
          });
          this.setState(newState);
    }
    onChangeHandler(e){
        // console.log(e.target.value)
        this.setState(Object.assign({}, this.state, {
            inputValue: e.target.value.trim()
          })
          );
          console.log(this.state)
    }

    
    render() {
        return (

            <div className='form-container'>
                {/* <form> */}
                    <div className='form-item'>
                        <input type="text" onChange={this.onChangeHandler.bind(this)} placeholder={this.props.placeholder} />
                    </div>
                    <div className='form-item-button'>
                        <button onClick={this.props.handle.bind(this)}>Search</button>
                    </div>
                {/* </form> */}
            </div>
        );
    }
}
