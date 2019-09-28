import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Articles from './components/Articles/Articles'
import App from './App';
export default  (
    <Router>
        <div>
            <Route  path="/" component={App} />
            <Route path="/movies" component={Movies} />
            <Route path="/articles" component={Articles} />
        </div>
    </Router>
)
