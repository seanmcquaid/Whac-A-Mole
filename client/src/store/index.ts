import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import gameReducer, { gameState } from './game/reducers';

type initialState = {
  game: gameState;
};

const rootReducer = combineReducers({ game: gameReducer });

const configureStore = (preloadedState: initialState) => {
  const middleware = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  return store;
};

export default configureStore;
