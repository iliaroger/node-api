import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainView from './components/mainView';
import People from './components/routes/PeopleRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="backgroundWrapper">
            <div className="container mainContainer">
              <MainView></MainView>
            </div>
          </div>
        </Route>
        <Route exact path="/people">
          <People></People>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
