import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './containers/Game';
import LeaderBoard from './containers/LeaderBoard';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/leaderBoard" component={LeaderBoard} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
