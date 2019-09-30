import React from 'react';
import Movies from '../Movies/Movies';
import Articles from '../Articles/Articles'
import { Switch, Route } from 'react-router-dom'
// import Counter from '../Counter/Counter'
function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Articles} />
                <Route exact path="/movies" component={Movies} /> 
            </Switch>
            {/* <Counter></Counter> */}
        </main>
    );
}

export default Main;
