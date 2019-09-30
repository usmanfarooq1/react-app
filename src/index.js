import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
// const initialState = {
//     counter: 0,
//     search_value:'',
//     articles:[],
//     movies:[],
//     articles_initial_empty:true,
//     movies_initial_empty:true,

//   };

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Router>
    <Provider store={store}><App/></Provider>

</Router>, document.getElementById('root'));

