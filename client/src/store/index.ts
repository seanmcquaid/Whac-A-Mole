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
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export default configureStore;
