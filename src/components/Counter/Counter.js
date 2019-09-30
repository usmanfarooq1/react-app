import React,{Component} from 'react';
import { connect } from 'react-redux';
import {increment,decrement} from '../../actions/counter_actions';
 class Counter extends Component{
    // state = {counter:0}
    decrement=()=>{
        this.props.decrement();
        // this.setState({counter:this.state.counter-1});
    }
    increment=()=>{
        this.props.increment();
        // this.setState({counter:this.state.counter+1});
    }
    
    render(){
        return(
            <div>
                <h2>Counter with redux</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.counter.counter}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      counter: state.counter
    };
  }

  // in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
const mapDispatchToProps = {
    increment,
    decrement
  };
  export default connect(mapStateToProps,mapDispatchToProps)(Counter)