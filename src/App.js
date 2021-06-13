import './App.css';
import TableFilms from "./components/tableFilms/tableFilms";
import React from "react";
import MoviePage from "./components/tableFilms/moviePage/moviePage";
import {Route, Switch} from "react-router";

const App = () => {
    const NoMatchPage = () => {
        return <h3 style={{color: 'red'}}>404 - Not found</h3>
    }
    return <div className="App">
        <Switch>
            <Route exact path='/' component={TableFilms}/>
            <Route path={`/movie/`} component={MoviePage}/>
            <Route component={NoMatchPage}/>
        </Switch>
    </div>
}

export default App;
