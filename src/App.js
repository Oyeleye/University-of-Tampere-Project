import React from 'react';
import { Home } from './Home';
import About from './About';
import DateAndTime from './components/DateAndTime';
import AddDate from './components/AddDate';
import { Route, Switch } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} /> 
        <Route exact path='/date' component={DateAndTime} />
        <Route exact path='/adddate' component={AddDate} />
      </Switch>
    </>
  );
}

export default App;
