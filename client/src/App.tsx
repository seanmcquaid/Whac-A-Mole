import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './containers/Game';
import LeaderBoard from './containers/LeaderBoard';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Game} />
      <Route exact path="/leaderBoard" component={LeaderBoard} />
    </Switch>
  </Router>
);

export default App;
