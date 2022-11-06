import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import SearchPage from './SearchPage'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App=()=> {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </ Router>
    </div>
  );
}

export default App;
