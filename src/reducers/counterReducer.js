import {INCREMENT,DECREMENT} from '../actions/counter_actions';
const initialState = {
    counter: 0,
}
export default function reducer(state=initialState, action) {
    console.log('reducer', state, action);
    if(action.type===INCREMENT){
        return {
            counter: state.counter + 1
          };
    }else if (action.type===DECREMENT){
        return {
            counter: state.counter - 1
          };
    }else if(action.type==='RESET'){
        return {
            counter:0
        }
    }
    return state;
  }