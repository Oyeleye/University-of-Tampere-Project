import React from 'react';
import { Home } from './Home';
import About from './About';
import { Route, Switch } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About} /> 
      </Switch>
    </>
  );
}

export default App;
