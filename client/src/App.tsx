import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './containers/Game';
import LeaderBoard from './containers/LeaderBoard';
import { Provider } from 'react-redux';
import store from './store';
import ScoreStatus from './containers/ScoreStatus';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/leaderBoard" component={LeaderBoard} />
        <Route exact path="/scoreStatus" component={ScoreStatus} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
